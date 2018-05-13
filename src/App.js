import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.css";

import Posts from "./Posts";
import PostForm from "./PostForm";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React-Redux</h1>
          </header>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
