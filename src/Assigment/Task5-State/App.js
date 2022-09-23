import React from "react";
import Comment from "./Component/Comment";
class App extends React.Component {
  render() {
    return (
      <>
      {this.props.dataArray?.map((data, index) => (
        <Comment image={data.image} date={data.date} content={data.content} name={data.name}  key={index}/>
      ))}
      </>
    );
  }
}

export default App;