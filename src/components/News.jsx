import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
      country: "in",
      pageSize: 6,
      category: "general"
    }
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }
      constructor(){
        super();
        console.log("Hello From this side")
        this.state = {
          articles: [],
          loading: true,
          page: 1, 

        }
      }
      async componentDidMount(){
        let url  = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2dd0111d63d4eb8984ce02fd9e99055&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles,
          totalResults: parsedData.totalResults 
        })
      }
      handlePrevEvent = async()=> {
        let url  = `https://newsapi.org/v2/top-headlines?country= ${this.props.country}&category=${this.props.category}&apiKey=c2dd0111d63d4eb8984ce02fd9e99055&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles: parsedData.articles,
          page: this.state.page - 1
        })
        console.log("Handle Prev Clicked")
      }
      handleNextEvent = async()=> {
        const nextPage = this.state.page + 1;
         const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
  
          if (nextPage <= totalPages) {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c2dd0111d63d4eb8984ce02fd9e99055&page=${nextPage}&pageSize=${this.props.pageSize}`;
            const response = await fetch(url);
            const data = await response.json();
            this.setState({
              articles: data.articles,
              totalResults: data.totalResults,
              page: nextPage
            });
          }
      }
  render() {
    const totalPages = Math.ceil(this.state.totalResults / this.props.pageSize);
    const hasNextPage = this.state.page < totalPages;

    return (
      
      <div className='container my-3' style={{backgroundColor: "#261c26"}}>
        <h1 style={{fontFamily: "san-serif", textDecoration: "underline", textAlign: "center" , padding: "30px" , margin: "10px" , fontSize: "3em" , color: "white"}}>News - Top Headline</h1>
        <div className='row' style={{padding: "10px"}}>
            {this.state.articles.map((element) => {
                return <div className='col-md-4' key={element.url} style={{padding: "20px" , border: "border-primary"}}>
                <NewsItem  title = {element.title?element.title.slice(0,30): ""} description = {element.description?element.description.slice(0,88) : ""} imageUrl = {element.urlToImage} newsUrl={element.url}/>
            </div>
            })}     
        </div>
        <div className="container d-flex justify-content-between" style={{padding: "10px"}} >
        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevEvent}> Previous</button>
        <button disabled={!hasNextPage} type="button" className="btn btn-primary" onClick={this.handleNextEvent}>Next</button>
        </div>
      </div>
    )
  }
}

export default News
