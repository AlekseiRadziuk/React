import React, { Component } from 'react'
import CommentsList from './CommentList'

export default class CollapsibleCommentsList extends Component {

    state = {
        open: false
    };
    
    render() {
        const { comments } = this.props;
        if (comments != undefined && comments.length > 0) {
            return this.getboddy();
        }
        else return <h4>Anybode doesn't comment this article</h4>
    }
    
    getboddy() {
        const { comments } = this.props;
        if (this.state.open) {
            return (<div>
                <br />
                <button onClick={this.toggleComments}>hide comments</button>
                <CommentsList comments={comments} />
            </div>);
        }
        else return (
            <div>
                <br />
                <button onClick={this.toggleComments}>show comments</button>
            </div>
        )
    }
    
    toggleComments = () => {
        this.setState({
            open: !this.state.open
        })
    }
}