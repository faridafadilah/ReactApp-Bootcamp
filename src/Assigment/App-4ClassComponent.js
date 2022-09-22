import React from "react";
import Comment from "./Component/Comment";
import dataArray from './Component/data';
// Membuat Comment Menggunakan CLass
class App extends React.Component {
  render() {
    return (
      <>
        <Comment dataArray={dataArray}/>
      </>
    );
  }
}

export default App;