import React, { Component } from 'react'
import CollapsibleCommentsList from './CollapsibleCommentsList'

export default class Article extends Component {

    state = {
        isOpen: false
    };

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
        if (!this.state.isOpen) {
            return null;
        }
        const { article } = this.props;
        const { comments } = article;
        return this.state.isOpen ?
            <section>
                <div>
                    {article.text}
                    <CollapsibleCommentsList comments={comments} />
                </div>
            </section> : null;
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}
