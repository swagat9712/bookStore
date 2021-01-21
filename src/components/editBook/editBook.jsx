import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import "./editBook.scss";
const BookService = require("../../services/adminproduct_service");
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

export default function AdminEditBook(props) {
  const classes = useStyles();
  const [bookName, setBookName] = React.useState(props.content.bookName);
  const [author, setAuthor] = React.useState(props.content.author);
  const [description, setDescription] = React.useState(
    props.content.description
  );
  const [quantity, setQuantity] = React.useState(props.content.quantity);
  const [price, setPrice] = React.useState(props.content.price);
  const [discountPrice, setdiscountPrice] = React.useState(
    props.content.discountPrice
  );

  const editBookAPI = () => {
    let obj = {
      bookName: bookName,
      author: author,
      description: description,
      quantity: Number(quantity),
      price: Number(price),
      discountPrice: Number(discountPrice),
    };
    BookService.editBooks(obj, props.content._id)
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
          <h3>EDIT BOOK</h3>
          <div className="form-box">
            <div>
              <div>
                <div className="field-header">Book Name</div>
                <TextField
                  fullWidth
                  value={bookName}
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
                  value={author}
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
                  value={description}
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
                    value={quantity}
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <div className="price-quantity-discount-space">
                  <div className="field-header">Price</div>
                  <TextField
                    value={price}
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="price-quantity-discount-space">
                  <div className="field-header">Discount Price</div>
                  <TextField
                    value={discountPrice}
                    id="outlined-size-small"
                    variant="outlined"
                    size="small"
                    onChange={(e) => setdiscountPrice(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="Addbook-button" onClick={editBookAPI}>
              EDIT
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
