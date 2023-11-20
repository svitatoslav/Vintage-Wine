import styles from "./NewsItem.module.scss";

const NewsItemTags = ({tags}) => {
    return (
        <div className={styles.TagsWrapper}>
            {tags.map((tag, index) => (
                <a key={index} href="/" target="_blank" className={styles.Tags}>{tag}</a>
            ))}
        </div>
    )
}

export default NewsItemTags