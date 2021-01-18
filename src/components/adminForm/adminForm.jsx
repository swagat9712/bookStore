import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./adminForm.scss";
import { Link } from "react-router-dom";
const BookService = require("../../services/adminproduct_service");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function AdminForm(props) {
  const [books, setBook] = React.useState([]);
  useEffect(() => {
    getAllBooksAPI();
  },[]);
  const getAllBooksAPI = () => {
    BookService.getBooks()
      .then((res) => {
        console.log(res.data.result);
        let booksData = res.data.result;
        setBook(booksData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleClickDelete = (value) =>{
    BookService.deleteBooks(value)
      .then((res) => {
        getAllBooksAPI();
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const classes = useStyles();
  return (
    <div className="outer-content">
      <div className="button-group">
        <div>
        <Link to="/admin/admindashboard/addbooks">
          <Button variant="contained" color="primary">
            Add Book
          </Button>
          </Link>
        </div>
      </div>
      <div className="outer-container-book">
        {books &&
          books.map((content) => (
            <div className="book-container">
              {
                <div>
                  <div className="image-container-book"></div>
                  <div className="description-container">
                    <p className="book-name">{content.description}</p>
                    <p className="author-name">by {content.author}</p>
                    <p className="price">Rs.{content.price}</p>
                    <div className="parent-button">
                      <div className="edit-button" onClick={()=>props.handleClickEdit(content)}>EDIT</div>
                      <div className="delete-button" onClick={()=>{handleClickDelete(content._id)}}>DELETE</div>
                    </div>
                  </div>
                </div>
              }
            </div>
          ))}
      </div>
    </div>
  );
}
