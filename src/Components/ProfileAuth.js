import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Carousel from 'react-bootstrap/Carousel'
import DisplayBooks from '../Components/DisplayBooks'
import AuthLogin from './AuthLogin';
import AuthLogout from './AuthLogout';

const Profile = ({books }) => {
  const {user, isAuthenticated, isLoading} = useAuth0();

  if (isLoading) {
    return <div>Loading</div>
  }

  console.log(user);
  return (
    {isAuthenticated && (
        <h2>{`Welcome ${user.given_name}`}</h2>
        {books.length ? (
          {this.state.books.map((book) => {
            return (
              <div>
              <>
                <Carousel>
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
              </div>
              </Carousel>
              </>
              )
            }
    )
}

export default Profile;
        {/* {books.length ? (
          {this.state.books.map((book) => {
            return (
              <div>
              <>
                <Carousel>
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
              </div>
              </Carousel>
              </>
              )
            }
       )
        ) : (
           <h3>there are no books!</h3>
           )
          }
    */}
export default Profile;