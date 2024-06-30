import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/signon");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[43px] box-border top-[0] z-[99] sticky max-w-full ${className}`}
    >
      <Header
        border="/border.svg"
        onButtonContainerClick={onButtonContainerClick}
        onButtonClick={onButtonClick}
      />
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
