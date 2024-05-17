import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

const AdminStudents = () => {

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
            <h1 className="ml-[8%] mt-[20px] text-[1.8vw] font-bold">Students</h1>
            <p className=" ml-[8%] text-[#505050] text-[1.3vw] font-[500]">Overview</p>
            <div className="w-[20%] bg-gradient-to-b from-[#D0D0D0] to-[#f2f2f28c] ml-[10%] my-4 rounded-[10px]">
                <img src="../src/assets/admin_icons/student_col.PNG" className="m-5 mr-3 w-[2.4vw] inline"/>
                <span className="text-[#1A1A1A] font-[600] text-[1.6vw] relative top-[5px]">Total Students</span>
                <div className="m-auto mx-[30%] relative bottom-[20px]">
                    <span className="text-[#808080] font-bold text-[1.3vw]">7000</span>
                    <img src="../src/assets/admin_icons/trend.PNG" className="relative bottom-[0.5vw] ml-[10%] w-[2vw] inline"/>
                </div>
            </div>
            <h1 className="ml-[8%] mt-[50px] text-[1.8vw] font-bold">Registered students</h1>
            <table className="mx-[10%] m-auto w-[80%] text-center mt-[20px] table-fixed">
                <thead className="bg-[#00BF63] text-white">
                <tr>
                    <th className="py-3 rounded-l-[10px]">Student ID</th>
                    <th>Name</th>
                    <th>E-Mail</th>
                    <th>Owended Courses</th>
                    <th className="rounded-r-[10px]">Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b-2 border-[#E6E6E6]">
                    <td className="mt-[5px] text-[#28609C] font-bold">23348010</td>
                    <td>
                        <img src="../src/assets/users/user1.jpg" className="w-[20%] my-2 rounded-full inline"/>
                        <span className="ml-[10px]">Mohanad</span>
                    </td>
                    <td>****@gmail.com</td>
                    <td>10</td>
                    <td>
                        <img src="../src/assets/admin_icons/eye.PNG" className="inline w-[1.8vw]"/>
                        <img src="../src/assets/admin_icons/trash.PNG" className="inline w-[1.5vw] ml-2"/>
                    </td>
                </tr>
                <tr className="border-b-2 border-[#E6E6E6]">
                    <td className="mt-[5px] text-[#28609C] font-bold">23348010</td>
                    <td>
                        <img src="../src/assets/users/user1.jpg" className="w-[20%] my-2 rounded-full inline"/>
                        <span className="ml-[10px]">Mohanad</span>
                    </td>
                    <td>****@gmail.com</td>
                    <td>10</td>
                    <td>
                        <img src="../src/assets/admin_icons/eye.PNG" className="inline w-[1.8vw]"/>
                        <img src="../src/assets/admin_icons/trash.PNG" className="inline w-[1.5vw] ml-2"/>
                    </td>
                </tr>
                </tbody>
            </table>
            <div className="flex mx-[10%] mt-6 text-[#747474]">
                <span>5 of 456 items</span>
                <div className="ml-[30%] text-[#165394]">
                    <span className="bg-[#00BF63] rounded-full text-white py-[4px] px-[10px]">1</span>
                    <span className="py-[4px] px-[10px]">2</span>
                    <span className="py-[4px] px-[10px]">3</span>
                    <span className="py-[4px] px-[10px]">4</span>
                    <span className="py-[4px] px-[10px]">5</span>
                    <span className="py-[4px] px-[10px]"> ... </span>
                    <span className="py-[4px] px-[10px]">10</span>
                </div>
            </div>
        </div>
    );
};

export default AdminStudents;
