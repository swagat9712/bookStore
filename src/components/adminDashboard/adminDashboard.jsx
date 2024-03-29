import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Education from "../../asset/education.svg";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Adminform  from '../adminForm/adminForm';
import EditBook from '../editBook/editBook';
import Books from "../books/books";
import MoreIcon from "@material-ui/icons/MoreVert";
import Divider from '@material-ui/core/Divider';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Addbook from '../addBook/addBook';
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
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [loginOpenDialog, setLoginOpenDialog] = React.useState(false);
  const [isEditValues, setEditValues] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleLogOut = () =>{
    localStorage.removeItem("token");
    props.history.push('/admin');
  }
  const handleClickEdit = (value) =>{
    setEditValues(value);
    props.history.push("/admin/admindashboard/editBook");
    console.log(value)
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const openDialog = () =>{
    handleMenuClose();
    setLoginOpenDialog(true);
  }
  const closeDialog = () =>{
    setLoginOpenDialog(false);
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      className = "prfile"
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div className="login-menu" >
        <h5>Welcome</h5>
        <p>To access acount and manager orders</p>
        <div className="login-signin" onClick={openDialog}> <h5 className="login-title">LOGIN/SIGNIN</h5> </div>
        <Divider variant="middle" />
        <div className="optios-below-devider"><LocalMallOutlinedIcon fontSize="small"/><p className="p-below-devider">My Order</p></div>
        <div className="optios-below-devider"><FavoriteBorderOutlinedIcon  fontSize="small"/><p className="p-below-devider">Wishlist</p></div>
      </div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <ShoppingCartOutlinedIcon />
        <p>Shopping</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
      <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          onClick={handleLogOut}
        >
        <PowerSettingsNewIcon />
        <p>Log out</p>
        </IconButton>
      </MenuItem>
    </Menu>
  );

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
          <div className={classes.sectionDesktop}>
            <div className="profile">
            
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <div className="profile-text">Profile</div>
            </div>
               
            <div className="shopping-cart">
                
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <div className="cart-text">Cart</div>
            </div>
            <div className="shopping-cart">
                
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
                onClick={handleLogOut}
              >
                <PowerSettingsNewIcon />
              </IconButton>
              <div className="cart-text">Log Out</div>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Switch>
        <Route path="/admin/admindashboard/allbooks"><Adminform handleClickEdit={handleClickEdit}/></Route>
        <Route path="/admin/admindashboard/addbooks"><Addbook /></Route>
        <Route path="/admin/admindashboard/editBook"><EditBook content={isEditValues}/></Route>
        </Switch>
      <Login openDialog={loginOpenDialog} closeDialog={closeDialog} />
    </div>
    
  );
}

