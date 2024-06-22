import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';

import homeIcon from './house-fill.svg';
import myorder from './my_order.svg';
import foodcart from './foodcart.svg';
import logout from './logout.svg';

export default function Navbar({ props }) {

  const [cartView, setCartView] = useState(false)
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login")
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success  " >
        <div className="container-fluid">
          <Link className="navbar-brand fst-italic fs-1 fw-bold " to="/">GoFood</Link>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
            <ul className="navbar-nav me-auto mb-1">
              <li className="nav-item ">
                <Link className="nav-link active fs-5 btn-success btn-lg p-3 m-3 " aria-current="page" to="/">
                  <img src={homeIcon} alt="Home Icon" />
                  Home
                </Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item "  >
                  <Link className="nav-link active fs-5 btn-success  btn-lg p-3 m-3 " aria-current="page" to="/myorderData">
                    <img src={myorder} alt="my order Icon" />
                    My Orders
                  </Link>
                </li>

                : ""}

            </ul>

            {(!localStorage.getItem("authToken")) ?
              <div className="d-flex">
                <Link className="btn bg-white text-success btn-lg p-3 m-3 mx-1" to="/login">Login</Link>

                <Link className="btn bg-white text-success btn-lg p-3 m-3 mx-1" to="/createuser">Sign Up</Link>
              </div>
              :
              <div>
                <div className="btn bg-white text-success btn-lg p-3 m-3 mx-2" onClick={() => { setCartView(true) }}>
                  <img src={foodcart} alt="food cart Icon" />
                  My Cart {"  "}
                  {<Badge pill bg="danger">{data.length}</Badge>}
                </div>
                {cartView ? <Modal onClose={() => setCartView(false)}> <Cart /></Modal> : null}
                <div className="btn bg-white text-danger btn-lg p-3 m-3 mx-1" onClick={handleLogout}>
                  <img src={logout} alt="logout Icon" />
                  Logout
                </div>
              </div>
            }


          </div>
        </div>
      </nav>
    </div>
  )
}
