import Header from "../components/Header";
import ContentWrapper from "../components/ContentWrapper";
import FooterIcon from "../components/FooterIcon";

const Login = () => {
  return (
    <div className="w-full h-[1200px] relative bg-white overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[338px] box-border gap-[142px] leading-[normal] tracking-[normal] mq750:gap-[71px] mq450:gap-[35px] mq1025:h-auto">
      <Header
        border="pending_10:485"
        holderFlex="unset"
        holderAlignSelf="stretch"
        holderTop="0"
        holderPosition="sticky"
      />
      <section className="w-[1428px] flex flex-row items-start justify-center py-0 pr-0 pl-5 box-border max-w-full shrink-0 text-center text-21xl text-darkslategray font-body-2-bold">
        <div className="w-[1114px] rounded-[40px] overflow-hidden shrink-0 flex flex-row items-end justify-start p-12 box-border gap-[96px] max-w-full mq750:gap-[24px] mq750:pt-[31px] mq750:pb-[31px] mq750:box-border mq1125:gap-[48px] mq1125:pl-6 mq1125:pr-6 mq1125:box-border mq1025:flex-wrap">
          <ContentWrapper />
          <div className="w-[438px] flex flex-col items-start justify-end pt-0 px-0 pb-[31px] box-border min-w-[438px] max-w-full mq750:min-w-full mq1025:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-[59px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <img
                  className="h-80 flex-1 relative max-w-full overflow-hidden"
                  loading="lazy"
                  alt=""
                  src="/qr-code.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-[23px]">
                  <h1 className="m-0 relative text-inherit font-semibold font-inherit mq450:text-5xl mq1025:text-13xl">
                    Log in with QR code
                  </h1>
                </div>
                <h3 className="m-0 relative text-3xl font-normal font-inherit text-dimgray-100 mq450:text-lg">
                  Scan this with our App to log in instantly
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterIcon propMarginTop="unset" />
    </div>
  );
};

export default Login;
