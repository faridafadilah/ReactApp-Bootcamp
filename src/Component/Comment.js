import React from "react";

// Membuat Comment Menggunakan CLass
class Comment extends React.Component {
  constructor({image, name, date, content}) {
    super();
    this.state = {
      image, 
      name, 
      date,
      content,
      like: 0
    };
  }

  handleLike = ()  => {
    this.setState({
      like: this.state.like + 1
    })
  }

  render() {
    return (
      <div className="ui container comments">
          <div className="comment">
            <a href="/" className="avatar">
              <img alt="avatar" src={this.state.image} />
            </a>
            <div className="content">
              <a href="/" className="author">
                {this.state.name}
              </a>
              <div className="metadata">
                <span className="date">{this.state.date}</span>
                <div className="rating">
                  <i className="heart icon"></i>
                  {this.state.like}
                </div>
              </div>
              <div className="text">{this.state.content}</div>
              <button onClick={this.handleLike}><i className="heart icon"></i>Like</button>
            </div>
          </div>
      </div>
    );
  }
}

export default Comment;