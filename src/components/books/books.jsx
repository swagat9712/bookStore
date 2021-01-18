import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import './books.scss';

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

export default function OutlinedCard() {
  const classes = useStyles();
  const [isToggleAddBag, setToggleAddBag] = React.useState(false);
  const [state, setState] = React.useState({
    sort: "",
  });

  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="total-book-container">
      <div className="book-header">
        <h2>Books</h2>
        <FormControl variant="outlined">
          <Select native value={state.aort}>
            <option value={10}>Sort by referance</option>
            <option value={20}>Price: Low to High</option>
            <option value={30}>Price: High to Low</option>
            <option value={40}>Newest Arrival</option>
          </Select>
        </FormControl>
      </div>
      <div className="card-books">
        <Card className={classes.root} variant="outlined">
          <div className="image-container"></div>
          <div className="description-container">
            <p className="book-name">Don't Make Me Think</p>
            <p className="author-name">by Steve King</p>
            <p className="price">Rs. 1500</p>
            <div className="parent-button"><div className={isToggleAddBag ? "addtobag-button-onclick" : "addtobag-button"} onClick={()=>setToggleAddBag(!isToggleAddBag)} >ADD TO BAG </div><div className={isToggleAddBag ? "wishlist-button-onclick" : "wishlist-button"}>WISHLIST</div></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
