import {useEffect, useState} from "react";
import NewsItemTags from "../../NewsItem/NewsItemTags";
import {Link} from "react-router-dom"
import styles from "./Aside.module.scss"


const Aside = ({article}) => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getRelatedItems = async () => {
            const promises = article?.related.map((id) => {
                return fetch(`http://127.0.0.1:4000/api/news/${id}`)
                    .then(res => res.json())
            })
            const articles = await Promise.all(promises)
            setArticles(articles)
        }
        getRelatedItems()

    }, [article]);

    return (
        <aside className={styles.Wrapper}>
            {articles.map((article) => (
                <div className={styles.ItemWrapper} key={article._id}>
                    <img className={styles.Img} src={article.image} alt=""/>
                    <NewsItemTags tags={article.tags}/>
                    <h2 className={styles.Title}>{article.title}</h2>
                    <p className={styles.Description}>{article.description[0].split(" ").slice(0, 26).join(" ")}</p>
                    <Link className={styles.Link} to={`/news/${article._id}`}>Read more...</Link>
                </div>
            ))}
        </aside>
    )
}


export default Aside;
