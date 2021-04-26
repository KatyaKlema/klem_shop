import React from "react";
import ProductResults from "./../../components/ProductResults";

const Search = (props) => {
  return (
    <div className="searchPage">
      <ProductResults {...props} />
    </div>
  );
};

export default Search;
