import React from "react";

const StudentVideoView = () => {
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
                    <a href="/student/course/rating">
                        <div className="w-[80%] text-[#00BF63] bg-[#EBEBEB] font-[700] py-2 text-center my-10 m-auto text-[1.3vw] rounded-[10px] cursor-pointer">
                            Rating course
                        </div>
                    </a>
                </div>
                <div className="w-[85%]">
                    <p className="font-[Roboto] font-[600] text-[#525252] text-[2vw] ml-8 mt-10">VIDEO TITLE</p>
                    <div className="bg-[#D9D9D9] w-[50%] aspect-video m-auto mt-[20px] pt-[8%]">
                        <img src="../../src/assets/play.png" className="w-[20%] m-auto"/>
                    </div>
                    <div className="cursor-pointer bg-[#00BF63] py-2 text-white text-center w-[30%] my-6 m-auto rounded-[10px] font-bold text-[1.6vw]">
                        COMPLETE AND Continue
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentVideoView;
