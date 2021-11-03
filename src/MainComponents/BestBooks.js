import React from "react";
import axios from "axios";
import DisplayBooks from "../Components/DisplayBooks.js";
import BookFormModal from "../Components/BookFormModal.js";
import AddBookButton from "../LoginComponents/AddBookButton.js";
import { Carousel } from "react-bootstrap";
import UpdateBook from "../Components/UpdateBook";
import "../CSS/BestBooks.css"
import { withAuth0 } from '@auth0/auth0-react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookForm: false,
      updatedBook: "",
      showUpdateForm: false,
    };
  }

  showBookFormHandler = () => {
    this.setState({
      showBookForm: true,
    });
  };

  getBooks = async (config) => {
    const bookCans = `${process.env.REACT_APP_SERVER}/books`;
    try {
      const response = await axios.get(bookCans, config);
      this.setState({ books: response.data });
      console.log(response.data);
    } catch (e) {
      console.warn("connection error: ", e.message);
    }
  };

  async componentDidMount() {
    console.log("Getting Books");
    
    let getIdToken = await this.props.auth0.getIdTokenClaims();
    let jwt = getIdToken.__raw
    let config = {
      headers: { "Authorization": `Bearer ${jwt}`}
    }
    this.getBooks(config);
  }

  handleCreate = async (bookInfo) => {
    const server = `${process.env.REACT_APP_SERVER}/books`;
    const response = await axios.post(server, bookInfo);
    const newBook = response.data;
    const books = [...this.state.books, newBook];
    this.setState({ books: books });

    // const updatedData = await axios.get(server);
    // this.setState({ books: updatedData });
  };

  handleDelete = async (bookToDelete) => {
    console.log(bookToDelete);
    const server = `${process.env.REACT_APP_SERVER}/books/${bookToDelete._id}`;
    console.log(server);
    try {
      await axios.delete(server);
      const books = this.state.books.filter((candidate) => candidate._id !== bookToDelete._id);
      this.setState({ books: books });
      alert(bookToDelete.title + " was deleted");
    } catch (e) {
      console.log("error");
    }
  };

  handleUpdate = async (bookToUpdate) => {
    const url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
    try {
      const res = await axios.put(url, bookToUpdate);
      const updatedBook = res.data;
      this.setState({
        updatedBook: updatedBook,
        showUpdateForm: true,
      });

      // UPdate Book State
      const copyState = this.state.books;

      copyState.forEach((book, idx) => {
        let kitten = [];
        if (bookToUpdate._id === book._id) {
          kitten.push([idx, book]);
          copyState[idx] = bookToUpdate;
          this.setState({
            books: copyState,
          });
        }
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    return (
      <>
        <h2>Can of Books Library</h2>
        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((book) => {
              return (
                <Carousel.Item key={book._id}>
                  <DisplayBooks
                    handleUpdate={this.handleUpdate}
                    title={book.title}
                    description={book.description}
                    status={book.status}
                    email={book.email}
                    handleDelete={this.handleDelete}
                    book={book}
                  ></DisplayBooks>
                </Carousel.Item>
              );
            })}
          </Carousel>
        ) : (
          <h3>there are no books!</h3>
        )}
        {this.state.showBookForm ? (
          <BookFormModal onCreate={this.handleCreate} />
        ) : (
          <AddBookButton onButtonClick={this.showBookFormHandler} />
        )}
        <UpdateBook
          updateBookState={this.updateBookState}
          updateBook={this.state.updatedBook}
          handleUpdate={this.handleUpdate}
          showUpdateForm={this.state.showUpdateForm}
          onClose={() => this.setState({ showUpdateForm: false })}
        />
      </>
    );
  }
}

export default BestBooks;
