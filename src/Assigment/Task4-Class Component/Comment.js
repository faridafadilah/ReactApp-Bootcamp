import Button from "./Button";
import React from "react";

// Membuat Comment Menggunakan CLass
class Comment extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        {this.props.dataArray?.map((data, index) => (
          <div className="comment" key={index}>
            <a href="/" className="avatar">
              <img alt="avatar" src={data.image} />
            </a>
            <div className="content">
              <a href="/" className="author">
                {data.name}
              </a>
              <div className="metadata">
                <span className="date">{data.date}</span>
                  <i className="heart icon"></i>
                  {this.props.count}
              </div>
              <div className="text">{data.content}</div>
              <Button/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Comment;