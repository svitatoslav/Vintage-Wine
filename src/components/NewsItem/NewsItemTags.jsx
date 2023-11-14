import styles from "./NewsItem.module.scss";

const NewsItemTags = ({tags}) => {
    return (
        <div className={styles.TagsWrapper}>
            {tags.map((tag) => (
                <a href="/" target="_blank" className={styles.Tags}>{tag}</a>
            ))}
        </div>
    )
}

export default NewsItemTags