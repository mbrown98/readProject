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
              switchShelf={this.switchShelf}
            />
            <Shelf
              shelfName={"Want to Read"}
              books={this.state.books.filter(
                (book) => book.shelf === "wantToRead"
              )}
              switchShelf={this.switchShelf}
            />
            <Shelf
              shelfName={"Read"}
              books={this.state.books.filter((book) => book.shelf === "read")}
              switchShelf={this.switchShelf}
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
