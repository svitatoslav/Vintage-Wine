import PropTypes from "prop-types";
import styles from "./ArticleContent.module.scss";
import Container from "../../Container/Container";
import Facebook from "./icons/facebook.svg?react";
import Twitter from "./icons/twitter.svg?react";
import Linkedin from "./icons/linkedin.svg?react";
import NewsItemTags from "../../NewsItem/NewsItemTags";
import DateBox from "../../DateBox/DateBox";

const ArticleContent = ({ article }) => {
  return (
    <Container>
      <div className={styles.ArticleContent} data-testid="ArticleContent">
        <div>
          <div className={styles.DateWrapper}>
            <DateBox date={article.createdAt} />
          </div>
          <img
            className={styles.Image}
            src={article.image}
            alt={article.title}
          />
          <div>
            <div className={styles.TagsWrapper}>
              <NewsItemTags tags={article.tags} />
            </div>
            <div className={styles.TitleWrapper}>
              <h2 className={styles.Title}>{article.title}</h2>
              <div>
                <a
                  target="_blank"
                  href="https://twitter.com/?lang=en"
                >
                  <Linkedin className={styles.Svg} />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/?lang=en"
                >
                  <Twitter className={styles.Svg} />
                </a>
                <a
                  target="_blank"
                  href="https://twitter.com/?lang=en"
                >
                  <Facebook className={styles.Svg} />
                </a>
              </div>
            </div>
            {article.description.map((desc, index) => (
              <p
                className={styles.Description}
                key={`paragraph-${index.toString()}`}
              >
                {desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

ArticleContent.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

ArticleContent.defaultProps = {
  article: {}
};


export default ArticleContent;


