import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);
const title = "Boisyet"
function App() {
  return (
    <div className="App">
      <Header title={title}/>
      <About image={blogData.image} aboutText={blogData.about} />
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
