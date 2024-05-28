import React, { Component } from 'react'

const NewsItem = (props) => {
  
    const {title, description, imageUrl , newsUrl} = props
    return (
      <div>
        <div className="card">
            <img src={!imageUrl? "https://www.hindustantimes.com/ht-img/img/2024/05/22/1600x900/delhi_bomb_threat_1716378190339_1716378190557.png": imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href= {newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
            </div>
        </div>
      </div>
    )
}

export default NewsItem
