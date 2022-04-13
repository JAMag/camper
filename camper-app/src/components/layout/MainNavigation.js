import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} className={classes.trunks_logo} width="100px" height="100px" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/login">Log In</Link>
          </li>

          <li>
            <Link to="/register">Register</Link>
          </li>

          <li>
            <Link to="/reset">Password Reset</Link>
          </li>

          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/delivery-status">Delivery Status</Link>
          </li>
          <li>
            <Link to="/all-camps">All Camps</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
          <li>
            <Link to="/new-message">New Message</Link>
          </li>
          <li>
            <Link to="/new-camper">New Camper</Link>
          </li>

          <li>
            <Link to="/all-campers">All Campers</Link>
          </li>

          <li>
            <Link to="/new-camp">New Camp</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
