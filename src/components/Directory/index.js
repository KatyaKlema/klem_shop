import React from "react";
import woman from "./../../assets/woman.jpg";
import men from "./../../assets/men.jpg";
import "./styles.scss";
import { Link } from "react-router-dom";

const Directory = (props) => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${woman})`,
          }}
        >
          <Link to="/search/womens">Shop Women</Link>
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${men})`,
          }}
        >
          <Link to="/search/mens">Shop Men</Link>
        </div>
      </div>
    </div>
  );
};

export default Directory;
