import React from "react";

const StudentRating = () => {
    return (
        <div className="pt-[100px]">
            <div className="flex">
                <div className="relative bg-[#F5F5F5] h-lvh min-h-screen w-[15%]">
                    <p className="text-[#00BF63] font-[Roboto] font-[900] italic text-center my-4 text-[1.5vw]">
                        Course Name
                    </p>
                    <div className="mt-[20px] mb-[5px]">
                        <p className="ml-5 font-[500] text-[1.1vw] inline">Name of chapter</p>
                    </div>
                    <div className="bg-[#D9D9D9] w-full py-2 text-[16px] text-[#19BA6E] font-[600] cursor-pointer border-b-[1px] border-[#888888] relative">
                        <img src="../../src/assets/play_tin.png" className="mx-1 inline w-[1.3vw] relative bottom-[0.15vw]"/>
                        <span>1- video  (1:52)</span>
                    </div>

                    <div className="mt-[20px] mb-[5px]">
                        <p className="ml-5 font-[500] text-[1.1vw] inline">Name of chapter</p>
                    </div>
                    <div className="bg-[#D9D9D9] w-full py-2 text-[16px] text-[#19BA6E] font-[600] cursor-pointer border-b-[1px] border-[#888888] relative">
                        <img src="../../src/assets/play_tin.png" className="mx-1 inline w-[1.3vw] relative bottom-[0.15vw]"/>
                        <span>1- video  (1:52)</span>
                    </div>

                    <div className="w-[80%] text-[#00BF63] bg-[#EBEBEB] font-[700] py-2 text-center my-10 m-auto text-[1.3vw] rounded-[10px] cursor-pointer">
                        Rating course
                    </div>
                </div>
                <div className="w-[85%]">
                    <div className="my-[100px] w-[45%] m-auto">
                        <p className="text-[#00BF63] font-[700] text-[1.8vw]">Rating course</p>
                        <div className="m-auto my-4 w-[210px]">
                            <img src="../../src/assets/star.PNG" className="inline w-[40px]"/>
                            <img src="../../src/assets/star.PNG" className="inline w-[40px]"/>
                            <img src="../../src/assets/star.PNG" className="inline w-[40px]"/>
                            <img src="../../src/assets/star.PNG" className="inline w-[40px]"/>
                            <img src="../../src/assets/star.PNG" className="inline w-[40px]"/>
                        </div>
                        <div className="bg-[#D9D9D9]">
                            <p className="text-[1.1vw] font-[700] px-8 pt-4 relative">
                                Comment
                                <img src="../../src/assets/3_dot_vert.png" className="absolute right-4 w-[20px] bottom-1 cursor-pointer"/>
                            </p>
                            <div className="h-[100px]">

                            </div>
                            <hr className="border-t-[1px] w-[90%] m-auto border-[#626262]"/>
                            <input type="text" placeholder="Write a comment" className="w-[80%] bg-[#D9D9D9] my-2 ml-[5%] h-[40px]"/>
                            <img src="../../src/assets/send.png" className="inline w-[30px] ml-[5%] bottom-1 cursor-pointer"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRating;
