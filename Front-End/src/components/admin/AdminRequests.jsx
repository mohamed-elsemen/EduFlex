import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const AdminRequests = () => {
    const [showModal, setShowModal] = React.useState(false);
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
            <h1 className="ml-[8%] mt-[20px] text-[1.8vw] font-bold">Requests</h1>
            <p className=" ml-[8%] text-[#505050] text-[1.3vw] font-[500]">Overview</p>
            <div className="grid grid-cols-2 mx-[10%]">
                <div className="border-y border-r border-black mt-4">
                    <img src="../src/assets/users/user2.png" className="w-[10%] rounded-full inline my-[6%] ml-6"/>
                    <span className="ml-[10px] font-[500] text-[1vw]">Mohamed</span>
                    <img src="../src/assets/courses/course_default.png" className="w-[70%] m-auto"/>
                    <div className="w-[70%] m-auto my-4 relative">
                        <span className="text-black text-[1vw] font-[600]">name of course</span>
                        <img src="../src/assets/admin_icons/eye.PNG" className="inline w-[1.8vw] absolute right-0 cursor-pointer" onClick={() => setShowModal(true)}/>
                    </div>
                </div>
                <div className="border-y border-black mt-4">
                    <img src="../src/assets/users/user2.png" className="w-[10%] rounded-full inline my-[6%] ml-6"/>
                    <span className="ml-[10px] font-[500] text-[1vw]">Mohamed</span>
                    <img src="../src/assets/courses/course_default.png" className="w-[70%] m-auto"/>
                    <div className="w-[70%] m-auto my-4 relative">
                        <span className="text-black text-[1vw] font-[600]">name of course</span>
                        <img src="../src/assets/admin_icons/eye.PNG" className="inline w-[1.8vw] absolute right-0 cursor-pointer" onClick={() => setShowModal(true)}/>
                    </div>
                </div>
                <div className="border-b border-r border-black">
                    <img src="../src/assets/users/user2.png" className="w-[10%] rounded-full inline my-[6%] ml-6"/>
                    <span className="ml-[10px] font-[500] text-[1vw]">Mohamed</span>
                    <img src="../src/assets/courses/course_default.png" className="w-[70%] m-auto"/>
                    <div className="w-[70%] m-auto my-4 relative">
                        <span className="text-black text-[1vw] font-[600]">name of course</span>
                        <img src="../src/assets/admin_icons/eye.PNG" className="inline w-[1.8vw] absolute right-0 cursor-pointer" onClick={() => setShowModal(true)}/>
                    </div>
                </div>
                <div className="border-b border-black">
                    <img src="../src/assets/users/user2.png" className="w-[10%] rounded-full inline my-[6%] ml-6"/>
                    <span className="ml-[10px] font-[500] text-[1vw]">Mohamed</span>
                    <img src="../src/assets/courses/course_default.png" className="w-[70%] m-auto"/>
                    <div className="w-[70%] m-auto my-4 relative">
                        <span className="text-black text-[1vw] font-[600]">name of course</span>
                        <img src="../src/assets/admin_icons/eye.PNG" className="inline w-[1.8vw] absolute right-0 cursor-pointer" onClick={() => setShowModal(true)}/>
                    </div>
                </div>
            </div>

            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-2xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="p-5">
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                                            <img src="../src/assets/arrow_left.png" className="w-[30px]"/>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-6 py-2 flex-auto">
                                    <div className="grid grid-cols-2">
                                        <div className="border-r-2 font-[500]">
                                            <img src="../src/assets/courses/course_default.png" className="w-[100%]"/>
                                            <p>Education:</p>
                                            <p>Stage:</p>
                                            <p>Level:</p>
                                            <p>Language of course:</p>
                                            <p>Term:</p>
                                        </div>
                                        <div className="ml-5 font-[500]">
                                            <p className="ml-5 mb-[12%]">Course Name:</p>
                                            <p className="ml-5 mb-[25%]">Course Description:</p>
                                            <p>Subject:</p>
                                            <p>Course Availability:</p>
                                            <p>Limited period:</p>
                                            <p>Key words:</p>
                                            <p>Price:</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 rounded-b grid grid-cols-2">
                                    <div className="cursor-pointer bg-[#00BF63] py-2 text-white text-center mx-[60px] my-4 rounded-[10px] font-bold text-[20px]">
                                        Accept
                                    </div>
                                    <div className="cursor-pointer bg-[#FF2828] py-2 text-white text-center mx-[60px] my-4 rounded-[10px] font-bold text-[20px]">
                                        Reject
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

export default AdminRequests;
