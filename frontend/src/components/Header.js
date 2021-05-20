import React from 'react'
import { Link, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import logo from '../assets/img/logo.png'
import SearchBox from './SearchBox'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="ht-left">
            <div className="mail-service">
              <a href="mailto:constrosolution26@gmail.com"><i className=" fa fa-envelope"></i>constrosolution26@gmail.com</a>
              <a href="tel:+918002862026"><i className=" fa fa-phone"></i>+918002862026</a>
            </div>
          </div>
          <div className="ht-right">
            {userInfo ? (
              <Link to="/" onClick={logoutHandler} className="login-panel"><i className="fa fa-sign-out"></i>Sign Out</Link>
            ) : (
              <Link to="/login" className="login-panel"><i className="fa fa-sign-in"></i>Sign In</Link>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="inner-header">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <Route render={({ history }) => <SearchBox history={history} />} />
            </div>
            <div className="col-lg-4 text-right col-md-4">
              <ul className="nav-right">
                <li className="cart-icon">
                  {userInfo ? (
                    <Link to="/profile">
                      <p><i className="fa fa-user"></i>{' '}{userInfo.name}</p>
                    </Link>
                  ) : (
                    <Link to="/profile">
                      <p><i className="fa fa-user"></i> Account</p>
                    </Link>
                  )}
                </li>
                <li className="cart-icon">
                  <Link to="/cart">
                    <p><i className="fa fa-shopping-cart"></i> Cart</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-item">
        <div className="container">
          <nav className="nav-menu">
            <ul>
              <li><Link to="/">Waterproofing</Link>
                <ul className="dropdown">
                  <li><Link to="/">Dr. Fixit</Link></li>
                </ul>
              </li>
              <li><Link to="/">Wall Finish</Link>
                <ul className="dropdown">
                  <li><Link to="/">Paints</Link></li>
                  <li><Link to="/">wall putty</Link></li>
                  <li><Link to="/">white cement</Link></li>
                </ul>
              </li>
              <li><Link to="/">Building Materials</Link>
                <ul className="dropdown">
                  <li><Link to="/">cement</Link></li>
                  <li><Link to="/">tmt steele bars</Link></li>
                  <li><Link to="/">bricks</Link></li>
                </ul>
              </li>
              <li><Link to="/">Aggregates</Link>
                <ul className="dropdown">
                  <li><Link to="/">Tiles</Link></li>
                  <li><Link to="/">Marble</Link></li>
                  <li><Link to="/">Sanitaryware</Link></li>
                  <li><Link to="/">Plumbing</Link></li>
                </ul>
              </li>
              {userInfo && userInfo.isAdmin && (
                <li><Link to="/">Admin Access</Link>
                  <ul className="dropdown">
                    <li><Link to="/admin/userlist">Users</Link></li>
                    <li><Link to="/admin/productlist">Products</Link></li>
                    <li><Link to="/admin/orderlist">Orders</Link></li>
                  </ul>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header >
  )
}

export default Header
