import PropTypes from "prop-types";

const TextField = ({ className = "", frame243Placeholder, prop }) => {
  return (
    <div
      className={`w-[665px] flex flex-col items-start justify-start gap-[4px] max-w-full text-left text-base text-gray-300 font-body-2-bold ${className}`}
    >
      <input
        className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-[27px] flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border font-body-2-bold text-base text-dimgray-100 min-w-[250px]"
        placeholder={frame243Placeholder}
        type="text"
      />
      <div className="self-stretch h-14 relative rounded-xl box-border overflow-hidden shrink-0 border-[1px] border-solid border-dimgray-300">
        <div className="absolute top-[15px] left-[24px] hidden flex-row items-center justify-start">
          <div className="self-stretch relative whitespace-nowrap shrink-0">
            {prop}
          </div>
          <div className="h-6 w-px relative bg-gray-300 hidden" />
        </div>
        <img
          className="absolute top-[40px] right-[24px] w-6 h-6 overflow-hidden hidden"
          alt=""
          src="/icons.svg"
        />
      </div>
      <div className="w-[101px] relative text-sm text-crimson-100 hidden">
        Error message
      </div>
    </div>
  );
};

TextField.propTypes = {
  className: PropTypes.string,
  frame243Placeholder: PropTypes.string,
  prop: PropTypes.string,
};

export default TextField;
