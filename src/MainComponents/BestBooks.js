<<<<<<< HEAD:src/BestBooks.js
import React from "react";
import axios from "axios";
import DisplayBooks from "./Components/DisplayBooks";
=======
import React from 'react';
import axios from 'axios';
import DisplayBooks from '../Components/DisplayBooks.js';
>>>>>>> 72e51b2fe2612c4352fa9f92d767231114c9dbac:src/MainComponents/BestBooks.js

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  getBooks = async () => {
    const bookKey = process.env.REACT_APP_SERVER;
    const bookCans = `${bookKey}/books`;
    console.log(bookCans);
    try {
      const retrieveBooks = await axios.get(`${bookCans}`);
      this.setState({ books: retrieveBooks.data });
      console.log(retrieveBooks.data);
    } catch (e) {
      console.warn("connection error: ", e.message);
    }
  };

  componentDidMount() {
    console.log("Getting Books");
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 1 ? <DisplayBooks books={this.state.books} /> : <h3>there are no books!</h3>}
      </>
    );
  }
}

export default BestBooks;
