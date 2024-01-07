import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const SubTitle = ({ text }) => {
  return (
    <h3 data-testid="subTitle" className={styles.vvSubTitle}>
      {text}
    </h3>
  );
};

SubTitle.propTypes = {
  text: PropTypes.string,
};

SubTitle.defaultProps = {
  text: "",
};

export default SubTitle;
