import PropTypes from "prop-types";

const PlatformInfo = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 px-[31px] box-border max-w-full text-center text-17xl text-neutrals-2 font-button-2 ${className}`}
    >
      <div className="w-[1314px] flex flex-col items-start justify-start pt-[29px] pb-[56.9px] pr-0 pl-[13px] box-border relative gap-[63px] max-w-full mq750:gap-[31px] mq750:pt-5 mq750:pb-[37px] mq750:box-border mq450:gap-[16px]">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-whitesmoke" />
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[56px] font-bold font-inherit z-[1] mq450:text-3xl mq450:leading-[34px] mq1050:text-10xl mq1050:leading-[45px]">
          Trade Across Multiple Exchanges
        </h1>
        <div className="w-[1281.3px] flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-end justify-start gap-[36px] max-w-full mq750:gap-[18px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] lg:flex-wrap">
              <div className="h-[102px] w-[309.8px] flex flex-col items-start justify-start pt-[45px] pb-0 pr-[7px] pl-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
              </div>
              <div className="h-[102px] w-[273px] flex flex-col items-start justify-start pt-[45px] px-0 pb-0 box-border">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
              </div>
              <img
                className="h-[156px] w-[309.7px] relative object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px] box-border max-w-full">
              <div className="w-[737.5px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                <div className="h-[162px] w-[260.8px] flex flex-col items-start justify-start pt-[18px] px-0 pb-0 box-border">
                  <img
                    className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image-5@2x.png"
                  />
                </div>
                <img
                  className="h-[180.1px] w-[244.5px] relative object-cover shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image-6@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PlatformInfo.propTypes = {
  className: PropTypes.string,
};

export default PlatformInfo;
