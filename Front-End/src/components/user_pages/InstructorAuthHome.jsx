import React from "react";

const InstructorAuthHome = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [showConfirmModal, setShowConfirmModal] = React.useState(false);
    function confirmModal(){
        setShowModal(false);
        setShowConfirmModal(true);
    }
    return (
        <div className="pt-[100px]">
            <div className="bg-gradient-to-b w-full aspect-[8/2] from-[#D9D9D900] to-[#00BF634D] curved-bottom mb-5">
                <img src="../src/assets/inst_home.png" className="w-[25%] m-auto"/>
            </div>
            <p className="text-center my-[40px] font-bold text-[#505050] lg:text-[2.4vw] text-[22px]">Start Uploading <span className="text-[#00BF63]">Now !</span></p>
            <p className="lg:text-[1.5vw] text-[18px] w-[60%] m-auto font-[500]">Every step forward, no matter how small, is a step towards progress. Keep pushing forward ,Start uploading your courses to our platform and hurry to build the future !</p>
            <div className="grid grid-cols-4 mx-8">
                <div className="m-auto my-[50px] w-[90%] cursor-pointer">
                    <div className="aspect-square text-center pt-[10%] font-bold">
                        <a href="/instructor/course">
                            <img src="../src/assets/courses/course_default.png"/>
                        </a>
                    </div>
                </div>
                <div className="m-auto my-[50px] w-[60%] cursor-pointer">
                    <div className="bg-[#D9D9D9] aspect-square text-center pt-[5%] font-bold" onClick={() => setShowModal(true)}>
                        <p className="text-[8vw]">+</p>
                    </div>
                </div>
            </div>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto mt-[800px] mb-4 mx-auto max-w-2xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="p-5">
                                    <button className="p-1 ml-auto bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none" onClick={() => setShowModal(false)}>
                                        <img src="../src/assets/arrow_left.png" className="w-[30px]"/>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative px-6 flex-auto">
                                    <p className="font-[800] text-[18px]">Note !</p>
                                    <p className="text-[#353535CC] text-[18px] font-bold">
                                        Make the course description short and add key points .
                                    </p>
                                    <hr className="border-t-2 w-[80%] m-auto my-8"/>
                                    <label>Course Name: </label>
                                    <input className="bg-[#EEEEEE] w-[220px] h-[35px] px-4 ml-[20px] rounded-[10px]"/>
                                    <br/>
                                    <label>Course Description: </label>
                                    <textarea className="w-full bg-[#EEEEEE] rounded-[10px] p-4 mt-2" rows="3"></textarea>
                                    <label>Education: </label>
                                    <select className="w-full bg-[#EEEEEE] rounded-[10px] px-4 py-2 mt-2">
                                        <option disabled selected hidden>Select one</option>
                                        <option>General</option>
                                        <option>Special</option>
                                        <option>Graduated</option>
                                    </select>
                                    <label>Stage: </label>
                                    <select className="w-full bg-[#EEEEEE] rounded-[10px] px-4 py-2 mt-2">
                                        <option disabled selected hidden>Select one</option>
                                        <option>Primary stage</option>
                                        <option>Middle school</option>
                                        <option>High school</option>
                                        <option>University</option>
                                    </select>
                                    <label>Level: </label>
                                    <select className="w-full bg-[#EEEEEE] rounded-[10px] px-4 py-2 mt-2">
                                        <option disabled selected hidden>Select one</option>
                                        <option>Level One</option>
                                        <option>Level Two</option>
                                        <option>Level Three</option>
                                    </select>
                                    <label>Language of course: </label>
                                    <select className="w-full bg-[#EEEEEE] rounded-[10px] px-4 py-2 mt-2">
                                        <option disabled selected hidden>Select one</option>
                                        <option>Arabic</option>
                                        <option>English</option>
                                    </select>
                                    <label>Term: </label>
                                    <select className="w-full bg-[#EEEEEE] rounded-[10px] px-4 py-2 mt-2">
                                        <option disabled selected hidden>Select one</option>
                                        <option>First term</option>
                                        <option>Second term</option>
                                    </select>
                                    <label>Subject: </label>
                                    <select className="w-full bg-[#EEEEEE] rounded-[10px] px-4 py-2 mt-2">
                                        <option>Select one</option>
                                    </select>
                                    <label>Course availability after purchase :</label>
                                    <select className="w-full bg-[#EEEEEE] rounded-[10px] px-4 py-2 mt-2">
                                        <option disabled selected hidden>Select one</option>
                                        <option>Limited</option>
                                        <option>Unlimited</option>
                                    </select>
                                    <label>Limited period :</label>
                                    <select className="w-full bg-[#EEEEEE] rounded-[10px] px-4 py-2 mt-2">
                                        <option disabled selected hidden>Select one</option>
                                        <option>A week</option>
                                        <option>2 weeks</option>
                                        <option>A month</option>
                                        <option>4 months</option>
                                        <option>6 months</option>
                                        <option>8 months</option>
                                        <option>10 months</option>
                                        <option>A year</option>
                                    </select>
                                    <label>Keywords: </label>
                                    <input className="bg-[#EEEEEE] w-[220px] h-[35px] px-4 ml-[20px] mt-5 rounded-[10px]"/>
                                    <br/>
                                    <label>Price: </label>
                                    <input className="bg-[#EEEEEE] w-[220px] h-[35px] px-4 ml-[20px] mt-5 rounded-[10px]"/>
                                    <br/>
                                    <label>Add course photo: </label>
                                    <div className="bg-[#D9D9D9] text-center mt-5 w-[200px] h-[100px] m-auto font-bold cursor-pointer rounded-[10px]">
                                        <p className="text-[4vw]">+</p>
                                    </div>
                                </div>
                                <div className="p-6 rounded-b">
                                    <div className="cursor-pointer bg-[#00BF63] py-2 text-white text-center w-[100%] my-4 rounded-[10px] font-bold text-[20px]" onClick={() => confirmModal()}>
                                        Save
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-75 fixed inset-0 z-40 bg-[#a3a3a39c]"></div>
                </>
            ) : null}
            {showConfirmModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto mt-[100px] mb-4 mx-auto max-w-xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative px-6 flex-auto">
                                    <img src="../src/assets/not_mark.png" className="w-[100px] m-auto mt-8"/>
                                    <p className="text-[#2A2828] font-[600] mx-4">
                                        The course data and images are being reviewed by the admin, and a response will be made within 10 to 15 minutes.
                                    </p>
                                    <p className="text-[#2A2828] font-[600] mx-4 mt-8">
                                        Note !
                                        <br/>
                                        (The appearance of the course and its information on the main page means that it has been approved) .
                                    </p>
                                </div>
                                <div className="p-6 rounded-b">
                                    <div className="cursor-pointer bg-[#00BF63] py-2 text-white text-center w-[100%] my-4 rounded-[10px] font-bold text-[20px]" onClick={()=>setShowConfirmModal(false)}>
                                        Ok
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

export default InstructorAuthHome;
