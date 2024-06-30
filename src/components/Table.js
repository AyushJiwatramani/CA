import { useMemo } from "react";
import PropTypes from "prop-types";

const Table = ({
  className = "",
  coinColumn,
  coinSymbol,
  bitcoin,
  bTC,
  chartColumn,
  tradeButtonColumn,
  chart,
  propBorderRadius,
  propBackgroundColor,
}) => {
  const tableStyle = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorderRadius, propBackgroundColor]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start max-w-full text-left text-base text-neutrals-2 font-body-2-bold ${className}`}
      style={tableStyle}
    >
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-4 px-3 box-border gap-[32px] max-w-full mq750:gap-[16px]">
        <div className="flex flex-col items-center justify-center py-2 px-[17px] text-center text-neutrals-4">
          <div className="relative leading-[24px] font-medium inline-block min-w-[6px]">
            {coinColumn}
          </div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-between py-0 pr-[181px] pl-0 box-border min-w-[139px] max-w-full gap-[20px] mq450:flex-wrap mq450:justify-center mq450:pr-5 mq450:box-border">
          <img className="h-10 w-10 relative" alt="" src={coinSymbol} />
          <div className="flex flex-row items-center justify-start gap-[12px]">
            <div className="relative leading-[24px] font-medium inline-block min-w-[55px]">
              {bitcoin}
            </div>
            <div className="relative leading-[24px] font-medium text-neutrals-5 inline-block min-w-[32px]">
              {bTC}
            </div>
          </div>
        </div>
        <div className="w-40 flex flex-row items-center justify-start py-2 px-0 box-border">
          <div className="relative leading-[24px] font-medium inline-block min-w-[83px] whitespace-nowrap">
            {chartColumn}
          </div>
        </div>
        <div className="w-40 flex flex-row items-center justify-start py-2 px-0 box-border text-primary-4">
          <div className="relative leading-[24px] font-medium inline-block min-w-[49px]">
            {tradeButtonColumn}
          </div>
        </div>
        <div className="w-[255px] flex flex-row items-start justify-between gap-[20px] text-sm font-button-2">
          <img
            className="self-stretch w-[136px] relative max-h-full min-h-[40px]"
            loading="lazy"
            alt=""
            src={chart}
          />
          <div className="w-[71px] rounded-71xl box-border flex flex-row items-center justify-center py-[9px] px-[13px] border-[2px] border-solid border-neutrals-6">
            <b className="relative leading-[16px] inline-block min-w-[40px]">
              Trade
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  coinColumn: PropTypes.string,
  coinSymbol: PropTypes.string,
  bitcoin: PropTypes.string,
  bTC: PropTypes.string,
  chartColumn: PropTypes.string,
  tradeButtonColumn: PropTypes.string,
  chart: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default Table;
