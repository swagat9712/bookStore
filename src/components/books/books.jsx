import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Book1 from "../../asset/ImageBook11.png";
import Book2 from "../../asset/Image22.png";
import "./books.scss";
const BookService = require("../../services/user_productService.js");

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const longText = `
<h4>Book Details</h4>
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.

`;

export default function OutlinedCard() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    sort: "",
  });
  const [books, setBook] = React.useState([
  ]);

  useEffect(() => {
    getAllBooksAPI();
  }, []);
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
  const addToWishList = () =>{
    BookService.addWishlist().then((res) =>{
      console.log(res, "wishlisted");
    }).catch((error) =>{
      console.log(error);
    })
  }
  const addToBag = (valueID, index) => {
    console.log( index);
    BookService.addToCartBooks(valueID).then((res) =>{
      console.log(res);
      let bookArray = [...books];
      bookArray[index]['isAdded'] = true;
      setBook(bookArray);
    }).catch((error) =>{
      console.log(error);
    })
  }
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="total-book-container">
      <div className="book-header">
        <h2>Books</h2>
        <FormControl variant="outlined">
          <Select native value={state.sort}>
            <option value={10}>Sort by referance</option>
            <option value={20}>Price: Low to High</option>
            <option value={30}>Price: High to Low</option>
            <option value={40}>Newest Arrival</option>
          </Select>
        </FormControl>
      </div>
      <div className="allbook-container">
        {books &&
          books.map((books, index) => (
            <div className="book-container">
              {
                <Tooltip
                  TransitionComponent={Fade}
                  TransitionProps={{ timeout: 600 }}
                  title={longText}
                  placement="right"
                  style={{ backgroundColor: "white" }}
                >
                  <div key={books._id} className="card-books">
                    {/* <Card className={classes.root} variant="outlined"> */}
                    <div className="image-container">
                      {index % 2 === 0 ? (
                        <img className="bookImage" src={Book1} />
                      ) : (
                        <img className="bookImage" src={Book2} />
                      )}
                    </div>
                    <div className="description-container">
                      <p className="book-name">{books.bookName}</p>
                      <p className="author-name">by {books.author}</p>
                      <p className="price">Rs. {books.price}</p>
                      <div className="parent-button">
                        <div
                          className={
                            books.isAdded
                              ? "addtobag-button-onclick"
                              : "addtobag-button"
                          }
                          onClick={() => addToBag(books._id, index)}
                        >
                          ADD TO BAG{" "}
                        </div>
                        <div
                          className={
                            books.isAdded
                              ? "wishlist-button-onclick"
                              : "wishlist-button"
                          } 
                          onClick={addToWishList}
                        >
                          WISHLIST
                        </div>
                      </div>
                    </div>
                    {/* </Card> */}
                  </div>
                </Tooltip>
              }
            </div>
          ))}
      </div>
    </div>
  );
}
