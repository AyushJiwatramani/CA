import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onBgClick = useCallback(() => {
    navigate("/signon");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-[63px] pb-[49px] box-border max-w-full text-left text-17xl text-gray-100 font-montserrat mq750:pl-[31px] mq750:pr-[31px] mq750:box-border mq450:pb-8 mq450:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[130px] max-w-full lg:gap-[65px] mq750:gap-[32px] mq450:gap-[16px]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[57px] px-0 pb-0 box-border min-w-[384px] max-w-full mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-2 box-border gap-[52.2px] max-w-full mq750:gap-[26px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40.8px] max-w-full mq750:gap-[20px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[128%] font-bold font-inherit mq450:text-3xl mq450:leading-[28px] mq1050:text-10xl mq1050:leading-[37px]">
                <p className="m-0">Start your first Cryptocurrency</p>
                <p className="m-0">arbitrage today</p>
              </h1>
              <div className="w-[394.7px] relative text-base leading-[164.57%] font-light text-lightslategray inline-block max-w-full">
                The easiest way to exploit price difference of multiple
                cryptocurrency assets.
              </div>
            </div>
            <div className="w-[215px] flex flex-row items-start justify-start relative text-center text-base text-white">
              <div
                className="h-[46.6px] w-[219.8px] absolute !m-[0] top-[-15.6px] right-[-4.8px] rounded-32xl bg-crimson-200 cursor-pointer"
                onClick={onBgClick}
              />
              <div className="flex-1 relative leading-[23px] uppercase font-medium z-[1]">
                Start now
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[402px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[385px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/graphic@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
