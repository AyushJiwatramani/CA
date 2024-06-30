import PropTypes from "prop-types";

const Email = ({ className = "", label }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[4px] text-left text-base text-dimgray-100 font-body-2-bold ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
        <div className="relative">{label}</div>
        <div className="h-[27px] w-[73px] relative hidden text-right text-lg text-dimgray-200">
          <img
            className="absolute top-[3px] right-[49px] w-6 h-6 overflow-hidden"
            alt=""
            src="/icon-2.svg"
          />
          <div className="absolute top-[0px] right-[0px]">Hide</div>
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
  );
};

Email.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default Email;
