import cv2
import numpy as np

def process_image(image_path):
    image = cv2.imread(image_path)
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(gray, (5, 5), 0)
    thresh = cv2.adaptiveThreshold(blur, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C, cv2.THRESH_BINARY_INV, 11, 2)
    return thresh

def find_contours(thresh, image):
    contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    largest_contour = max(contours, key=cv2.contourArea)
    
    x, y, w, h = cv2.boundingRect(largest_contour)
    card = image[y:y + h, x:x + w]
    
    cv2.imwrite('card_p.jpg', card, (int(cv2.IMWRITE_JPEG_QUALITY), 100))
    
    return card

# Test
image_path = 'images/6.jpg'
thresh = process_image(image_path)

image = cv2.imread(image_path)
card = find_contours(thresh, image)

cv2.imshow('Processed Image', image)
cv2.waitKey(0)

