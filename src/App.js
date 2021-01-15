import Dashboard from './components/dashboard/dasshboard'
import ForgotPassword from './components/ForgotPassword/forgotPassword'
import AdminLogin from './components/adminLogin/adminLogin'
import AdminDashboard from './components/adminDashboard/adminDashboard'
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
       <Route exact path="/" component={AdminLogin} />
       <Route path="/forgotpassword" component={ForgotPassword}/>
       <Route path="/dashboard" component={Dashboard}/>
       <Route path="/admindashboard" component={AdminDashboard}/>
     </Switch>
     </div>
   </Router>
  );
}

export default App;
