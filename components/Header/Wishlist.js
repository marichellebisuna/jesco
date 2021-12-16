import React from 'react';

const Wishlist = () => {
  return (
    <div id='offcanvas-wishlist' className='offcanvas offcanvas-wishlist'>
      <div className='inner'>
        <div className='head'>
          <span className='title'>Wishlist</span>
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
                  1 x <span className='amount'>$21.86</span>
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
                  1 x <span className='amount'>$13.28</span>
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
                  1 x <span className='amount'>$17.34</span>
                </span>
                <a href='#' className='remove'>
                  ×
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className='foot'>
          <div className='buttons'>
            <a
              href='wishlist.html'
              className='btn btn-dark btn-hover-primary mt-30px'
            >
              view wishlist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
