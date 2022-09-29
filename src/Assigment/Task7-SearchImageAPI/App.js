import React from "react";
import ImageList from "./Component/ImageList";
import SearchBar from "./Component/SearchBar";
import unsplash from "./Component/unsplash";

class App extends React.Component {
  state = {images: []}

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term},
    });

    this.setState({ images: response.data.results });
    console.log(response.data.results);
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList foundImages={this.state.images}/>
      </div>
    );
  }
}

export default App;