import Dashboard from './components/dashboard/dasshboard'
import ForgotPassword from './components/ForgotPassword/forgotPassword'
import AdminLogin from './components/adminLogin/adminLogin'
import AdminDashboard from './components/adminDashboard/adminDashboard'
import {PrivateRoute} from './privaterout';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
   <Router>
     <div><Switch>
       {/* <Route exact path="/admin" component={AdminLogin} /> */}
       <Route path="/forgotpassword" component={ForgotPassword}/>
       <Route exact path="/dashboard/allbooks" component={Dashboard}/>
       <PrivateRoute path="/admin/admindashboard" component={AdminDashboard}/>
     </Switch>
     </div>
   </Router>
  );
}

export default App;
