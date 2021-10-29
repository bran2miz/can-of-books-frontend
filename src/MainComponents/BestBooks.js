import React from 'react';
import axios from 'axios';
import DisplayBooks from '../Components/DisplayBooks.js';
import BookFormModal from '../Components/BookFormModal.js';
import AddBookButton from '../LoginComponents/AddBookButton.js';
import { Carousel } from 'react-bootstrap';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookForm: false,
    };
  }

  showBookFormHandler = () => {
    this.setState({
      showBookForm:true
    });
  }

  getBooks = async () => {
    const bookCans = `${process.env.REACT_APP_SERVER}/books`;
    try {
      const response = await axios.get(bookCans);
      this.setState({ books: response.data });
      console.log(response.data);
    } catch (e) {
      console.warn("connection error: ", e.message);
    }
  };

  componentDidMount() {
    console.log("Getting Books");
    this.getBooks();
  }

  handleCreate = async (bookInfo) => {
    const server = `${process.env.REACT_APP_SERVER}/books/`;
    const response = await axios.post(server, bookInfo);
    const newBook = response.data;
    const books = [...this.state.books, newBook];
    this.setState({books});
  }

  handleDelete = async (bookToDelete) => {
    const server = `${process.env.REACT_APP_SERVER}/books/${bookToDelete._id}`;
    await axios.delete(server);
    try{
      const books = this.state.books.filter(candidate => candidate._id !== bookToDelete._id);
      this.setState({books});
      alert(bookToDelete.title + 'was deleted');
    }
    catch(e) {
      console.log('error');
    }
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (<Carousel>
          {this.state.books.map((book) => {
            return (
              <Carousel.Item key={book._id}>
                <DisplayBooks
                title={book.title}
                description={book.description}
                status={book.status}
                email={book.email}   
                onDelete={this.handleDelete}
                book={book} >
                </DisplayBooks>
              </Carousel.Item>
              );
            })
          }
        </Carousel>) : (<h3>there are no books!</h3>)
        }
        {this.state.showBookForm ? <BookFormModal onCreate={this.handleCreate}/> : <AddBookButton onButtonClick={this.showBookFormHandler}/> } 
      </>
    );
  }
}

export default BestBooks;
