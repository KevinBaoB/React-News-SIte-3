import { Button, Form } from "react-bootstrap"
import ArticleList from "../components/AritcleList"
import { useState, useEffect } from 'react'
import ArticleTeaser from "../components/ArticleTeaser"
 

function HomePage ({articles}){

    const [searchTitle, setSearchTitle] = useState('')
    const [results, setResults] = useState([])

    function handleChange(event) {
        let value = event.target.value
        console.log(value)

        setSearchTitle(value)
    }

    useEffect( ()=> {
        const filteredArticles = articles.filter(article => article.title.includes(searchTitle))
        setResults(filteredArticles)
    }, [searchTitle])

    return (
        <div>
            <Form>
                <Form.Group>

                    <Form.Control id="searchValue" type="search" aria-label="Search" placeholder="Title" onChange={(event) =>{handleChange(event)}}></Form.Control>
                    <Button  >Search</Button>
                </Form.Group>
            </Form>
            
            {results ?
                
                results.map((article) => (
                    <div>
                        <ArticleTeaser key={article.id} {...article}/>
                        <marquee>Your Search Result</marquee>
                    </div>
                    
                )) :
                ""
            }
            
            <ArticleList articles={articles}/>
            
        </div>
    )
}

export default HomePage