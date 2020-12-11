import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Shelf from "./Shelf";
import * as BooksAPI from "./BooksAPI";

import "./App.css";

class Home extends React.Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => this.setState({ books }));
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              shelfName={"Currently Reading"}
              books={this.state.books.filter(
                (book) => book.shelf === "currentlyReading"
              )}
            />
            <Shelf
              shelfName={"Want to Read"}
              books={this.state.books.filter(
                (book) => book.shelf === "wantToRead"
              )}
            />
            <Shelf
              shelfName={"Read"}
              books={this.state.books.filter((book) => book.shelf === "read")}
            />
          </div>
        </div>
        <div className="open-search">
          {/* <button onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </button> */}
          <Link to="/search">Search</Link>
        </div>
      </div>
    );
  }
}

export default Home;
