import React from "react";
import Link from "./Link";
import brandLogo from "../assets/images/logo.svg";
import { useSelector, useDispatch } from "react-redux";
import { showCart } from "../actions";

const NavBar = (props) => {
  const itemCount = useSelector((state) => state.cart.itemCount);
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(showCart(true));
  };

  return (
    <nav className="nav-bar">
      <div className="nav-container">
        <div className="nav-left">
          <Link href="/">
            <img src={brandLogo} alt="" width={40} />
          </Link>
        </div>
        <div className="nav-right">
          <div className="navigation">
            <div className="right-content">
              <Link activeClassName="current" href="/" className="nav-link ">
                {props.home}
              </Link>

              <Link
                href="/order"
                activeClassName="current"
                className="nav-link"
              >
                {props.order}
              </Link>

              <Link href="/company" className="nav-link">
                {props.company}
              </Link>
              <Link href="/FAQ" className="nav-link">
                {props.faq}
              </Link>
              <Link className="nav-link">{props.contact}</Link>
            </div>
            <Link
              handleShowCart={handleShowCart}
              className="nav-link nav-cart-button"
            >
              <svg width="17px" height="17px" viewBox="0 0 17 17">
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path
                    d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                    fill="white"
                    fill-rule="nonzero"
                  />
                </g>
              </svg>
              <div className="count">{itemCount}</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
