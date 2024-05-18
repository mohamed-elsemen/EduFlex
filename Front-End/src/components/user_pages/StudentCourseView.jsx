import React from "react";

const StudentCourses = () => {
    const [showPaymentModal, setShowPaymentModal] = React.useState(false);
    const [showOtpModal, setShowOtpModal] = React.useState(false);
    function otpModal(){
        setShowPaymentModal(false);
        setShowOtpModal(true);
    }
    function otpBack(){
        setShowPaymentModal(true);
        setShowOtpModal(false);
    }
    return (
        <div className="pt-[100px]">
            <div className="mx-[20%] grid grid-cols-2">
                <div>
                    <div className="bg-[#D9D9D9] w-[100%] aspect-video m-auto mt-[20px] pt-[15%]">
                        <img src="../../src/assets/play.png" className="w-[25%] m-auto"/>
                    </div>
                    <div className="my-4 py-1 bg-[#F4F4F4]">
                        <div className="cursor-pointer bg-[#00BF63] py-2 text-white text-center w-[30%] my-4 m-auto rounded-[10px] font-bold text-[1.2vw]" onClick={() => setShowPaymentModal(true)}>
                            Buy now
                        </div>
                    </div>


                    <div className="mb-[20px] flex">
                        <div className="w-[70px] bg-[#D9D9D9] aspect-square rounded-full"></div>
                        <div className="bg-[#D9D9D9] w-[80%] ml-[6%] rounded-[10px]">
                            <p className="text-[#777777] px-[20px] pt-2 font-[600]">Name</p>
                            <p className="text-black px-[40px] font-[600]">omg the video  is useful</p>
                        </div>
                    </div>
                    <div className="mb-[20px] flex">
                        <div className="w-[70px] bg-[#D9D9D9] aspect-square rounded-full"></div>
                        <div className="bg-[#D9D9D9] w-[80%] ml-[6%] rounded-[10px]">
                            <p className="text-[#777777] px-[20px] pt-2 font-[600]">Name</p>
                            <p className="text-black px-[40px] font-[600]">omg the video  is useful</p>
                        </div>
                    </div>
                    <div className="mb-[20px] flex">
                        <div className="w-[70px] bg-[#D9D9D9] aspect-square rounded-full"></div>
                        <div className="bg-[#D9D9D9] w-[80%] ml-[6%] rounded-[10px]">
                            <p className="text-[#777777] px-[20px] pt-2 font-[600]">Name</p>
                            <p className="text-black px-[40px] font-[600]">omg the video  is useful</p>
                        </div>
                    </div>

                </div>
                <div className="ml-2 mt-[20px]">
                    <div className="bg-[#F4F4F4] rounded-[5px] px-4 py-4">
                        <p className="font-bold">NAME OF COURSE: </p>
                        <img src="../../src/assets/star_f.PNG" className="inline w-[20px]"/>
                        <img src="../../src/assets/star_f.PNG" className="inline w-[20px]"/>
                        <img src="../../src/assets/star_f.PNG" className="inline w-[20px]"/>
                        <img src="../../src/assets/star_f.PNG" className="inline w-[20px]"/>
                        <img src="../../src/assets/star.PNG" className="inline w-[20px]"/>
                        <p className="mt-2">details complete introduction to data science and machine learrnning</p>
                        <p className="font-[500]">Education: </p>
                        <p className="font-[500]">Stage: </p>
                        <p className="font-[500]">Level: </p>
                        <p className="font-[500]">Term: </p>
                        <p className="font-[500]">Subject: </p>
                        <p className="font-[500]">Course availability: </p>
                        <p className="font-[500]">Language: </p>
                        <p className="font-[500]">Price: </p>
                    </div>
                </div>
            </div>
            {showPaymentModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto mt-[100px] mb-4 mx-auto max-w-xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="p-5">
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowPaymentModal(false)}>
                                        <img src="../src/assets/arrow_left.png" className="w-[30px]"/>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-6 flex-auto">
                                    <p>with</p>
                                    <img src="../src/assets/payments.PNG" className="w-[80%] mt-2"/>
                                    <label className="font-[500]">Card Name</label>
                                    <input className="bg-[#EEEEEE] w-full h-[40px] px-4 rounded-[10px] mb-2" placeholder="Ali m*****"/>
                                    <br/>
                                    <label className="font-[500]">Card Number</label>
                                    <input className="bg-[#EEEEEE] w-full h-[40px] px-4 rounded-[10px]" placeholder="6090xxxx"/>
                                    <br/>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label className="font-[500]">Expire</label>
                                            <input className="bg-[#EEEEEE] w-full h-[40px] px-4 rounded-[10px] mb-2" placeholder="03/26"/>
                                        </div>
                                        <div>
                                            <label className="font-[500]">CVV</label>
                                            <input className="bg-[#EEEEEE] w-full h-[40px] px-4 rounded-[10px] mb-2" placeholder="398"/>
                                        </div>
                                    </div>
                                    <label className="container">Set as primary card
                                        <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="p-6 rounded-b">
                                    <div className="cursor-pointer bg-[#00BF63] py-2 text-white text-center w-[100%] my-4 rounded-[10px] font-bold text-[20px]" onClick={() => otpModal()}>
                                        Buy now
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-75 fixed inset-0 z-40 bg-[#a3a3a39c]"></div>
                </>
            ) : null}
            {showOtpModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto mt-[100px] mb-4 mx-auto max-w-xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="p-5">
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => otpBack()}>
                                        <img src="../src/assets/arrow_left.png" className="w-[30px]"/>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-6 flex-auto">
                                    <p className="text-center text-[#515151] font-bold text-[20px] mb-8">OTP</p>
                                    <p className="text-center text-[#515151] font-[400] text-[14px] mx-8 mb-4">The code send to your phone **********73</p>
                                    <input className="bg-[#EEEEEE] w-[50px] h-[40px] px-4 rounded-[10px] mb-2 mr-2 border-[1px] border-[#C1C1C1]"/>
                                    <input className="bg-[#EEEEEE] w-[50px] h-[40px] px-4 rounded-[10px] mb-2 mr-2 border-[1px] border-[#C1C1C1]"/>
                                    <input className="bg-[#EEEEEE] w-[50px] h-[40px] px-4 rounded-[10px] mb-2 mr-2 border-[1px] border-[#C1C1C1]"/>
                                    <input className="bg-[#EEEEEE] w-[50px] h-[40px] px-4 rounded-[10px] mb-2 mr-2 border-[1px] border-[#C1C1C1]"/>
                                    <input className="bg-[#EEEEEE] w-[50px] h-[40px] px-4 rounded-[10px] mb-2 mr-2 border-[1px] border-[#C1C1C1]"/>
                                    <input className="bg-[#EEEEEE] w-[50px] h-[40px] px-4 rounded-[10px] mb-2 border-[1px] border-[#C1C1C1]"/>
                                    <p className="text-[#919191] font-[400] text-[14px] mx-8 my-4 relative">
                                        Resend in 01:00
                                        <span className="absolute font-[500] cursor-pointer right-0">Resend?</span>
                                    </p>
                                </div>
                                <div className="p-6 rounded-b">
                                    <div className="cursor-pointer bg-[#00BF63] py-2 text-white text-center w-[100%] my-4 rounded-[10px] font-bold text-[20px]" onClick={() => setShowOtpModal(false)}>
                                        Verify
                                    </div>
                                    <div className="cursor-pointer bg-[#959595] py-2 text-white text-center w-[100%] my-4 rounded-[10px] font-bold text-[20px]" onClick={() => setShowOtpModal(false)}>
                                        Cancel
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-75 fixed inset-0 z-40 bg-[#a3a3a39c]"></div>
                </>
            ) : null}
        </div>
    );
};

export default StudentCourses;
