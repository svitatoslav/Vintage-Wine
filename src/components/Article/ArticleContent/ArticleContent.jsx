import styles from './ArticleContent.module.scss';
import Container from "../../Container/Container";
import Facebook from "/public/imageProject/news/icons/facebook.svg?react"
import Twitter from "/public/imageProject/news/icons/twitter.svg?react"
import Linkedin from "/public/imageProject/news/icons/linkedin.svg?react"
import NewsItemTags from "../../NewsItem/NewsItemTags";
import DateBox from "../../DateBox/DateBox";
import PageTitle from "../../Title/PageTitle";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchNewsThunk} from "../../../redux/reducers/news-reducer";

const ArticleContent = ({article}) => {
    return (
        <Container>

            <div className={styles.ArticleContent} data-testid="ArticleContent">
                <div>
                    <div className={styles.DateWrapper}>
                        <DateBox date={article.createdAt}/>
                    </div>
                    <img className={styles.Image} src={article.image} alt={article.title}/>
                    <div>
                        <div className={styles.TagsWrapper}>
                            <NewsItemTags tags={article.tags}/>
                        </div>
                        <div className={styles.TitleWrapper}>
                            <h2 className={styles.Title}>{article.title}</h2>
                            <div>
                                <a className={styles.SvgLink} target="_blank" href="https://twitter.com/?lang=en">
                                    <Linkedin className={styles.Svg}/>
                                </a>
                                <a className={styles.SvgLink} target="_blank" href="https://twitter.com/?lang=en">
                                    <Twitter className={styles.Svg}/>
                                </a>
                                <a className={styles.SvgLink} target="_blank" href="https://twitter.com/?lang=en">
                                    <Facebook className={styles.Svg}/>
                                </a>
                            </div>
                        </div>
                        {article.description.map((desc, index) => (
                            <p className={styles.Description} key={`paragraph-${index}`}>{desc}</p>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default ArticleContent;
