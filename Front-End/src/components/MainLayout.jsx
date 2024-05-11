import { Outlet } from "react-router-dom";
import LogoTin from "../assets/logoTin.png";
import EduFlex from "../assets/EduFlex.png";
import { useState } from 'react';

const MainLayout = () => {
    const pathname = window.location.pathname;
    function topFunction() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const [scrol, setScrol] = useState("hidden");
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setScrol("block");
        } else {
            setScrol("hidden");
        }
    }
    window.onscroll = function() {scrollFunction()};
    return (
    <div>
        <div className="bg-gray-200 w-full fixed flex z-50" id="header">
            <img src={LogoTin} className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] md:ml-[50px] ml-[10px] md:my-2 my-4"/>
            <img src={EduFlex} className="md:w-[180px] md:h-[60px] w-[100px] h-[30px] ml-2 md:my-5 my-6"/>
            <ul className="lg:ml-[20%] md:ml-[12%]">
                <li className="nav-li pt-[30px] sm:px-[15px] px-2 lg:text-[1.15vw] text-[12px]"><a href="/" className={(pathname==="/"?"nav-selected":"")}>STUDENT</a></li>
                <li className="nav-li pt-[30px] sm:px-[15px] px-2 lg:text-[1.15vw] text-[12px]"><a href="/instructor" className={(pathname==="/instructor"?"nav-selected":"")}>INSTRUCTOR</a></li>
            </ul>
            <div className="absolute right-[5%]">
                <a href="/login" className="bg-[#00BF63] text-white text-base md:py-1 sm:px-10 px-4 mt-2 rounded-xl w-full  opacity-100 block">Log In</a>
                <a href={(pathname==="/instructor"?'/sign-up/instructor':'/sign-up/student')} className="bg-[#00BF63] text-white md:py-1 my-2 sm:px-10 px-4 text-base rounded-xl w-full  opacity-100 block">Sign Up</a>
            </div>
        </div>
        <Outlet />
        <div id="footer">
            <div className="bg-[#F5F5F5] grid grid-cols-3 py-5 gap-2">
                <div>
                    <p className="font-bold mx-[25%] sm:text-[1.7vw] text-[10px]">Follow us through</p>
                    <p className="mx-[25%] sm:mt-8 mt-4 sm:text-[1.2vw] text-[8px]">social media for the latest updates and to say connected</p>
                    <div className="w-[70%] mx-[30%] mt-8">
                        <img src="src/assets/x_logo.png" className="w-[20%] max-w-[35px] inline"/>
                        <img src="src/assets/Facebook_logo.png" className="w-[22%] max-w-[35px] ml-[20px] inline"/>
                        <img src="src/assets/insta_logo.png" className="w-[22%] max-w-[35px] ml-[20px] inline"/>
                    </div>
                </div>
                <div>
                    <p className="font-bold mx-[25%] sm:text-[1.7vw] text-[10px]">Links</p>
                    <p className="mx-[15%] sm:mt-8 mt-4 sm:text-[1.2vw] text-[8px]">Link:###############</p>
                    <p className="mx-[15%] sm:text-[1.2vw] text-[8px]">Link:###############</p>
                    <p className="mx-[15%] sm:text-[1.2vw] text-[8px]">Link:###############</p>
                </div>
                <div>
                    <img src="src/assets/logoTin.png" className="w-[50%] border-[#BABABA] min-w-[120px] border-l-2 pl-[50px]"/>
                </div>
            </div>
            <div className="bg-[#515151]">
                <p className="text-center text-white font-bold text-[22px] py-3">Made with love by teamwork eduflex &copy; 2024</p>
            </div>
        </div>
        <div className={`fixed right-[20px] bottom-[40px] bg-[#00BF63] px-4 py-3 rounded-full cursor-pointer ${scrol}`} onClick={topFunction}>
            <img src="src/assets/arrow_up.png" className="w-[20px]"/>
        </div>
    </div>
  );
};

export default MainLayout;
