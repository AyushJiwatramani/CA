import Table from "./Table";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1120px] flex flex-col items-start justify-start gap-[12px] max-w-full text-left text-sm text-neutrals-4 font-body-2-bold ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-4 px-3 box-border gap-[32px] max-w-full lg:flex-wrap mq750:gap-[16px]">
          <div className="flex flex-row items-start justify-start py-2 px-3.5">
            <div className="relative leading-[24px] inline-block min-w-[12px]">
              #
            </div>
          </div>
          <div className="w-[352px] flex flex-row items-start justify-start py-2 px-0 box-border max-w-full">
            <div className="relative leading-[24px] inline-block min-w-[43px]">
              Name
            </div>
          </div>
          <div className="w-40 flex flex-row items-start justify-start py-2 px-0 box-border">
            <div className="relative leading-[24px] inline-block min-w-[34px]">
              Price
            </div>
          </div>
          <div className="w-40 flex flex-row items-start justify-start py-2 px-0 box-border">
            <div className="relative leading-[24px] inline-block min-w-[68px]">
              Max Profit
            </div>
          </div>
          <div className="w-[136px] flex flex-row items-start justify-start py-2 px-0 box-border">
            <div className="relative leading-[24px] inline-block min-w-[40px]">
              Chart
            </div>
          </div>
          <div className="w-[71px] flex flex-row items-start justify-start py-2 px-[11px] box-border">
            <div className="relative leading-[24px] inline-block min-w-[41px]">
              Trade
            </div>
          </div>
        </div>
        <div className="self-stretch h-px relative rounded-sm bg-neutrals-6 overflow-hidden shrink-0" />
      </div>
      <Table
        coinColumn="1"
        coinSymbol="/coin-symbol.svg"
        bitcoin="Bitcoin"
        bTC="BTC"
        chartColumn="$36,201.34"
        tradeButtonColumn="+1.71%"
        chart="/chart.svg"
      />
      <Table
        coinColumn="2"
        coinSymbol="/coin-symbol-5.svg"
        bitcoin="Ethereum"
        bTC="ETH"
        chartColumn="$2,605.95"
        tradeButtonColumn="+2.04%"
        chart="/chart-1.svg"
        propBorderRadius="12px"
        propBackgroundColor="#f8f8f9"
      />
      <Table
        coinColumn="3"
        coinSymbol="/coin-symbol-6.svg"
        bitcoin="DOGE"
        bTC="DOGE"
        chartColumn="$939.20"
        tradeButtonColumn="-0.74%"
        chart="/chart-2.svg"
        propBorderRadius="unset"
        propBackgroundColor="unset"
      />
      <Table
        coinColumn="4"
        coinSymbol="/coin-symbol-3.svg"
        bitcoin="Solana"
        bTC="SOL"
        chartColumn="$1.02"
        tradeButtonColumn="+1.20%"
        chart="/chart-3.svg"
        propBorderRadius="unset"
        propBackgroundColor="unset"
      />
      <Table
        coinColumn="5"
        coinSymbol="/coin-symbol-1.svg"
        bitcoin="Chainlink"
        bTC="LINK"
        chartColumn="$30.56"
        tradeButtonColumn="-3.84%"
        chart="/chart-4.svg"
        propBorderRadius="unset"
        propBackgroundColor="unset"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
