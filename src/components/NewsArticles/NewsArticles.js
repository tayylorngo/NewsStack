import React, {Component} from 'react';
import axios from "axios";
import NewsArticle from "../NewsArticle/NewsArticle";

class NewsArticles extends Component {

    state = {
        articles: [],
        currentArticle: 0
    }

    componentDidMount() {
        const key = 'ab28217af90d4cd89da55aaf400d4f26';
        const url = 'http://newsapi.org/v2/everything?q=' + this.props.topic + '&from=2020-12-13&sortBy=publishedAt&apiKey=' + key;
        axios.get(url)
            .then(response => {
                this.setState({articles: response.data.articles});
            });
    }

    goToNextArticle = () => {
        let newCurrentArticle = this.state.currentArticle;
        newCurrentArticle += 1;
        this.setState({currentArticle: newCurrentArticle});
    }

    render(){
        const currPost = this.state.articles[this.state.currentArticle];
        return (
            <div>
                <NewsArticle
                    title={currPost.title}
                    author={currPost.author}
                    url={currPost.url}
                />
            </div>
        );
    }
}

export default NewsArticles;