import cv2
import numpy as np

def processing(img):
    img_gray = cv2.cvtColor(img , cv2.COLOR_BGR2GRAY)
    img_blur = cv2.GaussianBlur(img_gray , (5,5) , 1)
    img_canny = cv2.Canny(img_blur , 200 , 200 )
    
    Kernal = np.ones((5,5))
    img_Dial = cv2.dilate(img_canny , Kernal , iterations=2)
    img_Thres = cv2.erode(img_Dial , Kernal , iterations=1) 
    
    return img_Thres

def getContours(image):
    biggest = np.array([])
    maxArea=0
    contours , hierachy = cv2.findContours(image , cv2.RETR_EXTERNAL , cv2.CHAIN_APPROX_NONE)
    for cnt in contours :
        area = cv2.contourArea(cnt)
        if area > 600 :
            #num of contours
            peri = cv2.arcLength(cnt , True)
            aprox= cv2.approxPolyDP(cnt , 0.02*peri , True)
            if area > maxArea and len(aprox) == 4 :
                biggest = aprox
                maxArea = area
    cv2.drawContours(img_contours , biggest, -1 , (0,0,255) , 4)
    return biggest 

def reorder(points):
    points = points.reshape((4,2))
    new_points = np.zeros((4,1,2) , np.int32)
    add = points.sum(1)
    new_points[0]=points[np.argmin(add)]
    new_points[3]=points[np.argmax(add)]
    diff=np.diff(points , axis=1)
    new_points[1]=points[np.argmin(diff)]
    new_points[2]=points[np.argmax(diff)]
    return new_points



def warp(image , biggest , img_size ):
    width_img = img_size[0]
    heigt_img = img_size[1]
    biggest = reorder(biggest)
    pts1= np.float32(biggest)
    pts2= np.float32(([0,0] , [width_img,0] ,[0 , heigt_img] , [width_img , heigt_img]))
    matrix = cv2.getPerspectiveTransform(pts1 , pts2)
    img_output = cv2.warpPerspective(image , matrix ,(width_img,heigt_img))
    img_cropped = img_output[20:img_output.shape[0]-20 , 20:img_output.shape[1]-20]
    img_cropped = cv2.resize(img_cropped , (width_img , heigt_img))
    
    return img_cropped


    
    


cam = cv2.VideoCapture(1)

while True :
   _ , image = cam.read() 
   img_size = image.shape
   
   img_contours = image.copy() 
   
   Processing = processing(image)
   
   biggest = getContours(Processing)
   
   getContours(Processing)
   
   if biggest.size != 0 :
       imgwarped = warp(image , biggest ,img_size )
       key= cv2.waitKey(1)
       if key == ord('s'):
           cv2.imwrite('test.jpg' , imgwarped)
       
    #    cv2.imshow('Document', imgwarped)
    
   else:
       pass
   
   cv2.imshow('cam',Processing)
   cv2.imshow('com',img_contours)
   
   if cv2.waitKey(1) & 0xff == ord('q'):
       break