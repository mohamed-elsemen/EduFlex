import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Books from "../assets/books.png";

const AuthLayout = () => {
  return (
    <div className="flex h-screen">
      <main className="flex-1 p-4">
        <img className="lg:hidden  mx-auto w-24" src={Logo}></img>
        <div className="pt-24 max-sm:pt-4">
          {" "}
          <Outlet />
        </div>
      </main>

      <div className="w-[45%] bg-[#D9D9D9] flex flex-col pt-20 px-32 justify-between max-lg:hidden">
        <img src={Logo}></img>
        <img src={Books}></img>
      </div>
    </div>
  );
};

export default AuthLayout;
