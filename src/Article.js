import React, { Component } from 'react'

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
        const { article } = this.props ;
        return this.state.isOpen ? <section>{article.text}</section> : null;
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}

//export default function Article(props) {
//    console.log(props);
//    const { article } = props;
//    return (
//        <div>
//            <h3>{article.title}</h3>
//            <section>{article.text}</section>
//        </div>
//    );
//}