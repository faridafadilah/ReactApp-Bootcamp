import React from "react";
import { connect } from "react-redux"; // Import Connect Frrom react-redux
import { fetchPostsAndUsers } from "../reduxAsync/action/index"; // Import Action at redux
import GetUser from "./GetUser"; // Import Component Get User
import { faker } from "@faker-js/faker"; // Import faker for Image Random

class GetPosts extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  // Function renderList for Looping Comment
  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div class="ui comments">
          <div class="comment">
            <a class="avatar">
              <img src={faker.image.avatar()} />
            </a>
            <div class="content">
              <a class="author">{post.title}</a>
              <div class="text">{post.body}</div>
              <p>
                <GetUser userId={post.userId} />
              </p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

// State agar bisa diakses
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(GetPosts);
