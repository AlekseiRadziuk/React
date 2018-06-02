import React from 'react'

export  default  function Comment({comment}) {
	return (<div>{comment.user}: {comment.text}</div>);
}