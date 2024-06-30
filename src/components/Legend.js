import PropTypes from "prop-types";

const Legend = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-29xl text-neutrals-2 font-button-2 mq1050:flex-wrap ${className}`}
    >
      <div className="w-[573px] flex flex-col items-start justify-start gap-[40px] max-w-full mq750:gap-[20px]">
        <h1 className="m-0 w-[544px] relative text-inherit tracking-[-0.02em] leading-[56px] font-bold font-inherit inline-block max-w-full mq1050:text-19xl mq1050:leading-[45px] mq450:text-10xl mq450:leading-[34px]">
          Market trend
        </h1>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm text-neutrals-4 mq750:flex-wrap">
          <div className="rounded-81xl bg-neutrals-3 flex flex-row items-center justify-center py-1.5 px-3 text-neutrals-8">
            <b className="relative leading-[16px] inline-block min-w-[18px]">
              All
            </b>
          </div>
          <div className="rounded-81xl flex flex-row items-center justify-center py-1.5 px-3">
            <b className="relative leading-[16px] inline-block min-w-[30px]">
              DeFi
            </b>
          </div>
          <div className="rounded-81xl flex flex-row items-center justify-center py-1.5 px-[11px]">
            <b className="relative leading-[16px] inline-block min-w-[72px]">
              Innovation
            </b>
          </div>
          <div className="rounded-81xl flex flex-row items-center justify-center py-1.5 px-[11px]">
            <b className="relative leading-[16px] inline-block min-w-[29px]">
              POS
            </b>
          </div>
          <div className="rounded-81xl flex flex-row items-center justify-center py-1.5 px-3">
            <b className="relative leading-[16px] inline-block min-w-[27px]">
              NFT
            </b>
          </div>
          <div className="rounded-81xl flex flex-row items-center justify-center py-1.5 px-3">
            <b className="relative leading-[16px] inline-block min-w-[34px]">
              POW
            </b>
          </div>
          <div className="rounded-81xl flex flex-row items-center justify-center py-1.5 px-[11px]">
            <b className="relative leading-[16px] inline-block min-w-[54px]">
              Storage
            </b>
          </div>
        </div>
      </div>
      <button className="cursor-pointer py-[13px] px-[21px] bg-[transparent] w-[130px] rounded-71xl box-border flex flex-row items-center justify-center border-[2px] border-solid border-neutrals-6 hover:bg-lightgray-200 hover:box-border hover:border-[2px] hover:border-solid hover:border-lightgray-100">
        <b className="relative text-base leading-[16px] inline-block font-button-2 text-neutrals-2 text-left min-w-[83px]">
          View more
        </b>
      </button>
    </div>
  );
};

Legend.propTypes = {
  className: PropTypes.string,
};

export default Legend;
