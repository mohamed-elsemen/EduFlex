import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";
import backImage from '../assets/back.png';

const VerificationPage = () => {
  const [timer, setTimer] = useState(60);
  const [timerReset, setTimerReset] = useState(false);
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev > 1) return prev - 1;
        clearInterval(interval);
        setTimerReset(true);
        return 0;
      });
    }, 1000);

    // cleanup
    return () => clearInterval(interval);
  }, [timerReset]);

  function resendCode() {
    if (timerReset) {
      setTimer(60);
      setTimerReset(false);
    }
  }

  function maskEmail(email) {
    // Split the email address into local part and domain
    var [localPart, domain] = email.split("@");
    // Mask part of the local part
    var maskedLocalPart =
      localPart.substring(0, 5) + "*".repeat(localPart.length - 5);
    // Concatenate the masked local part and the domain
    var maskedEmail = maskedLocalPart + "@" + domain;
    return maskedEmail;
  }
  var originalEmail = localStorage.getItem("email");

  return (
    <div className=" pt-24 max-w-[500px] mx-auto">
      <button onClick={() => navigate("/forgot-password")} className="absolute top-[100px] left-[120px]">
        <img src={backImage} alt="Back" className="h-8 w-8"/>
      </button>
      <div className="absolute top-100px left-70px"></div>
      <h1 className="font-bold text-4xl text-center mb-6">
        Verification Code{" "}
      </h1>
      <h2 className="text-center text-[#6A6A6A] mb-8 ">
        {" "}
        The code send to your{" "}
        {maskEmail(originalEmail)}{" "}
      </h2>
      <VerificationInput
        placeholder=""
        autoFocus
        validChars="0-9"
        inputProps={{ inputMode: "numeric" }}
        length={6}
        classNames={{
          container: "mx-auto",
          character: "character",
          characterInactive: "character--inactive",
          characterSelected: "character--selected",
        }}
        onChange={(e) => {
          setCode(e);
        }}
      />
      <h2
        onClick={resendCode}
        className={`${
          timerReset ? "text-[#00BF63] cursor-pointer" : "text-[#6A6A6A]"
        } my-8 text-center`}
      >
        {timerReset ? "Resend " : "Resend in "} {!!timer && timer}
      </h2>
      <button
        type="submit"
        disabled={code.length !== 6}
        className={`bg-[#00BF63]  text-white py-3 text-base rounded-xl w-full  ${
          code.length !== 6 ? "opacity-50" : "opacity-100"
        }`}
      >
        Verify
      </button>
    </div>
  );
};

export default VerificationPage;
