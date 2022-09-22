import React from "react";

// Membuat Comment Menggunakan CLass
class Comment extends React.Component {
  render() {
    return (
      <div className="ui container comments">
        {this.props.dataArray?.map((data, index) => (
          <div className="comment">
            <a href="/" className="avatar">
              <img alt="avatar" src={data.image} />
            </a>
            <div className="content">
              <a href="/" className="author">
                {data.name}
              </a>
              <div className="metadata">
                <span className="date">{data.date}</span>
              </div>
              <div className="text">{data.content}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Comment;