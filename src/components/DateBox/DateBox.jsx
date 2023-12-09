import PropTypes from "prop-types";
import styles from "./DateBox.module.scss";

const formatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
});

const DateBox = ({ date }) => {
  const formatedDate = formatter.formatToParts(new Date(date));
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
