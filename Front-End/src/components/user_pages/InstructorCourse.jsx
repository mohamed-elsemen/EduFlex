
const InstructorCourse = () => {
    return (
        <div className="pt-[100px]">
            <div className="flex">
                <div className="relative bg-[#F5F5F5] h-lvh min-h-screen w-[15%]">
                    <p className="text-[#000000] font-[Roboto] font-[900] italic text-center my-4 text-[1.5vw]">
                        Uploading <span className="text-[#00BF63]">Video</span>
                    </p>
                    <a href="/instructor/course/upload">
                        <div className="text-center bg-[#D9D9D9] w-full py-2 text-[18px] font-[900] cursor-pointer">
                            +
                        </div>
                    </a>
                </div>
                <div className="w-[85%]">
                    <p className="text-[#000000] font-[Roboto] font-[900] italic text-center my-4 text-[2.5vw]">
                        Course <span className="text-[#00BF63]">Name</span>
                    </p>
                    <p className="mx-8 font-bold text-[22px]">
                      Notes!
                    </p>
                    <p  className="mx-[50px] font-[500] text-[20px] mt-[20px]">
                        1- The video must be uploaded in MP4 format.
                    </p>
                    <p className="mx-[50px] font-[500] text-[20px] mt-[20px]">
                        2- Each video should be numbered in ascending order to indicate its sequence.
                    </p>
                    <p className="mx-[50px] font-[500] text-[20px] mt-[20px]">
                        3- The video quality should be a minimum of 480 px.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default InstructorCourse;
