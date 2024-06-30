import PropTypes from "prop-types";

const InsightView = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start gap-[3px] top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <header className="self-stretch flex flex-row items-start justify-between py-[30px] pr-[29px] pl-[45px] box-border relative gap-[20px] max-w-full text-center text-xl text-white font-button-2 mq750:pl-[22px] mq750:box-border">
        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-crimson-200" />
        <div className="w-[455px] flex flex-row items-start justify-start gap-[17.5px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <img
              className="self-stretch h-[23px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/logo@2x.png"
            />
          </div>
          <div className="h-10 w-px relative bg-neutrals-6 z-[1]" />
          <div className="w-[199px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
            <a className="[text-decoration:none] self-stretch relative leading-[16px] font-bold text-[inherit] whitespace-nowrap z-[1]">
              CRYPTO ARBITRAGE
            </a>
          </div>
        </div>
        <div className="w-[564px] flex flex-row items-start justify-start gap-[56px] max-w-full text-sm text-gray-200 mq1050:w-[216px] mq750:gap-[28px]">
          <nav className="m-0 flex-1 flex flex-row items-center justify-between max-w-full gap-[20px] z-[1] text-center text-sm text-white font-button-2 mq1050:hidden">
            <div className="flex flex-row items-center justify-center py-3 px-0">
              <b className="relative leading-[16px] inline-block min-w-[28px]">
                BOT
              </b>
            </div>
            <div className="flex flex-row items-center justify-start py-3 px-0">
              <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[89px]">
                Transactions
              </a>
            </div>
            <div className="flex flex-row items-center justify-center py-3 px-0">
              <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[47px]">
                Insight
              </a>
            </div>
            <div className="flex flex-col items-center justify-center py-3 px-0">
              <div className="flex flex-row items-start justify-start gap-[4px]">
                <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[43px]">
                  About
                </a>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden min-h-[16px]"
                  alt=""
                  src="/iconsarrow-down-simpleline.svg"
                />
              </div>
            </div>
          </nav>
          <div className="w-40 flex flex-row items-start justify-start gap-[8px] z-[1]">
            <div className="rounded-71xl bg-white flex flex-row items-start justify-start py-3 px-4">
              <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[58px]">
                LOGOUT
              </a>
            </div>
            <div className="self-stretch rounded-71xl hidden flex-row items-center justify-center py-3 px-[13px] text-white border-[2px] border-solid border-neutrals-6">
              <b className="self-stretch relative leading-[16px]">Login</b>
            </div>
          </div>
        </div>
      </header>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-5px]"
        loading="lazy"
        alt=""
      />
    </section>
  );
};

InsightView.propTypes = {
  className: PropTypes.string,
};

export default InsightView;
