import React, { useState } from 'react'
import { Form, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress.address) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <>
      <div className="breacrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-text product-more">
                <Link to="/"><i className="fa fa-home"></i> Home</Link>
                <Link to="/shop">Shop</Link>
                <span>Check Out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <div className="place-order">
              <CheckoutSteps step1 step2 step3 />
              <div className="order-total">
                <h2>Payment Method</h2>
                <div className="payment-check">
                  <Form onSubmit={submitHandler}>
                    <Form.Group>
                      <Form.Label as='legend'>Select Method</Form.Label>
                      <Col>
                        <Form.Check
                          type='radio'
                          label='Paytm'
                          id='Paytm'
                          name='paymentMethod'
                          value='Paytm'
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                        <Form.Check
                          type='radio'
                          label='BHIM UPI'
                          id='BHIM UPI'
                          name='paymentMethod'
                          value='BHIM UPI'
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                        <Form.Check
                          type='radio'
                          label='Cash on Delivery'
                          id='Cash On Delivery'
                          name='paymentMethod'
                          value='Cash On Delivery'
                          onChange={(e) => setPaymentMethod(e.target.value)}
                        ></Form.Check>
                      </Col>
                    </Form.Group>
                    <button type="submit" className="site-btn place-btn">
                      Continue
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  )
}

export default PaymentScreen
