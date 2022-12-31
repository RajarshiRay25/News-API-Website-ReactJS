import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,imgURL,newsURL,author,source,time} = this.props;
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
            <img src={imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p class="badge text-bg-success">From: {source}</p>
                <p class="badge text-bg-info">Time: {new Date(time).toGMTString()}</p>
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small class="text-muted">By: {author?author:"Anonymous"} </small></p>
                <a href={newsURL} target = "_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read News</a>
            </div>
            </div>
        </div>
    )
  }
}
