import React, {Component} from 'react';
import axios from "axios";
import NewsArticle from "../NewsArticle/NewsArticle";
import './NewsArticles.css';
import Button from 'react-bootstrap/Button'

class NewsArticles extends Component {

    state = {
        articles: [],
        currentArticle: null,
        currentArticleNum: 0,
        topic: "Enter topic here"
    }

    componentDidMount() {
        this.setState(
            {
                currentArticle: {
                    title: "Title",
                    author: "Author",
                    url: "https://cdn.pixabay.com/photo/2016/09/04/17/46/news-1644696_1280.png",
                    img: null,
                    description: "Description",
                    newsProvider: "News Provider",
                    id: null
                }
            }
        )
    }

    changeArticle() {
        const key = process.env.REACT_APP_SECRET_KEY;
        const url = 'https://gnews.io/api/v4/search?q=' + this.state.topic + '&lang=en&token=' + key;
        axios.get(url)
            .then(response => {
                const articles = response.data.articles.slice(this.state.currentArticleNum, this.state.currentArticleNum + 1);
                this.setState({articles: articles});
            });
    }

    goToNextArticle = () => {
        let newCurrentArticleNum = this.state.currentArticleNum;
        newCurrentArticleNum += 1;
        this.setState({currentArticleNum: newCurrentArticleNum});
        this.changeArticle();
    }

    changeTopicSubmit = (event) => {
        event.preventDefault();
        this.componentDidMount();
    }

    changeTopic = (event) => {
        this.setState({topic: event.target.value});
    }

    render(){
        let renderedArticle = {
            title: null,
            author: null,
            url: null,
            img: null,
            description: null,
            newsProvider: null,
            id: null
        }

        for(let x = 0; x < this.state.articles.length; x++){
            renderedArticle.title = this.state.articles[x].title;
            renderedArticle.author = this.state.articles[x].source.name;
            renderedArticle.url = this.state.articles[x].url;
            renderedArticle.img = this.state.articles[x].image;
            renderedArticle.description = this.state.articles[x].description;
            renderedArticle.id = this.state.articles[x].id;
        }
        return (
            <div className="Outline container">
                <div className="FormDiv">
                    <form action="" onSubmit={this.changeTopicSubmit}>
                        <input value={this.state.topic} onChange={this.changeTopic} placeholder="news topic" type="text"/>
                        <Button onClick={this.goToNextArticle} className="ChangeTopicButton" variant="success" size="lg" type="submit">Submit</Button>
                    </form>
                </div>
                <div className="InnerContent">
                    <NewsArticle
                        article={renderedArticle}
                        key={renderedArticle.id}
                        nextArticle={this.goToNextArticle}
                    />
                </div>
            </div>
        );
    }
}

export default NewsArticles;