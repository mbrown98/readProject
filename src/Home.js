import React from "react";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import "./App.css";

class Home extends React.Component {
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
              books={this.props.books.filter(
                (book) => book.shelf === "currentlyReading"
              )}
              switchShelf={this.props.switchShelf}
            />
            <Shelf
              shelfName={"Want to Read"}
              books={this.props.books.filter(
                (book) => book.shelf === "wantToRead"
              )}
              switchShelf={this.props.switchShelf}
            />
            <Shelf
              shelfName={"Read"}
              books={this.props.books.filter((book) => book.shelf === "read")}
              switchShelf={this.props.switchShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
      </div>
    );
  }
}

export default Home;
