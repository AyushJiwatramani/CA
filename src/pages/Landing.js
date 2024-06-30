import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import PlatformInfo from "../components/PlatformInfo";
import HowItWorks from "../components/HowItWorks";
import FooterIcon from "../components/FooterIcon";

const Landing = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[99px] leading-[normal] tracking-[normal] mq750:gap-[49px] mq450:gap-[25px]">
      <FrameComponent />
      <FrameComponent1 />
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-8 pl-[22px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[36px] max-w-full mq750:gap-[18px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[13px] box-border max-w-full">
            <img
              className="flex-1 relative max-w-full overflow-hidden max-h-full object-contain mt-[-1px]"
              loading="lazy"
              alt=""
              src="/divider.svg"
            />
          </div>
          <PlatformInfo />
          <HowItWorks />
        </div>
      </section>
      <FooterIcon />
    </div>
  );
};

export default Landing;
