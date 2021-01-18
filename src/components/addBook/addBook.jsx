import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import "./addBook.scss";
const BookService = require("../../services/adminproduct_service");
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function AdminAddBook(props) {
  const classes = useStyles();
  const [bookName, setBookName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState(null);
  const [price, setPrice] = React.useState(null);
  const [discountPrice, setdiscountPrice] = React.useState(null);
  const addBookAPI = () => {
    let obj = {
      bookName: bookName,
      author: author,
      description: description,
      quantity: Number(quantity),
      price: Number(price),
      discountPrice: Number(discountPrice),
    };
    console.log(obj);
    BookService.addBooks(obj)
      .then((res) => {
        console.log(res);
        props.history.push("/admin/admindashboard/allbooks");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={classes.grow}>
      <div className="outer-container-addbok">
        <div className="addbook-container">
          <h3>ADD BOOK</h3>
          <div className="form-box">
            <div>
              <div>
                <div className="field-header">Book Name</div>
                <TextField
                  fullWidth
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  onChange={(e) => setBookName(e.target.value)}
                />
              </div>
              <div>
                <div className="field-header">Author</div>
                <TextField
                  fullWidth
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </div>
              <div>
                <div className="field-header">Description</div>
                <TextField
                  fullWidth
                  id="outlined-size-small"
                  variant="outlined"
                  size="small"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="price-quantity-discount-container">
                <div className="price-quantity-discount-space">
                  <div className="field-header">Quantity</div>
                  <TextField
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="price-quantity-discount-space">
                  <div className="field-header">Price</div>
                  <TextField
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="price-quantity-discount-space">
                  <div className="field-header">Discount Price</div>
                  <TextField
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setdiscountPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="Addbook-button" onClick={addBookAPI}>
              ADD
            </div>
            <Link to="/admin/admindashboard/allbooks">
              <div className="Addbook-button">BACK</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
