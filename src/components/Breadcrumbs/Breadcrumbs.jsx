import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import BreadcrumbsIcon from "./icons/BreadcrumbsIcon";

const Breadcrumbs = ({ pathParts, noPrefix }) => {
  return (
    <div className={styles.breadcrumbs}>
      <Link to="/" className={styles.breadcrumbsLink}>
        Home <BreadcrumbsIcon />
      </Link>
      {pathParts.map((item, index) => {
        if (index === pathParts.length - 1) {
          const decodedPath = decodeURI(item);

          return (
            <span className={styles.currentPage} key={index}>
              {!noPrefix && "Our"} {decodedPath.replace(/-/g, " ").replace(/\+/g, ".")}
            </span>
          );
        }
        return (
          <Link
            to=".."
            relative="path"
            key={index}
            className={styles.breadcrumbsLink}
          >
            {!noPrefix && "Our"} {item.replace(/-/g, " ").replace(/\+/g, ".")}{" "}
            <BreadcrumbsIcon />
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
