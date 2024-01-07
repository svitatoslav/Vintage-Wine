import PropTypes from "prop-types";
import styles from "./Title.module.scss";

const SectionTitle = ({ subText, secText }) => {
  return (
    <div className="vvWrapperTitle">
      <h3 data-testid="SectionTitle" className={styles.vvSectionTitle}>
        <span className={styles.vvSubTitle}>{subText}</span> {secText}
      </h3>
    </div>
  );
};

SectionTitle.propTypes = {
  subText: PropTypes.string,
  secText: PropTypes.string,
};

SectionTitle.defaultProps = {
  subText: "",
  secText: "",
};

export default SectionTitle;
