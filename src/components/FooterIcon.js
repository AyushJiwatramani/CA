import { useMemo } from "react";
import PropTypes from "prop-types";

const FooterIcon = ({ className = "", propMarginTop }) => {
  const footerIconStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <img
      className={`self-stretch relative max-w-full overflow-hidden max-h-full object-cover ${className}`}
      alt=""
      src="/footer@2x.png"
      style={footerIconStyle}
    />
  );
};

FooterIcon.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propMarginTop: PropTypes.any,
};

export default FooterIcon;
