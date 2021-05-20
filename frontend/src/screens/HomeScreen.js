import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import icon1 from '../assets/img/icon-1.png'
import icon2 from '../assets/img/icon-2.png'
import icon3 from '../assets/img/icon-3.png'
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'
import img5 from '../assets/img/5.png'
import img6 from '../assets/img/6.png'

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products, page, pages } = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      <ProductCarousel />
      <section className="latest-blog spad">
        <div className="container">
          <div className="benefit-items">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src={img1} alt="" width="40%" />
                  </div>
                  <div className="sb-text">
                    <h6>Electronics</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src={img2} alt="" width="40%" />
                  </div>
                  <div className="sb-text">
                    <h6>Building Materials</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src={img3} alt="" width="40%" />
                  </div>
                  <div className="sb-text">
                    <h6>Tiles</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src={img4} alt="" width="40%" />
                  </div>
                  <div className="sb-text">
                    <h6>Plumbing</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src={img5} alt="" width="40%" />
                  </div>
                  <div className="sb-text">
                    <h6>Sanitaryware</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src={img6} alt="" width="40%" />
                  </div>
                  <div className="sb-text">
                    <h6>Wall Finish</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="nav-item">
          <div className="nav-depart">
            <div className="depart-btn">
              <i className="ti-menu"></i>
              <span>All departments</span>
              <ul className="depart-hover">
                <li className="active"><Link to="/">Building Materials</Link></li>
                <li><Link to="/">TMT Steel Bars</Link></li>
                <li><Link to="/">Bricks</Link></li>
                <li><Link to="/">Aggregates</Link></li>
                <li><Link to="/">Water Proofing</Link></li>
                <li><Link to="/">Wall Finish</Link></li>
              </ul>
            </div>
          </div>
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
            </ul>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title">
            <h2>Latest Products</h2>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <div className="container">
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </div>
      )}

      <section className="latest-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Profits with Constrosoluiton</h2>
              </div>
            </div>
          </div>
          <div className="benefit-items">
            <div className="row">
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="sb-text">
                    <h6>Free Shipping</h6>
                    <p>For all order over ₹99</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="sb-text">
                    <h6>Delivery On Time</h6>
                    <p>If good have prolems</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="single-benefit">
                  <div className="sb-icon">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="sb-text">
                    <h6>Secure Payment</h6>
                    <p>100% secure payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeScreen
