import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  signUp,
  propBackgroundColor,
  propAlignSelf,
  onButtonClick,
  onFrameContainerClick,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      alignSelf: propAlignSelf,
    };
  }, [propBackgroundColor, propAlignSelf]);

  const navigate = useNavigate();

  const onFrameContainerClick1 = useCallback(() => {
    navigate("/insight");
  }, [navigate]);

  return (
    <button
      className={`cursor-pointer [border:none] pt-[15px] px-[31px] pb-4 bg-red rounded-13xl overflow-hidden flex flex-row items-start justify-start opacity-[0.25] ${className}`}
      style={buttonStyle}
      onClick={onButtonClick}
    >
      <div
        className="flex flex-row items-start justify-start gap-[8px] cursor-pointer"
        onClick={onFrameContainerClick}
      >
        <img
          className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
          alt=""
          src="/icons1.svg"
        />
        <div className="relative text-3xl font-medium font-body-2-bold text-white text-center mq450:text-lg">
          {signUp}
        </div>
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  signUp: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propAlignSelf: PropTypes.any,

  /** Action props */
  onButtonClick: PropTypes.func,
  onFrameContainerClick: PropTypes.func,
};

export default Button;
