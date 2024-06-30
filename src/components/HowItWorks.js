import PropTypes from "prop-types";

const HowItWorks = ({ className = "" }) => {
  return (
    <div
      className={`w-[1371px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-center text-29xl text-neutrals-2 font-button-2 ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start gap-[99px] max-w-full mq750:gap-[49px] mq450:gap-[25px]">
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px]"
          alt=""
          src="/divider-1.svg"
        />
        <div className="w-[1346px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1120px] flex flex-col items-start justify-start gap-[80px] max-w-full lg:gap-[40px] mq750:gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[544px] flex flex-col items-start justify-start gap-[20px] max-w-full">
                <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[56px] font-bold font-inherit mq450:text-10xl mq450:leading-[34px] mq1050:text-19xl mq1050:leading-[45px]">
                  How it work
                </h1>
                <div className="self-stretch relative text-base leading-[24px] font-body-2-bold text-neutrals-3">
                  <p className="m-0">
                    Stacks is a production-ready library of stackable
                  </p>
                  <p className="m-0">content blocks built in React Native.</p>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-14 box-border max-w-full lg:pl-7 lg:pr-7 lg:box-border">
              <div className="flex-1 overflow-x-auto flex flex-row items-start justify-start gap-[24px] max-w-full">
                <img
                  className="h-24 w-24 relative shrink-0 object-cover min-h-[96px]"
                  loading="lazy"
                  alt=""
                  src="/composition-04-1@2x.png"
                />
                <div className="w-40 shrink-0 flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[6.5px]">
                    <div className="h-3 w-3 relative rounded-[50%] box-border border-[0px] border-solid border-neutrals-5" />
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                      <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-neutrals-5" />
                    </div>
                    <div className="h-3 w-3 relative rounded-[50%] box-border border-[0px] border-solid border-neutrals-5" />
                  </div>
                </div>
                <img
                  className="h-24 w-24 relative shrink-0 object-cover min-h-[96px]"
                  loading="lazy"
                  alt=""
                  src="/composition-13-1@2x.png"
                />
                <div className="w-40 shrink-0 flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[6.5px]">
                    <div className="h-3 w-3 relative rounded-[50%] box-border border-[0px] border-solid border-neutrals-5" />
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                      <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-neutrals-5" />
                    </div>
                    <div className="h-3 w-3 relative rounded-[50%] box-border border-[0px] border-solid border-neutrals-5" />
                  </div>
                </div>
                <img
                  className="h-24 w-24 relative shrink-0 object-cover min-h-[96px]"
                  loading="lazy"
                  alt=""
                  src="/composition-11-1@2x.png"
                />
                <div className="w-40 shrink-0 flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-end justify-start gap-[6.5px]">
                    <div className="h-3 w-3 relative rounded-[50%] box-border border-[0px] border-solid border-neutrals-5" />
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px]">
                      <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-neutrals-5" />
                    </div>
                    <div className="h-3 w-3 relative rounded-[50%] box-border border-[0px] border-solid border-neutrals-5" />
                  </div>
                </div>
                <img
                  className="h-24 w-24 relative shrink-0 object-cover min-h-[96px]"
                  loading="lazy"
                  alt=""
                  src="/composition-06-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[1120px] overflow-x-auto flex flex-row items-start justify-start gap-[32px] max-w-full text-left text-xs text-neutrals-4 font-body-2-bold mq750:gap-[16px]">
              <div className="w-64 shrink-0 flex flex-col items-center justify-start gap-[32px] mq450:gap-[16px]">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[35px]">
                  Step 1
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-base text-neutrals-2">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Sing Up
                  </div>
                  <div className="self-stretch relative text-sm leading-[24px] text-neutrals-3">
                    <p className="m-0">{`Sing On and setup your `}</p>
                    <p className="m-0">account</p>
                  </div>
                </div>
              </div>
              <div className="w-64 shrink-0 flex flex-col items-center justify-start gap-[32px] mq450:gap-[16px]">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[38px]">
                  Step 2
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-base text-neutrals-2">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Add Funds
                  </div>
                  <div className="self-stretch relative text-sm leading-[24px] text-neutrals-3">
                    <p className="m-0">Add funds to your wallet</p>
                    <p className="m-0">in INR</p>
                  </div>
                </div>
              </div>
              <div className="w-64 shrink-0 flex flex-col items-center justify-start gap-[32px] mq450:gap-[16px]">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[38px]">
                  Step 3
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-base text-neutrals-2">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Start trading bot
                  </div>
                  <div className="self-stretch relative text-sm leading-[24px] text-neutrals-3">
                    <p className="m-0">{`Select the cryptocurrency &`}</p>
                    <p className="m-0">{`the amount, then click on start `}</p>
                    <p className="m-0">trading</p>
                  </div>
                </div>
              </div>
              <div className="w-64 shrink-0 flex flex-col items-center justify-start gap-[32px] mq450:gap-[16px]">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[39px]">
                  Step 4
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-center text-base text-neutrals-2">
                  <div className="self-stretch relative leading-[24px] font-medium">
                    Earn money
                  </div>
                  <div className="self-stretch relative text-sm leading-[24px] text-neutrals-3">
                    The Bot will exploit price differences and earn you a
                    profit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HowItWorks.propTypes = {
  className: PropTypes.string,
};

export default HowItWorks;
