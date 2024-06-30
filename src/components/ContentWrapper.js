import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Email from "./Email";
import Button from "./Button";
import PropTypes from "prop-types";

const ContentWrapper = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/insight");
  }, [navigate]);

  return (
    <form
      className={`m-0 flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[315px] max-w-full mq750:gap-[16px] ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[37px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[53px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h1 className="m-0 relative text-21xl font-medium font-body-2-bold text-darkslategray text-center mq450:text-5xl mq1025:text-13xl">
              Welcome back
            </h1>
          </div>
          <h3 className="m-0 relative text-5xl font-normal font-body-2-bold text-dimgray-100 text-center mq450:text-lgi">
            We’re so excited to see you again!
          </h3>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
        <Email label="Email or phone number" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
          <Email label="Password" />
          <div className="flex flex-row items-start justify-start p-0.5">
            <div className="relative text-base [text-decoration:underline] font-medium font-body-2-bold text-gray-300 text-left">
              Forget your password
            </div>
          </div>
        </div>
      </div>
      <Button
        signUp="Log in"
        propBackgroundColor="#d71e28"
        propAlignSelf="stretch"
        onButtonClick={onButtonClick}
      />
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
        <div className="flex flex-row items-start justify-start p-0.5">
          <div className="relative text-base text-left whitespace-nowrap">
            <span className="font-body-2-bold text-dimgray-100">{`Don’t have an acount? `}</span>
            <span className="[text-decoration:underline] font-medium font-body-2-bold text-gray-300 whitespace-pre-wrap">{`Sign up  `}</span>
          </div>
        </div>
      </div>
    </form>
  );
};

ContentWrapper.propTypes = {
  className: PropTypes.string,
};

export default ContentWrapper;
