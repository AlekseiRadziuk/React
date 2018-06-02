import React from 'react'
import Article from './Article'

export default function ArticleList({ articles }) {
    return (<ul>
        {articles.map((article) => <li key={article.id}><Article article={article} /></li>)}
    </ul>)
}