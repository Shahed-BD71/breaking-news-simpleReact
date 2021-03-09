import React, { useEffect, useState } from 'react';
import News from '../News/News';


const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=9cada54a09ec4fb5a7fccb3f2fcb9b6e`)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
    }, []);
    return (
        <div>
            <h1>Top TopHeadline: {articles.length}</h1>
            {
            articles.map(article => <News article={article}> </News>)
            }
        </div>
    );
};

export default TopHeadline;