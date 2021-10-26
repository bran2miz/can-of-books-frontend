
   
import React from 'react';
import axios from 'axios';
import DisplayBooks from './Components/DisplayBooks';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }
  getBooks = async () => {
    //Below is the .env that is linked to heroku
    const bookCans = process.env.REACT_APP_SERVER_HEROKU;
    // Below is the localhost .env
    // const bookCans = process.env.REACT_APP_SERVER;
    try {
    const retrieveBooks = await axios.get(bookCans);
    this.setState({books: retrieveBooks.data});
    } catch(error) {
      this.setState({bookError: true});
    }
  }
  componentDidMount() {
    this.getBooks();
    console.log('hello');
  }
  render() {
  const BooksArr = this.state.books.map((book)=> {
    return (<DisplayBooks book = {book} />)
  })
console.log('This is the books arr: ',BooksArr);
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length > 0 && BooksArr ? BooksArr : <h3>there are no books!</h3>}
      </>
    )
  }
}

export default BestBooks;
