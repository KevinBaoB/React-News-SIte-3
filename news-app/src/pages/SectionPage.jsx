import {useParams} from 'react-router-dom'
import { useState } from 'react'
import {useEffect} from 'react'
import ArticleList from '../components/AritcleList'

function SectionPage ({articles}) {

    const { sectionName } = useParams()
    const [sectionArticles, setSectionArticles] = useState([])

    // without square brackets it will be an endless loop 
    useEffect(() => {
        const filteredArticles = articles.filter(article => article.section.toLowerCase() == sectionName.toLowerCase())
        setSectionArticles(filteredArticles)
    } , [sectionName, articles])

    return ( 
        <div>
            <ArticleList  articles={sectionArticles} />
        </div>
    );
}
 
export default SectionPage;