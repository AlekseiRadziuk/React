import React, { Component } from 'react'
import CommentsList from './CommentList'

export default class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
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
        var comments = this.getComments();
        console.log(comments);
        return this.state.isOpen ?
            <section>
                <div>
                    {article.text}
                    {comments}
                </div>
            </section> : null;
    }

    getComments() {
        const { article } = this.props;
        const { comments } = article;
        if (comments != undefined && comments.length > 0) {
            return <div>
                <br/>
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
}
