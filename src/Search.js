import React from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import "./App.css";

class Search extends React.Component {
  state = { searchInput: "", bookResults: [] };

  searchBooks = (e) => {
    if (!e.target.value) {
      this.setState({ bookResults: [] });
    }
    this.setState({ searchInput: e.target.value });
    BooksAPI.search(e.target.value).then(
      (books) => books && this.setState({ bookResults: books })
    );
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              defaultValue={this.state.searchInput}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
          {this.state.bookResults.length > 0 &&
            this.state.bookResults.map((book) => {
              return <Book book={book} switchShelf={this.props.switchShelf} />;
            })}
        </div>
      </div>
    );
  }
}

export default Search;
