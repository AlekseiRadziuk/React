import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentList'
import ToggleOpenWrapper from '../Decorators/ToggleOpenComponent'

class CollapsibleCommentsList extends Component {
    static defaultProps = {
        comments : []
    }

    static propTypes = {
        comments : PropTypes.arrayOf(PropTypes.shape({
            id : PropTypes.string.isRequired,
            user : PropTypes.string.isRequired,
            text : PropTypes.string.isRequired
        }))
    }

    render() {
        const { comments } = this.props;
        if (comments.length > 0) {
            return this.getboddy();
        }
        else return <h4>Anybode doesn't comment this article</h4>
    }

    getboddy() {
        const { comments } = this.props;
        if (this.props.isOpen) {
            return (<div>
                <br />
                <button onClick={this.props.toggleOpen}>hide comments</button>
                <CommentsList comments={comments} />
            </div>);
        }
        else return (
            <div>
                <br />
                <button onClick={this.props.toggleOpen}>show comments</button>
            </div>
        )
    }
}

export default ToggleOpenWrapper(CollapsibleCommentsList)