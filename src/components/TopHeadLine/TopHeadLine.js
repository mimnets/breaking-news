import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadLine = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7f0156c232c4429a80c5c302fc0cbd7a'
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headlines: {articles.length}</h1>
            {
                articles.map(article => <News article = {article}></News>)
            }
        </div>
    );
};

export default TopHeadLine;