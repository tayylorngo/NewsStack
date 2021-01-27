import React, {Component} from 'react';
import './NewsArticle.css';
import Button from 'react-bootstrap/Button';

class NewsArticle extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className="ArticleImage" src={this.props.article.img} alt=""/>
                </div>
                <h1 className="ArticleTitle">{this.props.article.title}</h1>
                <h3 className="ArticleAuthor">{this.props.article.author}</h3>
                <p className="ArticleDescription">{this.props.article.description}</p>
                <Button className="Button" variant="primary" href={this.props.article.url}>Read Article</Button>
                <Button className="Button" onClick={this.props.nextArticle} variant="success" >Next Article</Button>
            </div>
        );
    }
}

export default NewsArticle;