import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "./../../forms/Button";
import { addProduct } from "../../../redux/Cart/actions";

const Product = (product) => {
  const { documentID, productThumbnail, productName, productPrice } = product;
  const dispatch = useDispatch();
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === "undefined"
  )
    return null;

  const configAddToCartBtn = {
    type: "button",
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
  };

  return (
    <div>
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <img src={productThumbnail} alt={productName} />
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/product/${documentID}`}>{productName}</Link>
            </span>
          </li>

          <li>
            <span className="price">${productPrice}</span>
          </li>

          <li>
            <div className="addToCart">
              <Button
                {...configAddToCartBtn}
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
