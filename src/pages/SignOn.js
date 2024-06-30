import SignUp from "../components/SignUp";
import FooterIcon from "../components/FooterIcon";

const SignOn = () => {
  return (
    <div className="w-full h-[1200px] relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[236px] box-border leading-[normal] tracking-[normal] lg:h-auto">
      <main className="self-stretch flex flex-col items-start justify-start gap-[3px] max-w-full shrink-0">
        <header className="self-stretch flex flex-row items-start justify-between py-[30px] pr-[29px] pl-[45px] box-border sticky top-[0] z-[99] max-w-full gap-[20px] text-center text-sm text-white font-button-2 mq750:pl-[22px] mq750:box-border">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] bg-crimson-200" />
          <div className="w-[455px] flex flex-row items-start justify-start gap-[17.5px] max-w-full text-xl">
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
          <div className="self-stretch w-[348px] hidden flex-row items-center justify-center gap-[47.1px] max-w-full z-[2]">
            <div className="self-stretch flex flex-row items-center justify-center py-2 px-0">
              <b className="relative leading-[16px]">BOT</b>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start">
              <b className="h-4 relative leading-[16px] inline-block">
                Transactions
              </b>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-2 px-0">
              <b className="h-4 relative leading-[16px] inline-block">
                Insight
              </b>
            </div>
            <div className="self-stretch flex flex-col items-center justify-center py-2 px-0">
              <div className="w-[43px] flex flex-row items-start justify-start gap-[4px]">
                <b className="h-4 flex-1 relative leading-[16px] inline-block">
                  About
                </b>
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/iconsarrow-down-simpleline.svg"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px] z-[1] text-gray-200 mq750:hidden">
            <div className="rounded-71xl bg-white flex flex-row items-start justify-start py-3 px-[15px] whitespace-nowrap">
              <a className="[text-decoration:none] relative leading-[16px] font-bold text-[inherit] inline-block min-w-[53px]">
                Sign On
              </a>
            </div>
            <button className="cursor-pointer py-[9px] pr-3 pl-[15px] bg-[transparent] w-[68px] rounded-71xl box-border flex flex-row items-start justify-start border-[2px] border-solid border-neutrals-6 hover:bg-lightgray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-lightgray-100">
              <a className="[text-decoration:none] relative text-sm leading-[16px] font-bold font-button-2 text-white text-center inline-block min-w-[37px]">
                Login
              </a>
            </button>
          </div>
        </header>
        <section className="self-stretch flex flex-row items-start justify-start py-0 pr-1 pl-0 box-border [row-gap:20px] max-w-full lg:flex-wrap">
          <SignUp />
          <div className="h-[714px] w-[593px] flex flex-col items-start justify-start pt-[37px] px-0 pb-0 box-border min-w-[593px] max-w-full lg:flex-1 mq750:min-w-full">
            <div className="self-stretch flex-1 relative max-w-full max-h-full flex items-center justify-center">
              <img
                className="self-stretch flex-1 overflow-hidden object-contain absolute left-[-80px] top-[57px] w-full h-full [transform:scale(1.365)] lg:self-stretch lg:w-auto"
                loading="lazy"
                alt=""
                src="/placeholder01@2x.png"
              />
            </div>
          </div>
        </section>
      </main>
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[1761px] box-border max-w-full mt-[-861px] lg:pb-[1145px] lg:box-border mq750:pb-[744px] mq750:box-border">
        <img
          className="flex-1 relative max-w-full overflow-hidden max-h-full object-contain mt-[-5px] z-[1]"
          loading="lazy"
          alt=""
        />
      </div>
      <FooterIcon propMarginTop="-861px" />
    </div>
  );
};

export default SignOn;
