import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import "./adminLogin.scss";
const userService = require('../../services/bookstore_userservice');
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

export default function AdminLogin(props) {
  const classes = useStyles();
  const [loginemail, setLoginEmail] = React.useState("");
  const [loginPasswordErr, setLoginPasswordErr] = React.useState("");
  const [loginEmailErr, setLoginEmailErr] = React.useState("");
  const [isvalidLoginPassword, seterrLoginPasswordMessage] = React.useState(
    false
  );
  const [isvalidLoginEmail, seterrorLoginEmailMessage] = React.useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const validateLoginEmail = (value) => {
    const read = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (read.exec(value)) {
      setLoginEmailErr("");
      seterrorLoginEmailMessage(false);
    } else {
      setLoginEmailErr("Invalid input");
      seterrorLoginEmailMessage(true);
    }
  };
  const validateLoginPassword = (value) => {
    const read = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (read.exec(value)) {
      setLoginPasswordErr("");
      seterrLoginPasswordMessage(false);
    } else {
      setLoginPasswordErr("Invalid input");
      seterrLoginPasswordMessage(true);
    }
  };
  let isValid;
  const adminLoginValidation = () => {
    let isValid = formValidation();
    if (isValid || true) {
      console.log("login:");
      let obj = {
        email: loginemail,
        password: values.password,
      };
      userService
        .adminLogin(obj)
        .then((res) => {
          console.log(res)
          const obj = res.data.result;
          localStorage.setItem("token", obj.accessToken);
          props.history.push("/admin/admindashboard/allbooks");
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const formValidation = () => {
    isValid = true;
    if (loginemail.trim().length === 0) {
      setLoginEmailErr("This is required field");
      seterrorLoginEmailMessage(true);
      isValid = false;
    }
    if (values.password.trim().length === 0) {
      setLoginPasswordErr("This is required field");
      seterrLoginPasswordMessage(true);
      isValid = false;
    }
    return isValid;
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.grow}>
      <div className="forgotpassword-container">
        <h3>Admin Login</h3>
        <div className="form-box">
          <div className="content-box-adminlogin">
            <div className="text-field-forgot-email">
              <div className="field-header">Email id</div>
              <TextField
                error={isvalidLoginEmail}
                helperText={loginEmailErr}
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onBlur={(e) => {
                  validateLoginEmail(e.target.value);
                }}
                onChange={(e) => {
                  setLoginEmail(e.target.value);
                }}
              />
            </div>
            <div className="login-password-field">
              <div className="field-header">Password</div>
              <FormControl variant="outlined">
                <OutlinedInput
                  id="outlined-adornment-password"
                  error={isvalidLoginPassword}
                //   helperText={loginPasswordErr}
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={(e) => {
                    validateLoginPassword(e.target.value);
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="forgotpassword-button" onClick={adminLoginValidation}>
              Login
            </div>
          </div>
          <div className="adminlogin"></div>
        </div>
      </div>
    </div>
  );
}
