import React, { Component , useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {
	const [articles,setArticles] = useState([])
	const [loading, setLoading] = useState(true)
	const [page , setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0)
  const updateNews =  async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c2dd0111d63d4eb8984ce02fd9e99055&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
	setArticles(parsedData.articles)
	setTotalResults(parsedData.totalResults)
	setLoading(false)
  }

useEffect(()=>{
	updateNews();
},[])
//   handlePrevEvent = async () => {
//     // let url  = `https://newsapi.org/v2/top-headlines?country= ${props.country}&category=${props.category}&apiKey=c2dd0111d63d4eb8984ce02fd9e99055&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
//     // let data = await fetch(url);
//     // let parsedData = await data.json();
//     // this.setState({
//     //   articles: parsedData.articles,
//     //   page: this.state.page - 1
//     // })
//     // console.log("Handle Prev Clicked")
//     setPage(page - 1);
//     updateNews();
//   }
//   handleNextEvent = async () => {
//     // const nextPage = this.state.page + 1;
//     //  const totalPages = Math.ceil(this.state.totalResults / props.pageSize);

//     //   if (nextPage <= totalPages) {
//     //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c2dd0111d63d4eb8984ce02fd9e99055&page=${nextPage}&pageSize=${props.pageSize}`;
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     this.setState({
//     //       articles: data.articles,
//     //       totalResults: data.totalResults,
//     //       page: nextPage
//     //     });
//     //   }
//     setPage( page + 1 );
//     updateNews();
//   }

   const fetchMoreData = async () => {
    setPage(page + 1)
	const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=c2dd0111d63d4eb8984ce02fd9e99055&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
	setArticles(articles.concat(parsedData.articles))
	setTotalResults(parsedData.totalResults)
  	};

    const totalPages = Math.ceil(totalResults / props.pageSize);
    const hasNextPage = page < totalPages;

    return (

      <div className='container my-3' style={{ backgroundColor: "#261c26" }}>
        <h1 style={{ fontFamily: "san-serif", textDecoration: "underline", textAlign: "center", padding: "30px", margin: "10px", fontSize: "3em", color: "white" }}>News - Top Headline</h1>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults }
          loader={<h4>Loading...</h4>}
        >
		<div className="container">
          <div className='row' style={{ padding: "10px" }}>
            {articles.map((element) => {
              return <div className='col-md-4' key={element.url} style={{ padding: "20px", border: "border-primary" }}>
                <NewsItem title={element.title ? element.title.slice(0, 30) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            })}
          </div>
		</div>
        </InfiniteScroll>
        
      </div>
    )
  }


News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
export default News
