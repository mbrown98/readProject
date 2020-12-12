import React from "react";
import "./App.css";
import Book from "./Book";

const Shelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.shelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <li>
              <Book book={book} switchShelf={props.switchShelf} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
