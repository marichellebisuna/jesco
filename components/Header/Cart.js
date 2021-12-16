import React from 'react';

const Cart = () => {
  return (
    <div id='offcanvas-cart' className='offcanvas offcanvas-cart'>
      <div className='inner'>
        <div className='head'>
          <span className='title'>Cart</span>
          <button className='offcanvas-close'>×</button>
        </div>
        <div className='body customScroll'>
          <ul className='minicart-product-list'>
            <li>
              <a href='single-product.html' className='image'>
                <img
                  src='assets/images/product-image/1.jpg'
                  alt='Cart product Image'
                />
              </a>
              <div className='content'>
                <a href='single-product.html' className='title'>
                  Women's Elizabeth Coat
                </a>
                <span className='quantity-price'>
                  1 x <span className='amount'>$18.86</span>
                </span>
                <a href='#' className='remove'>
                  ×
                </a>
              </div>
            </li>
            <li>
              <a href='single-product.html' className='image'>
                <img
                  src='assets/images/product-image/2.jpg'
                  alt='Cart product Image'
                />
              </a>
              <div className='content'>
                <a href='single-product.html' className='title'>
                  Long sleeve knee length
                </a>
                <span className='quantity-price'>
                  1 x <span className='amount'>$43.28</span>
                </span>
                <a href='#' className='remove'>
                  ×
                </a>
              </div>
            </li>
            <li>
              <a href='single-product.html' className='image'>
                <img
                  src='assets/images/product-image/3.jpg'
                  alt='Cart product Image'
                />
              </a>
              <div className='content'>
                <a href='single-product.html' className='title'>
                  Cool Man Wearing Leather
                </a>
                <span className='quantity-price'>
                  1 x <span className='amount'>$37.34</span>
                </span>
                <a href='#' className='remove'>
                  ×
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className='foot'>
          <div className='buttons mt-30px'>
            <a
              href='cart.html'
              className='btn btn-dark btn-hover-primary mb-30px'
            >
              view cart
            </a>
            <a
              href='checkout.html'
              className='btn btn-outline-dark current-btn'
            >
              checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
