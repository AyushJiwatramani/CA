import { useMemo } from "react";
import PropTypes from "prop-types";

const Card = ({
  className = "",
  coinSymbol,
  priceChangeValues,
  propBorderRadius,
  propBoxShadow,
  propBackgroundColor,
}) => {
  const card1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      boxShadow: propBoxShadow,
      backgroundColor: propBackgroundColor,
    };
  }, [propBorderRadius, propBoxShadow, propBackgroundColor]);

  return (
    <div
      className={`flex-1 rounded-xl flex flex-col items-start justify-start py-8 pr-0 pl-8 box-border min-w-[202px] max-w-[270px] text-left text-xs text-neutrals-2 font-body-2-bold ${className}`}
      style={card1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <img
            className="w-10 h-10 relative"
            loading="lazy"
            alt=""
            src={coinSymbol}
          />
          <div className="flex flex-col items-start justify-start gap-[4px]">
            <div className="flex flex-row items-center justify-start gap-[12px] text-neutrals-4">
              <div className="relative leading-[20px] font-semibold inline-block min-w-[61px]">
                BTC/USDT
              </div>
              <div className="rounded-3xl bg-primary-3 flex flex-row items-center justify-center py-0.5 px-2 text-neutrals-8">
                <div className="relative leading-[20px] font-semibold inline-block min-w-[42px]">
                  {priceChangeValues}
                </div>
              </div>
            </div>
            <div className="relative text-5xl leading-[32px] font-semibold inline-block min-w-[112px] mq450:text-lgi mq450:leading-[26px]">
              36,641.20
            </div>
            <div className="relative leading-[20px] inline-block min-w-[54px]">
              36,641.20
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  coinSymbol: PropTypes.string,
  priceChangeValues: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propBoxShadow: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default Card;
