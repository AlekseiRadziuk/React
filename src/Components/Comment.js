import React from 'react'
import PropTypes from 'prop-types'

export default function Comment({ comment }) {
	return (<div>{comment.user}: {comment.text}</div>);
}

Comment.propTypes = {
	comment: PropTypes.shape({
		user: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired
}
