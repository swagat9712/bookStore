import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Education from "../../asset/education.svg";
import SearchIcon from "@material-ui/icons/Search";
import Books from "../books/books";
import Login from '../Login/login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./adminDashboard.scss";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  inputRoot: {
    color: "black",
  },
}));

export default function AdminDashboard() {
  const classes = useStyles();
 
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className="headerName-logo">
            <div className="logo">
              {" "}
              <img src={Education} />
            </div>
            <div className="book-store-name">
              <Typography className={classes.title} variant="h6" noWrap>
                BookStore
              </Typography>
            </div>
          </div>

          <div className="input-search">
            <div className="search-icon">
              <SearchIcon />
            </div>
            <InputBase
              className={(classes.input, "searchbar")}
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.grow} />
   
           
            <div className="shopping-cart">
                <div className="cart-text">Cart</div>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            </div>
          
        </Toolbar>
      </AppBar>

        <Books/>
   
    </div>
  );
}
