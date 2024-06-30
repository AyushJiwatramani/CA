import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "./TextField";
import Button from "./Button";
import PropTypes from "prop-types";

const SignUp = ({ className = "" }) => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/insight");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div
      className={`h-[861px] flex-1 overflow-y-auto flex flex-col items-end justify-start pt-6 pb-24 pr-[90px] pl-6 box-border gap-[32px] min-w-[548px] max-w-full text-left text-base text-gray-300 font-body-2-bold mq750:pb-10 mq750:box-border mq750:min-w-full mq450:h-auto mq450:gap-[16px] mq450:pr-5 mq450:box-border mq1050:pt-5 mq1050:pr-[45px] mq1050:pb-[62px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="h-8 w-8 relative rounded-[50%] bg-silver" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-16 box-border max-w-full shrink-0 text-13xl text-darkslategray mq750:pl-8 mq750:pr-8 mq750:box-border">
        <div className="flex flex-col items-start justify-start gap-[2px] max-w-full">
          <h1 className="m-0 relative text-inherit font-medium font-inherit mq450:text-lgi mq1050:text-7xl">{`Welcome to Design Community `}</h1>
          <div className="flex flex-row items-start justify-start p-0.5 text-base text-gray-300">
            <div
              className="h-6 relative inline-block cursor-pointer"
              onClick={onAlreadyHaveAnClick}
            >
              <span className="text-darkslategray">
                Already have an account?
              </span>
              <span className="text-dimgray-100">{` `}</span>
              <span className="[text-decoration:underline] whitespace-pre-wrap">{`Log in  `}</span>
            </div>
          </div>
        </div>
      </div>
      <TextField frame243Placeholder="Email" prop="designer@gmail.com" />
      <TextField frame243Placeholder="Username" prop="designer123" />
      <div className="w-[665px] flex flex-col items-start justify-start max-w-full text-dimgray-100">
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <div className="self-stretch flex flex-row items-start justify-between py-0 pr-[9px] pl-0 gap-[20px] mq450:flex-wrap">
            <div className="relative inline-block min-w-[77px]">Password</div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-right text-lg text-dimgray-200">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/icon-2.svg"
                />
              </div>
              <div className="relative inline-block min-w-[41px]">Hide</div>
            </div>
          </div>
          <input
            className="[outline:none] bg-[transparent] self-stretch h-14 relative rounded-xl box-border overflow-hidden shrink-0 min-w-[250px] border-[1px] border-solid border-dimgray-300"
            type="text"
          />
          <div className="w-[101px] relative text-sm text-crimson-100 hidden">
            Error message
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[18px] max-w-full text-sm text-dimgray-400 mq750:flex-wrap">
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-400" />
              </div>
              <div className="relative">Use 8 or more characters</div>
            </div>
            <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-400" />
              </div>
              <div className="relative">One special character</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-400" />
              </div>
              <div className="relative">One Uppercase character</div>
            </div>
            <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
              <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-400" />
              </div>
              <div className="relative inline-block min-w-[89px]">
                One number
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
              <div className="w-2 h-2 relative rounded-[50%] bg-dimgray-400" />
            </div>
            <div className="relative">One lowercase character</div>
          </div>
          <div className="h-[37px] hidden flex-row items-center justify-center py-2 pr-2 pl-0 box-border gap-[8px]">
            <div className="h-2 w-2 relative rounded-[50%] bg-dimgray-400 shrink-0" />
            <div className="self-stretch relative shrink-0">{`No same sequential repeating `}</div>
          </div>
        </div>
      </div>
      <div className="w-[687px] flex flex-row items-start justify-end py-0 px-[22px] box-border max-w-full shrink-0 text-darkslategray">
        <div className="flex-1 flex flex-row items-start justify-start py-2 pr-2 pl-0 box-border gap-[8px] max-w-full mq750:flex-wrap">
          <input
            className="m-0 h-6 w-6 relative overflow-hidden shrink-0"
            type="checkbox"
          />
          <div className="flex-1 relative inline-block min-w-[392px] max-w-full mq750:min-w-full">
            I want to receive emails about the product, feature updates, events,
            and marketing promotions.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-16 box-border max-w-full shrink-0 mq750:pl-8 mq750:pr-8 mq750:box-border">
        <div className="flex flex-row items-start justify-start py-2 pr-2 pl-0 box-border max-w-full">
          <div className="relative">
            <span className="text-darkslategray">{`By creating an account, you agree to the `}</span>
            <span className="[text-decoration:underline]">Terms of use</span>
            <span className="text-dimgray-100">{` `}</span>
            <span className="text-darkslategray">and</span>
            <span className="text-dimgray-100">{` `}</span>
            <span className="[text-decoration:underline]">
              <span>Privacy Policy.</span>
              <span className="text-dimgray-100">{` `}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-16 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="w-64 flex flex-col items-start justify-start gap-[8px]">
          <Button
            signUp="Create an ccount"
            onFrameContainerClick={onFrameContainerClick}
          />
          <div className="self-stretch h-7 flex flex-row items-start justify-start p-0.5 box-border">
            <div className="self-stretch flex-1 relative">
              <span className="text-darkslategray">
                Already have an ccount?
              </span>
              <span className="text-dimgray-100">{` `}</span>
              <span className="[text-decoration:underline] whitespace-pre-wrap">{`Log in  `}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUp.propTypes = {
  className: PropTypes.string,
};

export default SignUp;
