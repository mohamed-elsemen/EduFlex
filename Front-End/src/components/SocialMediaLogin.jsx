import Facebook from "../assets/Facebook.svg";
import Google from "../assets/Google.svg";
import Twitter from "../assets/Twitter.svg";

const socialMediaIcon = [
  { Icon: Facebook },
  { Icon: Google },
  { Icon: Twitter },
];
const SocialMediaLogin = () => {
  return (
    <>
      <h2 className=" relative lines-shield w-fit mx-auto text-xl font-bold mt-4">
        OR
      </h2>
      <div className="flex gap-10 mx-auto justify-center mt-6">
        {socialMediaIcon.map(({ Icon }, i) => {
          return (
            <div
              key={i}
              className="w-16 h-16 rounded-full border border-solid border-[#DFDFDFDF] flex justify-center items-center cursor-pointer"
            >
              <img src={Icon} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SocialMediaLogin;
