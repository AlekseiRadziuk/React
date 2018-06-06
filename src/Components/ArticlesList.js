import React from 'react'
import PropTypes from 'prop-types'
import Article from './Article'

export default function ArticleList({ articles }) {
    return (<ul>
        {articles.map((article) => <li key={article.id}><Article article={article} /></li>)}
    </ul>)
}

ArticleList.propTypes = {
    articles : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string.isRequired,
        title : PropTypes.string.isRequired,
        text : PropTypes.string.isRequired
    })).isRequired
}