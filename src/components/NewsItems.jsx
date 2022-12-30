import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description,imgURL,newsURL} = this.props;
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
            <img src={imgURL} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsURL} target = "_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read News</a>
            </div>
            </div>
        </div>
    )
  }
}
