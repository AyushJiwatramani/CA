import InsightView from "../components/InsightView";
import FrameComponent3 from "../components/FrameComponent3";
import Legend from "../components/Legend";
import FrameComponent2 from "../components/FrameComponent2";
import FooterIcon from "../components/FooterIcon";

const Insight = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[77px] leading-[normal] tracking-[normal] text-left text-21xl text-gray-300 font-button-2 mq450:gap-[19px] mq750:gap-[38px]">
      <InsightView />
      <div className="w-[600px] flex flex-row items-start justify-center pt-0 px-5 pb-[34px] box-border max-w-full">
        <h1 className="m-0 w-[406px] relative text-inherit leading-[16px] font-bold font-inherit inline-block shrink-0 max-w-full mq1050:text-13xl mq1050:leading-[13px] mq450:text-5xl mq450:leading-[10px]">
          INSIGHT
        </h1>
      </div>
      <FrameComponent3 />
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[42px] pr-5 pl-[74px] box-border max-w-full lg:pl-[37px] lg:box-border mq750:pb-[27px] mq750:box-border">
        <div className="w-[1175.5px] flex flex-col items-start justify-start gap-[69px] max-w-full lg:gap-[34px] mq750:gap-[17px]">
          <Legend />
          <FrameComponent2 />
        </div>
      </section>
      <FooterIcon propMarginTop="unset" />
    </div>
  );
};

export default Insight;
