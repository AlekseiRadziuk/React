import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

export default function CommentsList({ comments }) {
    return (
        <ul>
            {comments.map((comment) => <li key={comment.id}><Comment comment={comment} /></li>)}
        </ul>
    );
}

CommentsList.propTypes = {
    comments : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string.isRequired,
        user : PropTypes.string.isRequired,
        text : PropTypes.string.isRequired
    }))
}