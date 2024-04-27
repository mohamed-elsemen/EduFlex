import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Books from "../assets/books.png";

const AuthLayout = () => {
  return (
    <div className="flex">
      <main className="flex-1 p-4">
        <img className="lg:hidden  mx-auto w-24" src={Logo}></img>
        <div className="pt-24 max-sm:pt-4">
          {" "}
          <Outlet />
        </div>
      </main>

      <div className="w-[45%] bg-[#D9D9D9] h-screen flex flex-col pt-[6%] px-32 justify-between max-lg:hidden">
        <img src={Logo} className="w-[320px] m-auto"></img>
        <img src={Books} className="w-[80%] pb-[20px]"></img>
      </div>
    </div>
  );
};

export default AuthLayout;
