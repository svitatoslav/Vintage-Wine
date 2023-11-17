import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ArticleContent from "../../components/ArticleContent/ArticleContent";


const SingleNews = () => {
    const {id} = useParams()
    const [article, setArticle] = useState(null)

    useEffect(() => {
         const getArticleById = async () => {
             const response =  await fetch(`http://127.0.0.1:4000/api/news/${id}`)
             const article = await response.json()
             setArticle(article)
         }
         getArticleById()

    },[])

    if (!article) {
        return null
    }

    return (
        <div>
            <ArticleContent article={article}/>
        </div>
    )
}

export default SingleNews;