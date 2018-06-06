import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ToggleOpenWrapper from '../Decorators/ToggleOpenComponent'
import CollapsibleCommentsList from './CollapsibleCommentsList'

class Article extends Component {

    static propTypes = {
        article : PropTypes.shape({
            id : PropTypes.string.isRequired,
            title : PropTypes.string,
            comments : PropTypes.array
        }).isRequired
    }

    render() {
        const { article } = this.props;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.props.toggleOpen}>{this.props.isOpen ? 'close' : 'open'}</button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        if (!this.props.isOpen) {
            return null;
        }
        
        return this.props.isOpen ?
            <section>
                <div>
                    {this.props.article.text}
                    <CollapsibleCommentsList comments={this.props.article.comments} />
                </div>
            </section> : null;
    }
}

export default ToggleOpenWrapper(Article)