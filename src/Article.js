import React, { Component } from 'react'
import CommentsList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isCommentsShown: false
        };
    }

    render() {
        const { article } = this.props;
        const { isOpen } = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleOpen}>{this.state.isOpen ? 'close' : 'open'}</button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const { article } = this.props;
        const { comments } = article;
        var commentsList = this.getComments();
        console.log(commentsList);
        return this.state.isOpen ?
            <section>
                <div>
                    {article.text}
                    <br />
                    {
                        comments == undefined ? null :
                            <button onClick={this.showComments}>
                                {this.state.isCommentsShown ? 'close comments' : 'show comments'}
                            </button>
                    }
                    {commentsList}
                </div>
            </section> : null;
    }

    getComments() {
        if (!this.state.isCommentsShown) {
            return null;
        }
        const { article } = this.props;
        const { comments } = article;
        if (comments != undefined && comments.length > 0) {
            return <div>
                <br />
                Comments:
                <CommentsList comments={comments} />
            </div>;
        }
        return null;

    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    showComments = () => {
        this.setState({
            isCommentsShown: !this.state.isCommentsShown
        })
    }
}
