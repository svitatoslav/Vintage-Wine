import cn from "classnames";
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

export default PageTitle;
