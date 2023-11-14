import styles from './ArticleContent.module.scss';
import Container from "../Container/Container";
import Facebook from "/public/imageProject/news/icons/facebook.svg?react"
import Twitter from "/public/imageProject/news/icons/twitter.svg?react"
import Linkedin from "/public/imageProject/news/icons/linkedin.svg?react"
import NewsItemTags from "../NewsItem/NewsItemTags";

const ArticleContent = ({article}) => {

    console.log(article.image)
    return (
        <Container>
            <div className={styles.ArticleContent} data-testid="ArticleContent">

                <img src={article.image} alt={article.title}/>
                <div>
                    <NewsItemTags tags={article.tags}/>
                    <div>
                        <h2>{article.title}</h2>
                        <div>
                            <a target="_blank" href="https://twitter.com/?lang=en">
                                <Linkedin className={styles.Svg}/>
                            </a>
                            <a className={styles.SvgLink} target="_blank" href="https://twitter.com/?lang=en">
                                <Twitter className={styles.Svg}/>
                            </a>
                            <a target="_blank" href="https://twitter.com/?lang=en">
                                <Facebook className={styles.Svg}/>
                            </a>
                        </div>
                    </div>
                    {article.description.map((desc, index) => (
                        <p key={`paragraph-${index}`}>{desc}</p>
                    ))}

                </div>
            </div>
        </Container>
    )
};

export default ArticleContent;
