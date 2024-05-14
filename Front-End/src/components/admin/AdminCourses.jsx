import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const AdminCourses = () => {
    function primary_btn(){
        let general_skills = document.getElementById("general-skills");
        let primary_skills = document.getElementById("primary-skills");
        skills_back_btn();
        general_skills.style.display = "none";
        primary_skills.style.display = "block";
    }

    function middle_btn(){
        let general_skills = document.getElementById("general-skills");
        let middle_skills = document.getElementById("middle-skills");
        skills_back_btn();
        general_skills.style.display = "none";
        middle_skills.style.display = "block";
    }

    function high_btn(){
        let general_skills = document.getElementById("general-skills");
        let high_skills = document.getElementById("high-skills");
        skills_back_btn();
        general_skills.style.display = "none";
        high_skills.style.display = "block";
    }

    function univ_btn(){
        let general_skills = document.getElementById("general-skills");
        let univ_skills = document.getElementById("univ-skills");
        skills_back_btn();
        general_skills.style.display = "none";
        univ_skills.style.display = "block";
    }

    function skills_back_btn(){
        let general_skills = document.getElementById("general-skills");
        let primary_skills = document.getElementById("primary-skills");
        let middle_skills = document.getElementById("middle-skills");
        let high_skills = document.getElementById("high-skills");
        let univ_skills = document.getElementById("univ-skills");
        general_skills.style.display = "block";
        primary_skills.style.display = "none";
        middle_skills.style.display = "none";
        high_skills.style.display = "none";
        univ_skills.style.display = "none";
    }
    return (
        <div>
            <div className="ml-[10%] mt-[20px] flex">
                <div className="w-[30%]">
                    <img src="../src/assets/users/user1.jpg" className="w-[18%] rounded-full inline"/>
                    <span className="ml-[10px] font-[500] text-[1.3vw]">Mohamed Ali</span>
                    <img src="../src/assets/arrow_down.png" className="inline ml-[10px] w-[20px]"/>
                </div>
                <div className="w-[70%]">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon-admin"/>
                    <input className="search-input-field-admin" placeholder="Search"/>
                </div>
            </div>
            <h1 className="ml-[8%] mt-[20px] text-[1.8vw] font-bold">Courses</h1>
            <p className=" ml-[8%] text-[#505050] text-[1.3vw] font-[500]">Overview</p>
            <div className="flex">
                <div className="w-[20%] bg-gradient-to-b from-[#D0D0D0] to-[#f2f2f28c] ml-[10%] my-4 rounded-[10px]">
                    <img src="../src/assets/admin_icons/book.PNG" className="m-5 mr-3 w-[2.1vw] inline"/>
                    <span className="text-[#1A1A1A] font-[600] text-[1.2vw] relative top-[5px]">Running Courses</span>
                    <div className="m-auto mx-[30%] relative bottom-[20px] relative top-[-0.8vw]">
                        <span className="text-[#808080] font-bold text-[1vw]">6 Courses</span>
                        <img src="../src/assets/admin_icons/trend.PNG" className="relative bottom-[0.3vw] ml-[4%] w-[1.7vw] inline"/>
                    </div>
                </div>
                <div className="w-[20%] bg-gradient-to-b from-[#D0D0D0] to-[#f2f2f28c] ml-[20px] my-4 rounded-[10px]">
                    <img src="../src/assets/admin_icons/money.PNG" className="m-5 mr-3 w-[2.1vw] inline"/>
                    <span className="text-[#1A1A1A] font-[600] text-[1.2vw] relative top-[5px]">Income till now</span>
                    <div className="m-auto mx-[30%] relative bottom-[20px]">
                        <span className="text-[#808080] font-bold text-[1vw]">$ 5000</span>
                        <img src="../src/assets/admin_icons/trend.PNG" className="relative bottom-[0.3vw] ml-[4%] w-[1.7vw] inline"/>
                    </div>
                </div>
            </div>
            <h1 className="ml-[8%] mt-[50px] text-[1.8vw] font-bold">Top Rated Courses</h1>
            <div className="mx-[10%] m-auto grid grid-cols-4">
                <div>
                    <img src="../src/assets/users/user2.png" className="w-[10%] rounded-full inline my-[6%] ml-6"/>
                    <span className="ml-[10px] font-[500] text-[1vw]">Mohamed</span>
                    <img src="../src/assets/courses/course_default.png" className="w-[80%] m-auto"/>
                    <div className="w-[70%] m-auto my-4 relative">
                        <span className="text-black text-[1vw] font-[600]">name of course</span>
                    </div>
                </div>
                <div>
                    <img src="../src/assets/users/user2.png" className="w-[10%] rounded-full inline my-[6%] ml-6"/>
                    <span className="ml-[10px] font-[500] text-[1vw]">Mohamed</span>
                    <img src="../src/assets/courses/course_default.png" className="w-[80%] m-auto"/>
                    <div className="w-[70%] m-auto my-4 relative">
                        <span className="text-black text-[1vw] font-[600]">name of course</span>
                    </div>
                </div>
                <div>
                    <img src="../src/assets/users/user2.png" className="w-[10%] rounded-full inline my-[6%] ml-6"/>
                    <span className="ml-[10px] font-[500] text-[1vw]">Mohamed</span>
                    <img src="../src/assets/courses/course_default.png" className="w-[80%] m-auto"/>
                    <div className="w-[70%] m-auto my-4 relative">
                        <span className="text-black text-[1vw] font-[600]">name of course</span>
                    </div>
                </div>
                <div>
                    <img src="../src/assets/users/user2.png" className="w-[10%] rounded-full inline my-[6%] ml-6"/>
                    <span className="ml-[10px] font-[500] text-[1vw]">Mohamed</span>
                    <img src="../src/assets/courses/course_default.png" className="w-[80%] m-auto"/>
                    <div className="w-[70%] m-auto my-4 relative">
                        <span className="text-black text-[1vw] font-[600]">name of course</span>
                    </div>
                </div>
            </div>
            <a className="prev-admin">❮</a>
            <a className="next-admin">❯</a>
            <hr className="border-t-[2px] border-[#00000080] w-[90%] m-auto"/>
            <h3 className="text-center text-[#515151] py-4 text-[2.8vw] font-bold">Categories</h3>
            <hr className="border-t-[8px] border-[#00BF63] m-auto w-[10%]"/>
            <div className="grid grid-cols-3 gap-10 w-[90%] m-auto my-5">
                <div>
                    <p className="bg-[#D9D9D9] text-[#263238] text-b py-5 px-10 mt-1 rounded-xl text-center w-full opacity-100 block cursor-pointer" onClick={primary_btn}>
                        Primary Stage
                    </p>
                </div>
                <div>
                    <p className="bg-[#D9D9D9] text-[#263238] text-b py-5 px-10 mt-1 rounded-xl text-center w-full opacity-100 block cursor-pointer" onClick={middle_btn}>
                        Middle school
                    </p>
                </div>
                <div>
                    <p className="bg-[#D9D9D9] text-[#263238] text-b py-5 px-10 mt-1 rounded-xl text-center w-full opacity-100 block cursor-pointer" onClick={high_btn}>
                        High school
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-10 w-[60%] m-auto my-5">
                <div>
                    <p className="bg-[#D9D9D9] text-[#263238] text-b py-5 px-10 mt-1 rounded-xl text-center w-full opacity-100 block cursor-pointer" onClick={univ_btn}>
                        University
                    </p>
                </div>
                <div>
                    <p className="bg-[#D9D9D9] text-[#263238] text-b py-5 px-10 mt-1 rounded-xl text-center w-full opacity-100 block cursor-pointer" onClick={skills_back_btn}>
                        Skills
                    </p>
                </div>
            </div>
            <hr className="border-t-[2px] border-[#00000080] w-[90%] m-auto"/>
            <div id="general-skills">
                <div className="grid grid-cols-2">
                    <div className="ml-[10%]">
                        <h4 className="text-[#515151] pt-4 text-[1.8vw] font-bold">Skills</h4>
                    </div>
                    <div className="ml-[70%] mt-[20px]">
                        <a href="#" className="text-white text-[1.6vw] py-1 px-3 bg-[#00BF63] rounded-xl underline">More {">"}</a>
                    </div>
                </div>
                <div>
                    <div className="mx-[10%] my-8 grid grid-cols-4 gap-8">
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                    </div>
                    <a className="prev !bottom-[100px] lg:!bottom-[180px]">❮</a>
                    <a className="next !bottom-[100px] lg:!bottom-[180px]">❯</a>
                </div>
            </div>
            <div id="primary-skills" className="hidden">
                <div className="grid grid-cols-2">
                    <div className="ml-[10%]">
                        <h4 className="text-[#515151] pt-4 text-[1.8vw] font-bold">Primary Stage</h4>
                    </div>
                    <div className="ml-[70%] mt-[20px]">
                        <a href="#" className="text-white text-[1.6vw] py-1 px-3 bg-[#00BF63] rounded-xl underline">More {">"}</a>
                    </div>
                </div>
                <div>
                    <div className="mx-[10%] my-8 grid grid-cols-4 gap-8">
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                    </div>
                    <a className="prev !bottom-[100px] lg:!bottom-[180px]">❮</a>
                    <a className="next !bottom-[100px] lg:!bottom-[180px]">❯</a>
                </div>
            </div>
            <div id="middle-skills" className="hidden">
                <div className="grid grid-cols-2">
                    <div className="ml-[10%]">
                        <h4 className="text-[#515151] pt-4 text-[1.8vw] font-bold">Middle School</h4>
                    </div>
                    <div className="ml-[70%] mt-[20px]">
                        <a href="#" className="text-white text-[1.6vw] py-1 px-3 bg-[#00BF63] rounded-xl underline">More {">"}</a>
                    </div>
                </div>
                <div>
                    <div className="mx-[10%] my-8 grid grid-cols-4 gap-8">
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                    </div>
                    <a className="prev !bottom-[100px] lg:!bottom-[180px]">❮</a>
                    <a className="next !bottom-[100px] lg:!bottom-[180px]">❯</a>
                </div>
            </div>
            <div id="high-skills" className="hidden">
                <div className="grid grid-cols-2">
                    <div className="ml-[10%]">
                        <h4 className="text-[#515151] pt-4 text-[1.8vw] font-bold">High School</h4>
                    </div>
                    <div className="ml-[70%] mt-[20px]">
                        <a href="#" className="text-white text-[1.6vw] py-1 px-3 bg-[#00BF63] rounded-xl underline">More {">"}</a>
                    </div>
                </div>
                <div>
                    <div className="mx-[10%] my-8 grid grid-cols-4 gap-8">
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                    </div>
                    <a className="prev !bottom-[100px] lg:!bottom-[180px]">❮</a>
                    <a className="next !bottom-[100px] lg:!bottom-[180px]">❯</a>
                </div>
            </div>
            <div id="univ-skills" className="hidden">
                <div className="grid grid-cols-2">
                    <div className="ml-[10%]">
                        <h4 className="text-[#515151] pt-4 text-[1.8vw] font-bold">University</h4>
                    </div>
                    <div className="ml-[70%] mt-[20px]">
                        <a href="#" className="text-white text-[1.6vw] py-1 px-3 bg-[#00BF63] rounded-xl underline">More {">"}</a>
                    </div>
                </div>
                <div>
                    <div className="mx-[10%] my-8 grid grid-cols-4 gap-8">
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                        <div className="aspect-square w-[100%] bg-[#D9D9D9] rounded-[20px]"></div>
                    </div>
                    <a className="prev !bottom-[100px] lg:!bottom-[180px]">❮</a>
                    <a className="next !bottom-[100px] lg:!bottom-[180px]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default AdminCourses;
