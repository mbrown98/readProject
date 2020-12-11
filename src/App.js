import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

import Search from "./Search";
import Home from "./Home";
import "./App.css";

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <Search books={this.state.books} switchShelf={this.switchShelf} />
          )}
        />
        <Route path="/" exact component={Home} />
      </div>
    );
  }
}

export default BooksApp;
