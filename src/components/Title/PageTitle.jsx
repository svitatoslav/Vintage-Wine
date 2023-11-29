import cn from "classnames";
import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const PageTitle = ({ text, type, extraClass }) => {
  let titleStyle = styles.vvSectionTitle;

  if (type === "main") {
    titleStyle = styles.vvTitle;
  }

  return (
    <h1
      data-testid="PageTitle"
      className={cn(titleStyle, { [extraClass]: extraClass })}
    >
      {text}
    </h1>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  extraClass: PropTypes.string,
};

PageTitle.defaultProps = {
  text: "",
  type: "",
  extraClass: "",
};

export default PageTitle;
