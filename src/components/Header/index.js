import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./../../assets/logo.png";
import { signOutUserStart } from "../../redux/User/actions";
import { selectCartItemsCount } from "../../redux/Cart/selectors";
import "./styles.scss";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumberCartItems: selectCartItemsCount(state),
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalNumberCartItems } = useSelector(mapState);

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
          <ul>
            <li>
              <Link>Your Cart {totalNumberCartItems}</Link>
            </li>
            {currentUser && [
              <li>
                <Link to="/">Home</Link>
              </li>,
              <li>
                <Link to="/search">Search</Link>
              </li>,
              <li>
                <Link to="/dashboard">My Account</Link>
              </li>,
              <li>
                <span onClick={() => signOut()}>LogOut</span>
              </li>,
            ]}
            {!currentUser && [
              <li>
                <Link to="/registration">Registration</Link>
              </li>,
              <li>
                <Link to="/login">Login</Link>
              </li>,
            ]}
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
