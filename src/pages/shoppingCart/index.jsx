import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  delFromCart,
} from "../../actions/shoppingAction";
import { AxiosPost } from "../../api/axios";

import { addSponsor } from "../../actions/userActions";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigation } from "../../components/navigation";
import getSymbolFromCurrency from "currency-symbol-map";

function useQuery() {
  const { search } = useLocation();
  return useMemo(() => new URLSearchParams(search), [search]);
}

const ShoppingCart = () => {
  const state = useSelector((state) => state);

  const lenguage = window.localStorage.getItem("country") ?? "USA";
  const curren = window.localStorage.getItem("currency") ?? "USD";

  let convertir = 0;

  switch (lenguage) {
    case "USA":
      convertir = 1;
      break;

    case "USA (es)":
      convertir = 1;
      break;
    case "Guatemala":
      convertir = 7.8;

      break;
    case "Colombia":
      convertir = 4171.57;
      break;
    case "México":
      convertir = 17.28;

      break;
    case "Panama":
      convertir = 1;
      break;
    default:
      // eslint-disable-next-line no-unused-vars
      convertir = 1;

      break;
  }
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();

  let query = useQuery();

  const { cart } = state.shopping;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product.idProd));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product.idProd));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(delFromCart(product.id, true));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const mapCurrentFormat = (ammont) => {
    let currencyFomrat = localStorage.getItem("currency") ?? "USD";
    return getSymbolFromCurrency(currencyFomrat) + ammont;
  };

  const handleClick = async () => {
    var spon = true;
    while (spon) {
      let sponsor = query.get("sponsor");
      const param = {
        sponsor,
      };
      var response = await AxiosPost("Sponsor", param);

      response.data.mensaje === "yes"
        ? (spon = false)
        : alert("Sponsor No Existe!!, Intente de nuevo.");
    }
    dispatch(addSponsor(response));

    navigate("/confirmPayment");
  };

  useEffect(() => {
    const sposorName = state.user.sponsor;

    if (sposorName === null || sposorName === "") {
      setSearchParams({ sponsor: "BesanaMaster" });
    } else {
      setSearchParams({ sponsor: sposorName });
    }
  }, []);

  return (
    <>
      <Navigation style={{ backgroundColor: "#ffffff" }} />
      <div className="cart-container">
        <h2>Shopping Cart </h2>
        {cart.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cart &&
                cart.map((cartItem) => (
                  <div className="cart-item" key={cartItem.idProd}>
                    <div className="cart-product">
                      <img
                        src={`/img/portfolio/${cartItem.img}`}
                        alt={cartItem.name}
                      />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <button onClick={() => handleRemoveFromCart(cartItem)}>
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="cart-product-price">
                      {mapCurrentFormat(
                          (cartItem.price * convertir).toFixed(2)
                        )}
                    </div>
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(cartItem)}>
                        -
                      </button>
                      <div className="count">{cartItem.quantity}</div>
                      <button onClick={() => handleAddToCart(cartItem)}>
                        +
                      </button>
                    </div>
                    <div className="cart-product-total-price">
                      {mapCurrentFormat(
                        (
                          cartItem.price *
                          cartItem.quantity *
                          convertir
                        ).toFixed(2)
                      )}
                    </div>
                  </div>
                ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn" onClick={() => handleClearCart()}>
                Clear Cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>Subtotal</span>
                  <span className="amount">
                    {mapCurrentFormat(
                      cart
                        .reduce(
                          (partialSum, a) =>
                            partialSum + a.price * a.quantity * convertir,
                          0
                        )
                        .toFixed(2)
                    )}
                  </span>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button onClick={handleClick}>Check out</button>
                <div className="continue-shopping">
                  <Link to="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continue Shopping</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
