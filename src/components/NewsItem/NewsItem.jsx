import styles from './NewsItem.module.scss';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchNewsThunk} from "../../redux/reducers/news-reducer";
import Button from "../Button/Button";
import {fetchNewsAC} from "../../redux/reducers/news-reducer";
import DateBox from "../DateBox/DateBox";
import {Link} from "react-router-dom";
import Facebook from "/public/imageProject/news/icons/facebook.svg?react"
import Twitter from "/public/imageProject/news/icons/twitter.svg?react"
import Linkedin from "/public/imageProject/news/icons/linkedin.svg?react"

const NewsItem = ({img, name, desc, date, tags}) => {

    const dispatch = useDispatch()
    const news = useSelector((state) => state.news.news)

    useEffect(() => {
        dispatch(fetchNewsThunk())
    }, []);


    return (
        <div className={styles.Wrapper} data-testid="News">
            {news.map(item => (
                <div className={styles.Item} key={item._id}>
                    <div className={styles.DateWrapper}>
                        <DateBox date={item.createdAt}/>
                    </div>
                    <img className={styles.Image} src={item.image} alt={item.name}/>
                    <a href="/" target="_blank" className={styles.Tags}>{item.tags[0]} <span>{item.tags[1]}</span></a>
                    <h3 className={styles.Title}>{item.title}</h3>
                    <p className={styles.Desc}>{item.description}</p>
                    <div className={styles.ButtonSvgWrapper}>
                        <Button onClick={() => console.log(item.createdAt)} variant="small" text="Read more"/>
                        <div className={styles.SvgWrapper}>
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
                </div>
            ))}
        </div>
    );
}
export default NewsItem;
