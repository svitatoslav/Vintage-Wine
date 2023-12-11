import PropTypes from "prop-types";
import styles from "./DateBox.module.scss";
import { formatedPartsDate } from "../../helpers/formatteDate";

const DateBox = ({ date }) => {
  const formatedDate = formatedPartsDate(date);
  const month = formatedDate[0]?.value;
  const day = formatedDate[2]?.value;

  return (
    <div className={styles.DateBox} data-testid="DateBox">
      <p className={styles.Date}>
        Date <span className={styles.Month}>{day}</span> <span> {month} </span>
      </p>
    </div>
  );
};

DateBox.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateBox;
