import React from "react";
import "./styles.css";
import { Cart } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
function Jumbotron({ open, setOpen }) {
  const store = useSelector((data) => data);
  return (
    <div className="p-5 text-center bg-light">
      <h1 className="mb-3">Personal Collection</h1>
      <h4 className="mb-3">Create A Collection of Your Personal Favorites!</h4>
      <a
        className="btn btn-primary"
        onClick={() => setOpen(true)}
        role="button"
      >
        <Cart width="40" height="40" />
        <span className="cart-checkout">
          {store && store.collection.length}
        </span>
      </a>
    </div>
  );
}

export default Jumbotron;
