import React from "react";
import SearchBar from "./Component/Search/SearchBar";
import youtube from "./Component/api/youtube";
import VideoList from "./Component/VideoList/VideoList";
import VideoDetail from "./Component/VideoDetail/VideoDetail";

class App extends React.Component {
  state = {
    videos: [], 
    selectedVideo: null,
  };

  handleSubmit = async (keyword) => {
    const response = await youtube.get("/search", {
      params: {
        q: keyword,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log(response);
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "1em" }}>
        <SearchBar handleFormSubmit={this.handleSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                handleVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
