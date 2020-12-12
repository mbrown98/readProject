import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import Search from "./Search";
import Home from "./Home";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  switchShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf)
      .then(() => BooksAPI.getAll())
      .then((books) => {
        this.setState((oldState) => ({
          books,
        }));
      });
  };
  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <Search books={this.state.books} switchShelf={this.switchShelf} />
          )}
        />
        <Route
          path="/"
          exact
          render={() => (
            <Home books={this.state.books} switchShelf={this.switchShelf} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
