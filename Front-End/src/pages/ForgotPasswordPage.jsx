import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import backImage from '../assets/back.png';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const inputClasses =
    "bg-[#EDEDEDED] py-4 px-6 placeholder:text-[#C1C1C1]  font-sans font-normal resize-none text-#C1C1C1 opacity-90 rounded-lg outline-none border-none font-medium";

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email")
        .required("Please enter your Email"),
    }),
    onSubmit: (values) => {
      console.log(values);
      setLoading(true);
      localStorage.setItem("email", values.email);
      navigate("/verification");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    },
  });
  return (
    <div className=" pt-24 max-w-[500px] mx-auto">
      <button onClick={() => navigate("/")} className="absolute top-[100px] left-[120px]">
        <img src={backImage} alt="Back" className="h-8 w-8"/>
      </button>
      <div className="absolute top-100px left-70px"></div>
      <h1 className="font-bold text-4xl text-center mb-6">Forgot Password?</h1>
      <h2 className="text-center text-[#6A6A6A] mb-8 ">
        Enter email associated with your account and we’ll send and email with
        intructions to reset password
      </h2>
      <form
        onSubmit={validation.handleSubmit}
        className=" flex flex-col gap-4 mt-9 "
      >
        <div>
          <label className="shadowed-box rounded-lg flex flex-col">
            <input
              type="email"
              name="email"
              value={validation.values.email}
              onChange={validation.handleChange}
              onBlur={validation.handleBlur}
              placeholder="Email address"
              className={inputClasses}
            />
          </label>
          {validation.touched.email && validation.errors.email ? (
            <h2 className="text-red-700 mt-1" type="invalid">
              {validation.errors.email}
            </h2>
          ) : null}
        </div>

        <button
          type="submit"
          className={`bg-[#00BF63]  text-white py-3 text-base rounded-xl w-full  `}
        >
          Send code
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
