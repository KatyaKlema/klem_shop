import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import { signOutUserStart } from "../../redux/User/actions";
import "./styles.scss";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Klem Shop" />
          </Link>
        </div>
        <div className="callToActions">
          {currentUser && (
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>
              <li>
                <span onClick={() => signOut()}>LogOut</span>
              </li>
            </ul>
          )}
          {!currentUser && (
            <ul>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
