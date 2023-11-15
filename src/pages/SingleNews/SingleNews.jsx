import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ArticleContent from "../../components/ArticleContent/ArticleContent";
import PageTitle from "../../components/Title/PageTitle";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import useBreadcrumbs from "../../hooks/useBreadcrumbs";


const SingleNews = () => {
    const {id} = useParams()
    const [article, setArticle] = useState(null)
    const pathParts = useBreadcrumbs();

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
            <PageTitle text="News"/>
            <Breadcrumbs pathParts={pathParts} />
            <ArticleContent article={article}/>
        </div>
    )
}

export default SingleNews;