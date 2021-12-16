import React from 'react';
import Cart from './Header/Cart';
import Menu from './Header/Menu';
import Wishlist from './Header/Wishlist';

const Header = () => {
  return (
    <>
      <header>
        <div className='header-main sticky-nav '>
          <div className='container position-relative'>
            <div className='row'>
              <div className='col-auto align-self-center'>
                <div className='header-logo'>
                  <a href='index.html'>
                    <img src='assets/images/logo/logo.png' alt='Site Logo' />
                  </a>
                </div>
              </div>
              <div className='col align-self-center d-none d-lg-block'>
                <div className='main-menu'>
                  <ul>
                    <li className='dropdown'>
                      <a href='#'>
                        Home <i className='pe-7s-angle-down'></i>
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='index.html'>Home 1</a>
                        </li>
                        <li>
                          <a href='index-2.html'>Home 2</a>
                        </li>
                      </ul>
                    </li>
                    <li className='dropdown position-static'>
                      <a href='#'>
                        Shop <i className='pe-7s-angle-down'></i>
                      </a>
                      <ul className='mega-menu d-block'>
                        <li className='d-flex'>
                          <ul className='d-block'>
                            <li className='title'>
                              <a href='#'>Shop Page</a>
                            </li>
                            <li>
                              <a href='shop-3-column.html'>Shop 3 Column</a>
                            </li>
                            <li>
                              <a href='shop-4-column.html'>Shop 4 Column</a>
                            </li>
                            <li>
                              <a href='shop-left-sidebar.html'>
                                Shop Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href='shop-right-sidebar.html'>
                                Shop Right Sidebar
                              </a>
                            </li>
                            <li>
                              <a href='shop-list-left-sidebar.html'>
                                Shop List Left Sidebar
                              </a>
                            </li>
                            <li>
                              <a href='shop-list-right-sidebar.html'>
                                Shop List Right Sidebar
                              </a>
                            </li>
                          </ul>
                          <ul className='d-block'>
                            <li className='title'>
                              <a href='#'>product Details Page</a>
                            </li>
                            <li>
                              <a href='single-product.html'>Product Single</a>
                            </li>
                            <li>
                              <a href='single-product-variable.html'>
                                Product Variable
                              </a>
                            </li>
                            <li>
                              <a href='single-product-affiliate.html'>
                                Product Affiliate
                              </a>
                            </li>
                            <li>
                              <a href='single-product-group.html'>
                                Product Group
                              </a>
                            </li>
                            <li>
                              <a href='single-product-tabstyle-2.html'>
                                Product Tab 2
                              </a>
                            </li>
                            <li>
                              <a href='single-product-tabstyle-3.html'>
                                Product Tab 3
                              </a>
                            </li>
                          </ul>
                          <ul className='d-block'>
                            <li className='title'>
                              <a href='#'>Single Product Page</a>
                            </li>
                            <li>
                              <a href='single-product-slider.html'>
                                Product Slider
                              </a>
                            </li>
                            <li>
                              <a href='single-product-gallery-left.html'>
                                Product Gallery Left
                              </a>
                            </li>
                            <li>
                              <a href='single-product-gallery-right.html'>
                                Product Gallery Right
                              </a>
                            </li>
                            <li>
                              <a href='single-product-sticky-left.html'>
                                Product Sticky Left
                              </a>
                            </li>
                            <li>
                              <a href='single-product-sticky-right.html'>
                                Product Sticky Right
                              </a>
                            </li>
                          </ul>
                          <ul className='d-block'>
                            <li className='title'>
                              <a href='#'>Other Shop Pages</a>
                            </li>
                            <li>
                              <a href='cart.html'>Cart Page</a>
                            </li>
                            <li>
                              <a href='checkout.html'>Checkout Page</a>
                            </li>
                            <li>
                              <a href='compare.html'>Compare Page</a>
                            </li>
                            <li>
                              <a href='wishlist.html'>Wishlist Page</a>
                            </li>
                            <li>
                              <a href='my-account.html'>Account Page</a>
                            </li>
                            <li>
                              <a href='login.html'>Login & Register Page</a>
                            </li>
                            <li>
                              <a href='empty-cart.html'>Empty Cart Page</a>
                            </li>
                          </ul>
                          <ul className='d-block'>
                            <li className='title'>
                              <a href='#'>Pages</a>
                            </li>
                            <li>
                              <a href='404.html'>404 Page</a>
                            </li>
                            <li>
                              <a href='privacy-policy.html'>Privacy Policy</a>
                            </li>
                            <li>
                              <a href='faq.html'>Faq Page</a>
                            </li>
                            <li>
                              <a href='coming-soon.html'>Coming Soon Page</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <ul className='menu-banner w-100'>
                            <li>
                              <a className='p-0' href='shop-left-sidebar.html'>
                                <img
                                  className='img-responsive w-100'
                                  src='assets/images/banner/7.jpg'
                                  alt=''
                                />
                              </a>
                            </li>
                            <li>
                              <a className='p-0' href='shop-left-sidebar.html'>
                                <img
                                  className='img-responsive w-100'
                                  src='assets/images/banner/8.jpg'
                                  alt=''
                                />
                              </a>
                            </li>
                            <li>
                              <a className='p-0' href='shop-left-sidebar.html'>
                                <img
                                  className='img-responsive w-100'
                                  src='assets/images/banner/9.jpg'
                                  alt=''
                                />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className='dropdown '>
                      <a href='#'>
                        Blogs <i className='pe-7s-angle-down'></i>
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='blog-grid.html'>Blog Grid Page</a>
                        </li>
                        <li>
                          <a href='blog-grid-left-sidebar.html'>
                            Grid Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='blog-grid-right-sidebar.html'>
                            Grid Right Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='blog-single.html'>Blog Single Page</a>
                        </li>
                        <li>
                          <a href='blog-single-left-sidebar.html'>
                            Single Left Sidebar
                          </a>
                        </li>
                        <li>
                          <a href='blog-single-right-sidebar.html'>
                            Single Right Sidbar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='about.html'>About us</a>
                    </li>
                    <li>
                      <a href='contact.html'>Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Header Action Start --> */}
              <div className='col col-lg-auto align-self-center pl-0'>
                <div className='header-actions'>
                  <a
                    href='login.html'
                    className='header-action-btn login-btn'
                    data-bs-toggle='modal'
                    data-bs-target='#loginActive'
                  >
                    Sign In
                  </a>
                  {/* <!-- Single Wedge Start --> */}
                  <a
                    href='#'
                    className='header-action-btn'
                    data-bs-toggle='modal'
                    data-bs-target='#searchActive'
                  >
                    <i className='pe-7s-search'></i>
                  </a>
                  {/* <!-- Single Wedge End --> */}
                  {/* <!-- Single Wedge Start --> */}
                  <a
                    href='#offcanvas-wishlist'
                    className='header-action-btn offcanvas-toggle'
                  >
                    <i className='pe-7s-like'></i>
                  </a>
                  {/* <!-- Single Wedge End --> */}
                  <a
                    href='#offcanvas-cart'
                    className='header-action-btn header-action-btn-cart offcanvas-toggle pr-0'
                  >
                    <i className='pe-7s-shopbag'></i>
                    <span className='header-action-num'>01</span>
                    {/* <!-- <span className="cart-amount">€30.00</span> --> */}
                  </a>
                  <a
                    href='#offcanvas-mobile-menu'
                    className='header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none'
                  >
                    <i className='pe-7s-menu'></i>
                  </a>
                </div>
                {/* <!-- Header Action End --> */}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className='offcanvas-overlay'></div>
      <Wishlist />
      <Cart />
      <Menu />
    </>
  );
};

export default Header;
{
  /*  */
}
