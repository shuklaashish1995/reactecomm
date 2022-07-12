import React from "react";
import "../assets/css/style.css";
import "../assets/css/bootstrap.css";
import "../assets/css/demo1.css";
const Home = () => {
  return (
    <>
      <header id="home">
        <div className="top-header">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-auto d-xl-block d-none">
                <ul className="border-list">
                  <li>Voxo ecommerce always free delivery</li>
                  <li>New Customer Extra 50% Off</li>
                </ul>
              </div>
              <div className="col-auto d-sm-block d-none">
                <p className="font-dark-30 mb-0">
                  Offer Coupon Code : <span className="fw-bold">DEF4526</span>
                </p>
              </div>
              <div className="col-auto">
                <ul className="border-list">
                  <li>
                    <div className="dropdown top-header-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="javascript:void(0)"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                      >
                        <span>Login & Register</span>
                        <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li className="w-100">
                          <a className="dropdown-item" href="log-in.html">
                            Log In
                          </a>
                        </li>
                        <li className="w-100">
                          <a className="dropdown-item" href="sign-up.html">
                            Ragistore
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="dropdown top-header-dropdown">
                      <a
                        className="dropdown-toggle"
                        href="javascript:void(0)"
                        role="button"
                        id="dropdownMenuLink1"
                        data-bs-toggle="dropdown"
                      >
                        <span>
                          <b>$</b> Dollar
                        </span>
                        <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li className="w-100">
                          <a
                            className="dropdown-item"
                            id="dollar"
                            href="javascript:void(0)"
                          >
                            $ Dollar
                          </a>
                        </li>

                        <li className="w-100">
                          <a
                            className="dropdown-item"
                            id="rupee"
                            href="javascript:void(0)"
                          >
                            ₹ Rupee
                          </a>
                        </li>

                        <li className="w-100">
                          <a
                            className="dropdown-item"
                            id="euro"
                            href="javascript:void(0)"
                          >
                            € Euro
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>

                  <li>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="javascript:void(0)"
                        role="button"
                        id="dropdownMenuLink2"
                        data-bs-toggle="dropdown"
                      >
                        <span>Language</span>
                        <i className="fas fa-chevron-down"></i>
                      </a>
                      <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li className="w-100">
                          <a
                            className="dropdown-item"
                            id="english"
                            href="javascript:void(0)"
                          >
                            English
                          </a>
                        </li>

                        <li className="w-100">
                          <a
                            className="dropdown-item"
                            id="french"
                            href="javascript:void(0)"
                          >
                            French
                          </a>
                        </li>

                        <li className="w-100">
                          <a
                            className="dropdown-item"
                            id="arabic"
                            href="javascript:void(0)"
                          >
                            Arabic
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main-header navbar-searchbar">
          <div className="container-fluid-lg">
            <div className="row">
              <div className="col-lg-12">
                <div className="main-menu">
                  <div className="menu-left">
                    <div className="brand-logo">
                      <img
                        src={require("../assets/images/logo.png")}
                        className="logo"
                        alt="logo"
                      />
                    </div>
                    <div className="category-menu">
                      <button
                        type="button"
                        className="btn btn-solid-default toggle-category d-sm-block d-none"
                      >
                        All categories
                        <i className="fas fa-chevron-down d-xl-inline-block d-none"></i>
                      </button>
                      <div className="category-dropdown">
                        <div className="close-btn d-xl-none">
                          Category List
                          <span className="back-category">
                            <i className="fa fa-angle-left"></i>
                          </span>
                        </div>
                        <ul>
                          <li className="submenu">
                            <a href="javascript:void(0)">watches</a>
                            <ul className="category-mega-menu">
                              <li>
                                <div className="row">
                                  <div className="col-xl-3">
                                    <div className="category-childmenu">
                                      <div className="title-category">
                                        <h6>Watch Brands</h6>
                                      </div>
                                      <ul>
                                        <li>
                                          <a href="javascript:void(0)">Coros</a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">Titan</a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Citizen
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">Casio</a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Movado
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Tissot
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-3">
                                    <div className="category-childmenu">
                                      <div className="title-category">
                                        <h6>Watch Display</h6>
                                      </div>
                                      <ul>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Analog
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Digital
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Hybrid
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Tactile
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Touchscreen
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-3">
                                    <div className="category-childmenu">
                                      <div className="title-category">
                                        <h6>Watch Style</h6>
                                      </div>
                                      <ul>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Casual
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">Dress</a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Fashion
                                          </a>
                                        </li>
                                        <li>
                                          <a href="javascript:void(0)">
                                            Luxury
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-3">
                                    <div className="category-banner">
                                      <img
                                        src={require("../assets/images/electronics/banner/4.jpg")}
                                        className="img-fluid lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">footwear</a>
                          </li>

                          <li className="submenu">
                            <a href="javascript:void(0)">clothing</a>
                            <ul className="category-mega-menu">
                              <li>
                                <div className="row">
                                  <div className="col-xl-3">
                                    <div className="category-childmenu">
                                      <div className="title-category">
                                        <h6>Women's fashion</h6>
                                      </div>
                                      <ul>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            Dress
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            Skirts
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            Western wear
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            Etahnic wear
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            Sports wear
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-3">
                                    <div className="category-childmenu">
                                      <div className="title-category">
                                        <h6>Men's fashion</h6>
                                      </div>
                                      <ul>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            Sports wear
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            Etahnic wear
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            Western wear
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-3">
                                    <div className="category-childmenu">
                                      <div className="title-category">
                                        <h6>Accesories</h6>
                                      </div>
                                      <ul>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            earrings
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            fashion jewellery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            ties
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            caps and hats
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            cufflinks
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            precious jewellery
                                          </a>
                                        </li>
                                        <li>
                                          <a href="shop-left-sidebar.html">
                                            necklaces
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="col-xl-3">
                                    <div className="category-banner">
                                      <img
                                        src={require("../assets/images/banner/1.jpg")}
                                        className="img-fluid lazyload"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Accessories</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Home & decor</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Bags</a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">Kitchan</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <nav>
                    <div className="main-navbar">
                      <div id="mainnav">
                        <div className="toggle-nav me-3">
                          <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu">
                          <li className="back-btn d-xl-none">
                            <div className="close-btn">
                              Menu
                              <span className="mobile-back">
                                <i className="fa fa-angle-left"></i>
                              </span>
                            </div>
                          </li>
                          <li className="mega-menu dropdown home-menu">
                            <a
                              href="javascript:void(0)"
                              className="nav-link menu-title"
                            >
                              home
                            </a>
                            <div className="mega-menu-container menu-content">
                              <div className="container-fluid">
                                <div className="row">
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="opensubmegamenu">
                                        <ul>
                                          <li>
                                            <a
                                              href="index-2.html"
                                              className="megamenu-image"
                                            >
                                              <img
                                                src={require("../assets/images/demo-image/fashion.jpg")}
                                                className="img-fluid lazyload"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>

                                      <div className="megamenu-image-title pb-0">
                                        <h5 className="mb-0">Fashion Demo</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="opensubmegamenu">
                                        <ul>
                                          <li>
                                            <a
                                              href="flower-demo.html"
                                              className="megamenu-image"
                                            >
                                              <img
                                                src={require("../assets/images/demo-image/flower.jpg")}
                                                className="img-fluid lazyload"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="megamenu-image-title pb-0">
                                        <h5 className="mb-0">Flowers Demo</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="opensubmegamenu">
                                        <ul>
                                          <li>
                                            <a
                                              href="furniture-demo.html"
                                              className="megamenu-image"
                                            >
                                              <img
                                                src={require("../assets/images/demo-image/furniture.jpg")}
                                                className="img-fluid lazyload"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="megamenu-image-title pb-0">
                                        <h5 className="mb-0">Furniture Demo</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="opensubmegamenu">
                                        <ul>
                                          <li>
                                            <a
                                              href="electronic-demo.html"
                                              className="megamenu-image"
                                            >
                                              <img
                                                src={require("../assets/images/demo-image/electonic.jpg")}
                                                className="img-fluid lazyload"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="megamenu-image-title pb-0">
                                        <h5 className="mb-0">
                                          Electronic Demo
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="opensubmegamenu">
                                        <ul>
                                          <li>
                                            <a
                                              href="shoes-demo.html"
                                              className="megamenu-image"
                                            >
                                              <img
                                                src={require("../assets/images/demo-image/shoes.jpg")}
                                                className="img-fluid lazyload"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="megamenu-image-title pb-0">
                                        <h5 className="mb-0">Shoes Demo</h5>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="opensubmegamenu">
                                        <ul>
                                          <li>
                                            <a
                                              href="vegetables-demo.html"
                                              className="megamenu-image"
                                            >
                                              <img
                                                src={require("../assets/images/demo-image/vagetables.jpg")}
                                                className="img-fluid lazyload"
                                                alt=""
                                              />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <div className="megamenu-image-title pb-0">
                                        <h5 className="mb-0">
                                          Vegetables Demo
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dropdown">
                            <a
                              href="javascript:void(0)"
                              className="nav-link menu-title"
                            >
                              shop
                            </a>
                            <ul className="nav-submenu menu-content">
                              <li>
                                <a href="shop-canvas-filter.html">
                                  Shop Canvas Filter
                                </a>
                              </li>
                              <li>
                                <a href="shop-category-slider.html">
                                  Shop Category Filter
                                </a>
                              </li>
                              <li>
                                <a href="shop-filter-hide.html">
                                  Shop Filter Hide
                                </a>
                              </li>
                              <li>
                                <a href="shop-left-sidebar.html">
                                  Shop Left Sidebar
                                  <span>Trending</span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-list-infinite.html">
                                  Shop List Infinite
                                </a>
                              </li>
                              <li>
                                <a href="shop-list.html">Shop List</a>
                              </li>
                              <li>
                                <a href="shop-no-sidebar.html">
                                  Shop No Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Shop Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-top-filter.html">
                                  Shop Top Filter
                                </a>
                              </li>
                              <li>
                                <a href="shop-with-category.html">
                                  Shop With Category{" "}
                                  <span className="tren-budge">New</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              href="javascript:void(0)"
                              className="nav-link menu-title"
                            >
                              product
                            </a>
                            <ul className="nav-submenu menu-content">
                              <li>
                                <a href="product-4-image.html">
                                  Product 4 Images
                                </a>
                              </li>
                              <li>
                                <a href="product-360-view.html">
                                  Product 360 View
                                </a>
                              </li>
                              <li>
                                <a href="product-bundle.html">Product Bundle</a>
                              </li>
                              <li>
                                <a href="product-left-sidebar.html">
                                  Product Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="product-left-thumbnail.html">
                                  Product Left thumbnail
                                </a>
                              </li>
                              <li>
                                <a href="product-no-sidebar.html">
                                  Product No Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="product-right-sidebar.html">
                                  Product Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="product-right-thumbnail.html">
                                  Product Right thumbnail
                                </a>
                              </li>
                              <li>
                                <a href="product-sticky.html">Product Sticky</a>
                              </li>
                              <li>
                                <a href="product-video-thumbnail.html">
                                  Product Video Thumbnail
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu dropdown ratio_40">
                            <a
                              href="javascript:void(0)"
                              className="nav-link menu-title"
                            >
                              <div className="gradient-title">Voxo plus</div>
                            </a>
                            <div className="mega-menu-container poster-bg-image menu-content">
                              <div className="container-fluid">
                                <div className="row row-cols-5">
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="submenu-title">
                                        <h5>Email Template</h5>
                                      </div>
                                      <div className="submenu-content opensubmegamenu">
                                        <ul className="list">
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/abandonment-email.html">
                                              Abandonment Email
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/black-friday.html">
                                              Black Fridday
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/email-template-1.html">
                                              Email Template 1
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/email-template-2.html">
                                              Email Template 2
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/offer.html">
                                              Offer Template
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/order-success-1.html">
                                              Order Success 1
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/order-success-2.html">
                                              Order Success 2
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="submenu-title">
                                        <h5>Email Template</h5>
                                      </div>
                                      <div className="submenu-content opensubmegamenu">
                                        <ul className="list">
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/product-review.html">
                                              Product Review
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/reset-password.html">
                                              Reset Password
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/email-template/welcome.html">
                                              Welcome Template
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="link-section">
                                      <div className="submenu-title">
                                        <h5>Invoice Template</h5>
                                      </div>
                                      <div className="submenu-content opensubmegamenu">
                                        <ul className="list">
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/invoice/invoice-1.html">
                                              Invoice 1 Template
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/invoice/invoice-2.html">
                                              Invoice 2 Template
                                            </a>
                                          </li>
                                          <li>
                                            <a href="https://themes.pixelstrap.com/voxo/invoice/invoice-3.html">
                                              Invoice 3 Template
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="submenu-title">
                                        <h5>Portfolio Page</h5>
                                      </div>
                                      <div className="submenu-content opensubmegamenu">
                                        <ul className="list">
                                          <li>
                                            <a href="portfolio-2-grid.html">
                                              Portfolio 2 Grid
                                            </a>
                                          </li>
                                          <li>
                                            <a href="portfolio-2-masonary.html">
                                              Portfolio 2 Masonary
                                            </a>
                                          </li>
                                          <li>
                                            <a href="portfolio-3-grid.html">
                                              Portfolio 3 Grid
                                            </a>
                                          </li>
                                          <li>
                                            <a href="portfolio-3-masonary.html">
                                              Portfolio 3 Masonary
                                            </a>
                                          </li>
                                          <li>
                                            <a href="portfolio-4-grid.html">
                                              Portfolio 4 Grid
                                            </a>
                                          </li>
                                          <li>
                                            <a href="portfolio-4-masonary.html">
                                              Portfolio 4 Masonary
                                            </a>
                                          </li>
                                          <li>
                                            <a href="portfolio-no-space.html">
                                              Portfolio No Space
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="submenu-title">
                                        <h5>Element Page</h5>
                                      </div>
                                      <div className="submenu-content opensubmegamenu">
                                        <ul className="list">
                                          <li>
                                            <a href="element-button.html">
                                              Element Button
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-category.html">
                                              Element Category
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-collection-banner.html">
                                              Element Collection Banner
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-deal-banner.html">
                                              Element Deal Banner
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-header.html">
                                              Element Header
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-home.html">
                                              Element Home
                                            </a>
                                          </li>
                                          <li>
                                            <a href="element-product.html">
                                              Element Product
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="col mega-box">
                                    <div className="link-section">
                                      <div className="submenu-title">
                                        <h5>Cookie Bar</h5>
                                      </div>
                                      <div className="submenu-content opensubmegamenu">
                                        <ul className="list">
                                          <li>
                                            <a href="furniture-demo.html">
                                              Bottom
                                            </a>
                                          </li>
                                          <li>
                                            <a href="electronic-demo.html">
                                              Bottom Left
                                            </a>
                                          </li>
                                          <li>
                                            <a href="index-2.html">
                                              Bottom Right
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>

                                    <div className="link-section">
                                      <div className="submenu-title">
                                        <h5>Search</h5>
                                      </div>
                                      <div className="submenu-content opensubmegamenu">
                                        <ul className="list">
                                          <li>
                                            <a href="vegetables-demo.html">
                                              Ajax Search
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="dropdown">
                            <a
                              href="javascript:void(0)"
                              className="nav-link menu-title"
                            >
                              pages
                            </a>
                            <ul className="nav-submenu menu-content">
                              <li>
                                <a href="404.html">404</a>
                              </li>
                              <li>
                                <a href="log-in.html">Log In</a>
                              </li>
                              <li>
                                <a href="sign-up.html">Register</a>
                              </li>
                              <li>
                                <a href="forgot.html">Forgot Password</a>
                              </li>
                              <li>
                                <a href="cart.html">cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">checkout</a>
                              </li>
                              <li>
                                <a href="coming-soon.html">
                                  coming soon<span>trending</span>
                                </a>
                              </li>
                              <li>
                                <a href="compare.html">compare</a>
                              </li>
                              <li>
                                <a href="contact-us.html">contact us</a>
                              </li>
                              <li>
                                <a href="faq.html">faq</a>
                              </li>
                              <li>
                                <a href="order-success.html">order success</a>
                              </li>
                              <li>
                                <a href="order-tracking.html">order tracking</a>
                              </li>
                              <li>
                                <a href="review.html">review</a>
                              </li>
                              <li>
                                <a href="search.html">search</a>
                              </li>
                              <li>
                                <a href="user-dashboard.html">user dashboard</a>
                              </li>
                              <li>
                                <a href="wishlist.html">wishlist</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a
                              href="javascript:void(0)"
                              className="nav-link menu-title"
                            >
                              blog
                            </a>
                            <ul className="nav-submenu menu-content">
                              <li>
                                <a href="blog-details.html">Blog Details</a>
                              </li>
                              <li>
                                <a href="blog-infinite-scroll.html">
                                  Blog Infinite Scroll
                                </a>
                              </li>
                              <li>
                                <a href="blog-left-sidebar.html">
                                  Blog Left Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-listing.html">Blog Listing</a>
                              </li>
                              <li>
                                <a href="blog-masonary.html">
                                  blog Masonary <span>New</span>
                                </a>
                              </li>
                              <li>
                                <a href="blog-no-sidebar.html">
                                  blog No Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="blog-right-sidebar.html">
                                  Blog Right Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="mobile-poster d-flex d-xl-none">
                            <img
                              src="assets/images/pwa.png"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="mobile-contain">
                              <h5>Enjoy app-like experience</h5>
                              <p className="font-light">
                                With this Screen option you can use Website like
                                an App.
                              </p>
                              <a
                                href="javascript:void(0)"
                                id="installApp"
                                className="btn btn-solid-default btn-spacing w-100"
                              >
                                ADD TO HOMESCREEN
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="menu-right">
                    <ul>
                      <li>
                        <div className="search-box theme-bg-color">
                          <i data-feather="search"></i>
                        </div>
                      </li>
                      <li className="onhover-dropdown wislist-dropdown">
                        <div className="cart-media">
                          <div className="cart-icon">
                            <i data-feather="heart"></i>
                            <span className="label label-theme rounded-pill">
                              0
                            </span>
                          </div>
                          <div className="cart-content">
                            <h6>Empty</h6>
                            <span>Wish List</span>
                          </div>
                        </div>
                        <div className="onhover-div">
                          <a href="wishlist.html">
                            <div className="wislist-empty">
                              <i className="fab fa-gratipay"></i>
                              <h6 className="mb-1">Your wislist empty !!</h6>
                              <p className="font-light mb-0">
                                explore more and shortlist items.
                              </p>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li className="onhover-dropdown cart-dropdown">
                        <button
                          type="button"
                          className="btn btn-solid-default btn-spacing"
                        >
                          <i data-feather="shopping-cart" className="pe-2"></i>
                          <span>$5686.25</span>
                        </button>
                        <div className="onhover-div">
                          <div className="cart-menu">
                            <div className="cart-title">
                              <h6>
                                <i data-feather="shopping-bag"></i>
                                <span className="label label-theme rounded-pill">
                                  5
                                </span>
                              </h6>
                              <span className="d-md-none d-block">
                                <i className="fas fa-arrow-right back-cart"></i>
                              </span>
                            </div>
                            <ul className="custom-scroll">
                              <li>
                                <div className="media">
                                  <img
                                    src="assets/images/fashion/product/front/1.jpg"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <h6>Slim Fit Plastic Coat</h6>
                                    <div className="qty-with-price">
                                      <span>$78.00</span>
                                      <span>
                                        <input
                                          type="number"
                                          className="form-control"
                                          value="1"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className="btn-close d-block d-md-none"
                                    aria-label="Close"
                                  >
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </li>
                              <li>
                                <div className="media">
                                  <img
                                    src="assets/images/fashion/product/front/7.jpg"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                  <div className="media-body">
                                    <h6>Womens Stylish Jacket</h6>
                                    <div className="qty-with-price">
                                      <span>$24.00</span>
                                      <span>
                                        <input
                                          type="number"
                                          className="form-control"
                                          value="1"
                                        />
                                      </span>
                                    </div>
                                  </div>
                                  <button
                                    type="button"
                                    className="btn-close d-block d-md-none"
                                    aria-label="Close"
                                  >
                                    <i className="fas fa-times"></i>
                                  </button>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="cart-btn">
                            <h6 className="cart-total">
                              <span className="font-light">Total:</span> $
                              542.00
                            </h6>
                            <button
                              onclick="location.href = 'cart.html';"
                              type="button"
                              className="btn btn-solid-default btn-block"
                            >
                              Proceed to payment
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="search-full">
                    <div className="input-group">
                      <span className="input-group-text">
                        <i data-feather="search" className="font-light"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control search-type"
                        placeholder="Search here.."
                      />
                      <span className="input-group-text close-search">
                        <i data-feather="x" className="font-light"></i>
                      </span>
                    </div>
                    <div className="search-suggestion">
                      <ul className="custom-scroll">
                        <li>
                          <div className="product-cart media">
                            <img
                              src="assets/images/electronics/product/1.jpg"
                              className="img-fluid lazyload"
                              alt=""
                            />
                            <div className="media-body">
                              <a href="javascript:void(0)">
                                <h6 className="mb-1">New Smart Watch 4 ERT2</h6>
                              </a>
                              <ul className="rating">
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                              <p className="mb-0 mt-1">$28.00</p>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="product-cart media">
                            <img
                              src="assets/images/electronics/product/5.jpg"
                              className="img-fluid lazyload"
                              alt=""
                            />
                            <div className="media-body">
                              <a href="javascript:void(0)">
                                <h6 className="mb-1">
                                  Powermatic 900 W Juicer
                                </h6>
                              </a>
                              <ul className="rating">
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                              </ul>
                              <p className="mb-0 mt-1">$35.00</p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="mobile-menu d-sm-none">
        <ul>
          <li>
            <a href="index-2.html" className="active">
              <i data-feather="home"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)" className="toggle-category">
              <i data-feather="align-justify"></i>
              <span>Category</span>
            </a>
          </li>
          <li>
            <a href="cart.html">
              <i data-feather="shopping-bag"></i>
              <span>Cart</span>
            </a>
          </li>
          <li>
            <a href="wishlist.html">
              <i data-feather="heart"></i>
              <span>Wishlist</span>
            </a>
          </li>
          <li>
            <a href="user-dashboard.html">
              <i data-feather="user"></i>
              <span>Account</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="container-fluid">
          <div className="slick-1 classNameic-arrow">
            <div>
              <div className="home-slider">
                <img
                  src="assets/images/electronics/slider/1.jpg"
                  className="bg-img lazyload"
                  alt=""
                />
                <div className="home-wrap row">
                  <div className="col-lg-4 col-md-6 col-sm-9 left-content">
                    <div>
                      <div className="offer-wrap">
                        <h4 className="theme-color mb-2">NEW OFFER</h4>
                        <h6>Buy One Get One Free</h6>
                      </div>
                      <div className="home-content">
                        <h1 data-animation-in="fadeInUp">4k</h1>
                        <h1
                          className="mb-2"
                          data-delay-in="0.3"
                          data-animation-in="fadeInUp"
                        >
                          CAMERA
                        </h1>
                        <h2
                          className="mb-4 d-sm-block d-none"
                          data-animation-in="fadeInUp"
                          data-delay-in="0.4"
                        >
                          Wishing for is right
                        </h2>
                        <h3
                          className="mb-3"
                          data-animation-in="fadeInUp"
                          data-delay-in="0.5"
                        >
                          <span className="theme-color">$456.00</span>{" "}
                          <span className="text-decoration-line-through">
                            $480.00
                          </span>
                        </h3>
                        <p
                          className="mb-0 d-sm-block d-none"
                          data-animation-in="fadeInUp"
                          data-delay-in="0.6"
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry.
                        </p>
                        <div
                          className="discover-block d-sm-block d-none"
                          data-animation-in="fadeInUp"
                          data-delay-in="0.7"
                        >
                          <div className="d-flex">
                            <a
                              href="javascript:void(0)"
                              className="play-icon theme-bg-color"
                            >
                              <i className="fas fa-play"></i>
                            </a>
                            <div className="discover-content">
                              <h4 className="theme-color mb-1">Discover</h4>
                              <h6>Our Collection</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 offset-lg-5 right-content d-lg-flex d-none">
                    <div>
                      <h4
                        className="theme-color mb-2"
                        data-animation-in="fadeInUp"
                      >
                        Sugestion Product
                      </h4>
                      <h6
                        className="mb-4"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.3"
                      >
                        Our Collection
                      </h6>
                      <p
                        className="mb-0"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.4"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div
                        className="product-img"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.5"
                      >
                        <ul>
                          <li>
                            <a
                              href="shop-left-sidebar.html"
                              data-source="assets/images/electronics/slider/1.jpg"
                            >
                              <img
                                src="assets/images/electronics/slider/2.jpg"
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              href="shop-left-sidebar.html"
                              data-source="assets/images/electronics/slider/1.jpg"
                            >
                              <img
                                src="assets/images/electronics/slider/3.jpg"
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="home-social">
                      <ul>
                        <li>
                          <a
                            href="product-left-sidebar.html"
                            className="font-default"
                          >
                            <img
                              src="assets/images/social-icon/1.png"
                              className="img-fluid lazyload"
                              alt=""
                            />
                            <span>Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="product-left-sidebar.html"
                            className="font-default"
                          >
                            <img
                              src="assets/images/social-icon/2.png"
                              className="img-fluid lazyload"
                              alt=""
                            />
                            <span>Instagram</span>
                          </a>
                        </li>
                        <li className="mb-0">
                          <a
                            href="product-left-sidebar.html"
                            className="font-default"
                          >
                            <img
                              src="assets/images/social-icon/3.png"
                              className="img-fluid lazyload"
                              alt=""
                            />
                            <span>Twitter</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="group-btn">
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    type="button"
                    className="btn btn-solid-default"
                  >
                    Show details
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="home-slider">
                <img
                  src="assets/images/electronics/slider/1.jpg"
                  className="bg-img lazyload"
                  alt=""
                />
                <div className="home-wrap row">
                  <div className="col-lg-4 col-md-6 col-sm-9 left-content">
                    <div className="offer-wrap">
                      <h4 className="theme-color mb-2">NEW OFFER</h4>
                      <h6>Buy One Get One Free</h6>
                    </div>
                    <div className="home-content">
                      <h1 data-animation-in="fadeInUp">4k</h1>
                      <h1
                        className="mb-2"
                        data-delay-in="0.3"
                        data-animation-in="fadeInUp"
                      >
                        CAMERA
                      </h1>
                      <h2
                        className="mb-4 d-sm-block d-none"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.4"
                      >
                        Wishing for is right
                      </h2>
                      <h3
                        className="mb-3"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.5"
                      >
                        <span className="theme-color">$456.00</span>{" "}
                        <span className="text-decoration-line-through">
                          $480.00
                        </span>
                      </h3>
                      <p
                        className="mb-0 d-sm-block d-none"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.6"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div
                        className="discover-block d-sm-block d-none"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.7"
                      >
                        <div className="d-flex">
                          <a
                            href="javascript:void(0)"
                            className="play-icon theme-bg-color"
                          >
                            <i className="fas fa-play"></i>
                          </a>
                          <div className="discover-content">
                            <h4 className="theme-color mb-1">Discover</h4>
                            <h6>Our Collection</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 offset-lg-5 right-content d-lg-flex d-none">
                    <div>
                      <h4
                        className="theme-color mb-2"
                        data-animation-in="fadeInUp"
                      >
                        Sugestion Product
                      </h4>
                      <h6
                        className="mb-4"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.3"
                      >
                        Our Collection
                      </h6>
                      <p
                        className="mb-0"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.4"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                      <div
                        className="product-img"
                        data-animation-in="fadeInUp"
                        data-delay-in="0.5"
                      >
                        <ul>
                          <li>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/electronics/slider/2.jpg"
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a href="javascript:void(0)">
                              <img
                                src="assets/images/electronics/slider/3.jpg"
                                className="img-fluid lazyload"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="home-social">
                      <ul>
                        <li>
                          <a
                            href="product-left-sidebar.html"
                            className="font-default"
                          >
                            <img
                              src="assets/images/social-icon/1.png"
                              className="img-fluid lazyload"
                              alt=""
                            />
                            <span>Facebook</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="product-left-sidebar.html"
                            className="font-default"
                          >
                            <img
                              src="assets/images/social-icon/2.png"
                              className="img-fluid lazyload"
                              alt=""
                            />
                            <span>Instagram</span>
                          </a>
                        </li>
                        <li className="mb-0">
                          <a
                            href="product-left-sidebar.html"
                            className="font-default"
                          >
                            <img
                              src="assets/images/social-icon/3.png"
                              className="img-fluid lazyload"
                              alt=""
                            />
                            <span>Twitter</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="group-btn">
                  <button type="button" className="btn btn-solid-dark">
                    Show details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-section">
        <div className="container">
          <div className="row g-4 g-sm-3">
            <div className="col-xl-3 col-sm-6">
              <div className="service-wrap">
                <div className="service-icon"></div>
                <div className="service-content">
                  <h3 className="mb-2">Customer Servcies</h3>
                  <span className="font-light">
                    Top notch customer service.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="service-wrap">
                <div className="service-icon"></div>
                <div className="service-content">
                  <h3 className="mb-2">Pickup At Any Store</h3>
                  <span className="font-light">
                    Free shipping on orders over $65.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="service-wrap">
                <div className="service-icon"></div>
                <div className="service-content">
                  <h3 className="mb-2">Secured Payment</h3>
                  <span className="font-light">
                    We accept all major credit cards.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="service-wrap">
                <div className="service-icon"></div>
                <div className="service-content">
                  <h3 className="mb-2">Free Returns</h3>
                  <span className="font-light">
                    30-days free return policy.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ratio2_1">
        <div className="container">
          <div className="row gy-3">
            <div className="col-xl-5 col-lg-4 col-md-6 custom-col">
              <div className="collection-banner p-center text-center">
                <a href="shop-left-sidebar.html" className="banner-img">
                  <img
                    src={require("../assets/images/electronics/banner/1.jpg")}
                    className="bg-img lazyload"
                    alt=""
                  />
                </a>
                <a href="shop-left-sidebar.html" className="contain-banner">
                  <div className="banner-content with-bg">
                    <h2 className="mb-2 mins-spacing">Headphone</h2>
                    <span className="s-spacing">BUY ONE GET ONE FREE</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 order-lg-0 order-md-1 order-0">
              <div className="collection-banner text-center collection-center">
                <h6 className="theme-color mb-2">Get Rewarded</h6>
                <h2>Earn 10% </h2>
                <h2>Back Reward</h2>
                <p className="mt-2">
                  Valid online & in-store with select styles.
                </p>
                <button
                  onclick="location.href = 'shop-left-sidebar.html';"
                  type="button"
                  className="btn btn-solid-default"
                >
                  Learn more
                </button>
              </div>
            </div>

            <div className="col-xl-5 col-lg-4 col-md-6 custom-col">
              <div className="collection-banner p-center text-center">
                <a href="shop-left-sidebar.html" className="banner-img">
                  <img
                    src={require("../assets/images/electronics/banner/2.jpg")}
                    className="bg-img lazyload"
                    alt=""
                  />
                </a>
                <a href="shop-left-sidebar.html" className="contain-banner">
                  <div className="banner-content with-bg">
                    <h2 className="mb-2 mins-spacing">Headphone</h2>
                    <span className="s-spacing">BUY ONE GET ONE FREE</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ratio_asos">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-sm-12 p-0">
              <div className="title text-center">
                <h5>Just For You</h5>
                <h2>Our Collection</h2>
              </div>
              <div className="product-wrapper slide-6">
                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <a href="product-left-sidebar.html">
                        <img
                          src={require("../assets/images/electronics/product/1.jpg")}
                          className="bg-img lazyload"
                          alt=""
                        />
                      </a>
                      <div className="label-block">
                        <span className="label label-black">New</span>
                        <span className="label label-theme">50% Off</span>
                      </div>
                      <div className="cart-wrap">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="addtocart-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart"
                            >
                              <i data-feather="shopping-bag"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view"
                            >
                              <i data-feather="eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="compare.html">
                              <i data-feather="refresh-cw"></i>
                            </a>
                          </li>
                          <li>
                            <a href="wishlist.html" className="wishlist">
                              <i data-feather="heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $49.00
                        <span className="font-light ml-1">$52.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>New Smart Watch 4 ERT2</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <a href="product-left-sidebar.html">
                        <img
                          src={require("../assets/images/electronics/product/2.jpg")}
                          className="bg-img lazyload"
                          alt=""
                        />
                      </a>
                      <div className="label-block">
                        <span className="label label-black">On discount</span>
                      </div>
                      <div className="cart-wrap">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="addtocart-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart"
                            >
                              <i data-feather="shopping-bag"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view"
                            >
                              <i data-feather="eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="compare.html">
                              <i data-feather="refresh-cw"></i>
                            </a>
                          </li>
                          <li>
                            <a href="wishlist.html" className="wishlist">
                              <i data-feather="heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $32.00
                        <span className="font-light ml-1">$50.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Harman International Speaker</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <a href="product-left-sidebar.html">
                        <img
                          src="assets/images/electronics/product/3.jpg"
                          className="bg-img lazyload"
                          alt=""
                        />
                      </a>
                      <div className="cart-wrap">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="addtocart-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart"
                            >
                              <i data-feather="shopping-bag"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view"
                            >
                              <i data-feather="eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="compare.html">
                              <i data-feather="refresh-cw"></i>
                            </a>
                          </li>
                          <li>
                            <a href="wishlist.html" className="wishlist">
                              <i data-feather="heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">$25.00</h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>BoAt Rockerz Bluetooth Headset</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <a href="product-left-sidebar.html">
                        <img
                          src="assets/images/electronics/product/4.jpg"
                          className="bg-img lazyload"
                          alt=""
                        />
                      </a>
                      <div className="cart-wrap">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="addtocart-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart"
                            >
                              <i data-feather="shopping-bag"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view"
                            >
                              <i data-feather="eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="compare.html">
                              <i data-feather="refresh-cw"></i>
                            </a>
                          </li>
                          <li>
                            <a href="wishlist.html" className="wishlist">
                              <i data-feather="heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $28.00
                        <span className="font-light ml-1">$30.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Dell MS 116 Wired Optical Mouse</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <a href="product-left-sidebar.html">
                        <img
                          src="assets/images/electronics/product/5.jpg"
                          className="bg-img lazyload"
                          alt=""
                        />
                      </a>
                      <div className="label-block">
                        <span className="label label-theme">Best value</span>
                      </div>
                      <div className="cart-wrap">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="addtocart-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart"
                            >
                              <i data-feather="shopping-bag"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view"
                            >
                              <i data-feather="eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="compare.html">
                              <i data-feather="refresh-cw"></i>
                            </a>
                          </li>
                          <li>
                            <a href="wishlist.html" className="wishlist">
                              <i data-feather="heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $35.00
                        <span className="font-light ml-1">$48.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Powermatic 900 W Juicer</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <a href="product-left-sidebar.html">
                        <img
                          src="assets/images/electronics/product/6.jpg"
                          className="bg-img lazyload"
                          alt=""
                        />
                      </a>
                      <div className="cart-wrap">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="addtocart-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart"
                            >
                              <i data-feather="shopping-bag"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view"
                            >
                              <i data-feather="eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="compare.html">
                              <i data-feather="refresh-cw"></i>
                            </a>
                          </li>
                          <li>
                            <a href="wishlist.html" className="wishlist">
                              <i data-feather="heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">$52.00</h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>JBZ JB-113 10 W Bluetooth Speaker</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <a href="product-left-sidebar.html">
                        <img
                          src="assets/images/electronics/product/4.jpg"
                          className="bg-img lazyload"
                          alt=""
                        />
                      </a>
                      <div className="cart-wrap">
                        <ul>
                          <li>
                            <a
                              href="javascript:void(0)"
                              className="addtocart-btn"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart"
                            >
                              <i data-feather="shopping-bag"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:void(0)"
                              data-bs-toggle="modal"
                              data-bs-target="#quick-view"
                            >
                              <i data-feather="eye"></i>
                            </a>
                          </li>
                          <li>
                            <a href="compare.html">
                              <i data-feather="refresh-cw"></i>
                            </a>
                          </li>
                          <li>
                            <a href="wishlist.html" className="wishlist">
                              <i data-feather="heart"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $28.00
                        <span className="font-light ml-1">$30.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Dell MS 116 Wired Optical Mouse</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ratio2_1">
        <div className="container">
          <div className="row gy-3">
            <div className="col-xl-9 col-lg-8">
              <div className="timer-banner text-center">
                <img
                  src="assets/images/electronics/banner/3.jpg"
                  className="bg-img lazyload"
                  alt=""
                />
                <div className="coupon-code theme-color">DGR548548</div>
                <div className="discount-offer">
                  <h5>
                    New Festival Offer
                    <span className="theme-color">
                      70% OFF{" "}
                      <a href="wishlist.html" className="wishlist-icon mt-2">
                        <i className="fas fa-heart"></i>
                      </a>
                    </span>
                  </h5>
                </div>
                <div>
                  <div className="timer">
                    <ul>
                      <li>
                        <div className="counter">
                          <div>
                            <h2 id="days1"></h2>Days
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="counter">
                          <div>
                            <h2 id="hours1"></h2>Hour
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="counter">
                          <div>
                            <h2 id="minutes1"></h2>Min
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="counter">
                          <div>
                            <h2 id="seconds1"></h2>Sec
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="banner-btn-grup">
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    type="button"
                    className="btn btn-solid-default"
                  >
                    Shop Now
                  </button>
                </div>
                <div className="social-media">
                  <div className="social-icon">
                    <img
                      src="assets/images/social-icon/1.png"
                      className="img-fluid lazyload"
                      alt=""
                    />
                    <h6>Facebook</h6>
                  </div>

                  <div className="social-icon">
                    <img
                      src="assets/images/social-icon/2.png"
                      className="img-fluid lazyload"
                      alt=""
                    />
                    <h6>Instagram</h6>
                  </div>

                  <div className="social-icon">
                    <img
                      src="assets/images/social-icon/3.png"
                      className="img-fluid lazyload"
                      alt=""
                    />
                    <h6>Twitter</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 small-banner">
              <div className="collection-banner text-center collection-center">
                <img
                  src="assets/images/electronics/banner/4.jpg"
                  className="bg-img lazyload"
                  alt=""
                />
                <div className="collection-contain">
                  <h6 className="theme-color mb-2">New Headphone</h6>
                  <h2>50% Cash </h2>
                  <h2>Back Reward</h2>
                  <p className="mt-2 mb-0 font-light">Limited offer </p>
                  <p className="font-light mb-0"> Buy now!!</p>
                  <button
                    onclick="location.href = 'shop-left-sidebar.html';"
                    type="button"
                    className="btn btn-solid-default mt-lg-4 mt-2"
                  >
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ratio_asos">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="title text-center">
                <h5>Just For You</h5>
                <h2>VR Collection</h2>
              </div>
              <div className="product-wrapper slide-7 product-style-1">
                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <div className="top-wishlist">
                        <span className="font-dark-30">-20%</span>
                        <a
                          href="wishlist.html"
                          className="heart-wishlist wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <a
                        href="product-left-sidebar.html"
                        className="text-center"
                      >
                        <img
                          src="assets/images/electronics/product/png/1.png"
                          className="img-fluid lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $49.00
                        <span className="font-light ml-1">$52.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Portable charger</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <div className="top-wishlist">
                        <span className="font-dark-30">-10%</span>
                        <a
                          href="wishlist.html"
                          className="heart-wishlist wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <a href="shop-left-sidebar.html" className="text-center">
                        <img
                          src="assets/images/electronics/product/png/2.png"
                          className="img-fluid lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $52.00
                        <span className="font-light ml-1">$60.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>VR Box - Buy VR Headset</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <div className="top-wishlist">
                        <span className="font-dark-30">-8%</span>
                        <a
                          href="wishlist.html"
                          className="heart-wishlist wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <a
                        href="product-left-sidebar.html"
                        className="text-center"
                      >
                        <img
                          src="assets/images/electronics/product/png/3.png"
                          className="img-fluid lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $52.00
                        <span className="font-light ml-1">$60.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Headset Game For IOS</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <div className="top-wishlist">
                        <span className="font-dark-30">-15%</span>
                        <a
                          href="wishlist.html"
                          className="heart-wishlist wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <a
                        href="product-left-sidebar.html"
                        className="text-center"
                      >
                        <img
                          src="assets/images/electronics/product/png/4.png"
                          className="img-fluid lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $45.00
                        <span className="font-light ml-1">$80.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Unifree Portable</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <div className="top-wishlist">
                        <span className="font-dark-30">-20%</span>
                        <a
                          href="wishlist.html"
                          className="heart-wishlist wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <a
                        href="product-left-sidebar.html"
                        className="text-center"
                      >
                        <img
                          src="assets/images/electronics/product/png/5.png"
                          className="img-fluid lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $25.00
                        <span className="font-light ml-1">$40.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Wireless Bluetooth Sunglasses Headset</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <div className="top-wishlist">
                        <span className="font-dark-30">-5%</span>
                        <a
                          href="wishlist.html"
                          className="heart-wishlist wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <a
                        href="product-left-sidebar.html"
                        className="text-center"
                      >
                        <img
                          src="assets/images/electronics/product/png/6.png"
                          className="img-fluid lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $48.00
                        <span className="font-light ml-1">$62.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Dual EQ Bluetooth 5.0 Portable</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <div className="top-wishlist">
                        <span className="font-dark-30">-12%</span>
                        <a
                          href="wishlist.html"
                          className="heart-wishlist wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <a
                        href="product-left-sidebar.html"
                        className="text-center"
                      >
                        <img
                          src="assets/images/electronics/product/png/7.png"
                          className="img-fluid lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $58.00
                        <span className="font-light ml-1">$84.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Leapmotion VR</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="product-box">
                    <div className="img-wrapper">
                      <div className="top-wishlist">
                        <span className="font-dark-30">-20%</span>
                        <a
                          href="wishlist.html"
                          className="heart-wishlist wishlist"
                        >
                          <i className="far fa-heart"></i>
                        </a>
                      </div>
                      <a
                        href="product-left-sidebar.html"
                        className="text-center"
                      >
                        <img
                          src="assets/images/electronics/product/png/5.png"
                          className="img-fluid lazyload"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-details text-center">
                      <h3 className="theme-color">
                        $25.00
                        <span className="font-light ml-1">$40.00</span>
                      </h3>
                      <a
                        href="product-left-sidebar.html"
                        className="font-default"
                      >
                        <h5>Wireless Bluetooth Sunglasses Headset</h5>
                      </a>
                      <ul className="rating">
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                        <li>
                          <i className="fas fa-star"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tab-section">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="title text-center">
                <h5>Special Offer</h5>
                <h2>Hurry up!</h2>
              </div>
              <div className="tab-wrap">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="camera-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Camera"
                      type="button"
                      role="tab"
                    >
                      Camera
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="audio-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Audio"
                      type="button"
                      role="tab"
                    >
                      Audio
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="navigation-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Navigation"
                      type="button"
                      role="tab"
                    >
                      Gps & Navigation
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="other-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Others"
                      type="button"
                      role="tab"
                    >
                      Others
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="phones-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Phones"
                      type="button"
                      role="tab"
                    >
                      Cell Phones
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="computer-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Computer"
                      type="button"
                      role="tab"
                    >
                      Computer
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="accesories-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#Accesories"
                      type="button"
                      role="tab"
                    >
                      Accesories
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade" id="Camera" role="tabpanel">
                    <div className="offer-wrap product-style-1">
                      <div className="row g-xl-4 g-3">
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/11.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $25.00
                                  <span className="font-light ml-1">
                                    $58.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Digital Unisex Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/13.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $700.00
                                  <span className="font-light ml-1">
                                    $850.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Smart Security Camera (White)</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/12.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $78.00
                                  <span className="font-light ml-1">
                                    $90.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>White dial Wrist Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 product-banner">
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">
                                  50% Off
                                </span>
                              </div>
                              <a href="javascript:void(0)">
                                <img
                                  src="assets/images/electronics/product/png/14.png"
                                  className="img-fluid lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="offer-end">
                                <h3>Hurry Up !!!!! </h3>
                                <h6>Offer Expire in 02 hours</h6>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <h3 className="theme-color">
                                $600.00
                                <span className="font-light ml-1">$945.00</span>
                              </h3>
                              <a
                                href="javascript:void(0)"
                                className="font-default"
                                tabindex="-1"
                              >
                                <h5 className="main-title">
                                  Bluetooth Wireless Earphones(black)
                                </h5>
                              </a>
                              <ul className="rating">
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/8.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $52.00
                                  <span className="font-light ml-1">
                                    $60.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>16MP 4K HD Action Waterproof Camera</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/9.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $30.00
                                  <span className="font-light ml-1">
                                    $50.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Ear Bluetooth Wireless Headphone</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/10.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $1000.00
                                  <span className="font-light ml-1">
                                    $1068.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>
                                    Full HD Indoor WiFi Spy Security Camera
                                  </h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Audio" role="tabpanel">
                    <div className="offer-wrap product-style-1">
                      <div className="row g-xl-4 g-3">
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/9.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $30.00
                                  <span className="font-light ml-1">
                                    $50.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Ear Bluetooth Wireless Headphone</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/8.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $52.00
                                  <span className="font-light ml-1">
                                    $60.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>16MP 4K HD Action Waterproof Camera</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/10.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $1000.00
                                  <span className="font-light ml-1">
                                    $1068.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>
                                    Full HD Indoor WiFi Spy Security Camera
                                  </h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 product-banner">
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">
                                  50% Off
                                </span>
                              </div>
                              <a href="javascript:void(0)">
                                <img
                                  src="assets/images/electronics/product/png/14.png"
                                  className="img-fluid lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="offer-end">
                                <h3>Hurry Up !!!!! </h3>
                                <h6>Offer Expire in 02 hours</h6>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <h3 className="theme-color">
                                $600.00
                                <span className="font-light ml-1">$945.00</span>
                              </h3>
                              <a
                                href="javascript:void(0)"
                                className="font-default"
                                tabindex="-1"
                              >
                                <h5 className="main-title">
                                  Bluetooth Wireless Earphones(black)
                                </h5>
                              </a>
                              <ul className="rating">
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/13.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $700.00
                                  <span className="font-light ml-1">
                                    $850.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Smart Security Camera (White)</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/11.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $25.00
                                  <span className="font-light ml-1">
                                    $58.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Digital Unisex Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/12.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $78.00
                                  <span className="font-light ml-1">
                                    $90.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>White dial Wrist Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Navigation"
                    role="tabpanel"
                  >
                    <div className="offer-wrap product-style-1">
                      <div className="row g-xl-4 g-3">
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/12.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $78.00
                                  <span className="font-light ml-1">
                                    $90.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>White dial Wrist Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/13.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $700.00
                                  <span className="font-light ml-1">
                                    $850.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Smart Security Camera (White)</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/11.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $25.00
                                  <span className="font-light ml-1">
                                    $58.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Digital Unisex Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 product-banner">
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">
                                  50% Off
                                </span>
                              </div>
                              <a href="javascript:void(0)">
                                <img
                                  src="assets/images/electronics/product/png/14.png"
                                  className="img-fluid lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="offer-end">
                                <h3>Hurry Up !!!!! </h3>
                                <h6>Offer Expire in 02 hours</h6>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <h3 className="theme-color">
                                $600.00
                                <span className="font-light ml-1">$945.00</span>
                              </h3>
                              <a
                                href="javascript:void(0)"
                                className="font-default"
                                tabindex="-1"
                              >
                                <h5 className="main-title">
                                  Bluetooth Wireless Earphones(black)
                                </h5>
                              </a>
                              <ul className="rating">
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/10.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $1000.00
                                  <span className="font-light ml-1">
                                    $1068.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>
                                    Full HD Indoor WiFi Spy Security Camera
                                  </h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/9.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $30.00
                                  <span className="font-light ml-1">
                                    $50.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Ear Bluetooth Wireless Headphone</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/8.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $52.00
                                  <span className="font-light ml-1">
                                    $60.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>16MP 4K HD Action Waterproof Camera</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="Others"
                    role="tabpanel"
                  >
                    <div className="offer-wrap product-style-1">
                      <div className="row g-xl-4 g-3">
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/8.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $52.00
                                  <span className="font-light ml-1">
                                    $60.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>16MP 4K HD Action Waterproof Camera</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/9.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $30.00
                                  <span className="font-light ml-1">
                                    $50.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Ear Bluetooth Wireless Headphone</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/10.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $1000.00
                                  <span className="font-light ml-1">
                                    $1068.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>
                                    Full HD Indoor WiFi Spy Security Camera
                                  </h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 product-banner">
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">
                                  50% Off
                                </span>
                              </div>
                              <a href="javascript:void(0)">
                                <img
                                  src="assets/images/electronics/product/png/14.png"
                                  className="img-fluid lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="offer-end">
                                <h3>Hurry Up !!!!! </h3>
                                <h6>Offer Expire in 02 hours</h6>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <h3 className="theme-color">
                                $600.00
                                <span className="font-light ml-1">$945.00</span>
                              </h3>
                              <a
                                href="javascript:void(0)"
                                className="font-default"
                                tabindex="-1"
                              >
                                <h5 className="main-title">
                                  Bluetooth Wireless Earphones(black)
                                </h5>
                              </a>
                              <ul className="rating">
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/11.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $25.00
                                  <span className="font-light ml-1">
                                    $58.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Digital Unisex Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/13.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $700.00
                                  <span className="font-light ml-1">
                                    $850.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Smart Security Camera (White)</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/12.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $78.00
                                  <span className="font-light ml-1">
                                    $90.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>White dial Wrist Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Phones" role="tabpanel">
                    <div className="offer-wrap product-style-1">
                      <div className="row g-xl-4 g-3">
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/12.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $78.00
                                  <span className="font-light ml-1">
                                    $90.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>White dial Wrist Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/11.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $25.00
                                  <span className="font-light ml-1">
                                    $58.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Digital Unisex Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/8.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $52.00
                                  <span className="font-light ml-1">
                                    $60.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>16MP 4K HD Action Waterproof Camera</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 product-banner">
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">
                                  50% Off
                                </span>
                              </div>
                              <a href="javascript:void(0)">
                                <img
                                  src="assets/images/electronics/product/png/14.png"
                                  className="img-fluid lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="offer-end">
                                <h3>Hurry Up !!!!! </h3>
                                <h6>Offer Expire in 02 hours</h6>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <h3 className="theme-color">
                                $600.00
                                <span className="font-light ml-1">$945.00</span>
                              </h3>
                              <a
                                href="javascript:void(0)"
                                className="font-default"
                                tabindex="-1"
                              >
                                <h5 className="main-title">
                                  Bluetooth Wireless Earphones(black)
                                </h5>
                              </a>
                              <ul className="rating">
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/9.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $30.00
                                  <span className="font-light ml-1">
                                    $50.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Ear Bluetooth Wireless Headphone</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/13.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $700.00
                                  <span className="font-light ml-1">
                                    $850.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Smart Security Camera (White)</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/10.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $1000.00
                                  <span className="font-light ml-1">
                                    $1068.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>
                                    Full HD Indoor WiFi Spy Security Camera
                                  </h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="Computer" role="tabpanel">
                    <div className="offer-wrap product-style-1">
                      <div className="row g-xl-4 g-3">
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/12.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $78.00
                                  <span className="font-light ml-1">
                                    $90.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>White dial Wrist Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/13.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $700.00
                                  <span className="font-light ml-1">
                                    $850.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Smart Security Camera (White)</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/11.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $25.00
                                  <span className="font-light ml-1">
                                    $58.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Digital Unisex Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 product-banner">
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">
                                  50% Off
                                </span>
                              </div>
                              <a href="javascript:void(0)">
                                <img
                                  src="assets/images/electronics/product/png/14.png"
                                  className="img-fluid lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="offer-end">
                                <h3>Hurry Up !!!!! </h3>
                                <h6>Offer Expire in 02 hours</h6>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <h3 className="theme-color">
                                $600.00
                                <span className="font-light ml-1">$945.00</span>
                              </h3>
                              <a
                                href="javascript:void(0)"
                                className="font-default"
                                tabindex="-1"
                              >
                                <h5 className="main-title">
                                  Bluetooth Wireless Earphones(black)
                                </h5>
                              </a>
                              <ul className="rating">
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/10.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $1000.00
                                  <span className="font-light ml-1">
                                    $1068.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>
                                    Full HD Indoor WiFi Spy Security Camera
                                  </h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/9.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $30.00
                                  <span className="font-light ml-1">
                                    $50.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Ear Bluetooth Wireless Headphone</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/8.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $52.00
                                  <span className="font-light ml-1">
                                    $60.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>16MP 4K HD Action Waterproof Camera</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="Accesories"
                    role="tabpanel"
                  >
                    <div className="offer-wrap product-style-1">
                      <div className="row g-xl-4 g-3">
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/10.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $1000.00
                                  <span className="font-light ml-1">
                                    $1068.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>
                                    Full HD Indoor WiFi Spy Security Camera
                                  </h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/9.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $30.00
                                  <span className="font-light ml-1">
                                    $50.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Ear Bluetooth Wireless Headphone</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/8.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $52.00
                                  <span className="font-light ml-1">
                                    $60.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>16MP 4K HD Action Waterproof Camera</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 product-banner">
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="label-block">
                                <span className="label label-black">New</span>
                                <span className="label label-theme">
                                  50% Off
                                </span>
                              </div>
                              <a href="javascript:void(0)">
                                <img
                                  src="assets/images/electronics/product/png/14.png"
                                  className="img-fluid lazyload"
                                  alt=""
                                />
                              </a>
                              <div className="offer-end">
                                <h3>Hurry Up !!!!! </h3>
                                <h6>Offer Expire in 02 hours</h6>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <h3 className="theme-color">
                                $600.00
                                <span className="font-light ml-1">$945.00</span>
                              </h3>
                              <a
                                href="javascript:void(0)"
                                className="font-default"
                                tabindex="-1"
                              >
                                <h5 className="main-title">
                                  Bluetooth Wireless Earphones(black)
                                </h5>
                              </a>
                              <ul className="rating">
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star theme-color"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                                <li>
                                  <i className="fas fa-star"></i>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="product-list">
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/12.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $78.00
                                  <span className="font-light ml-1">
                                    $90.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>White dial Wrist Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/13.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $700.00
                                  <span className="font-light ml-1">
                                    $850.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Smart Security Camera (White)</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="product-box">
                              <div className="img-wrapper">
                                <a
                                  href="shop-left-sidebar.html"
                                  className="text-center"
                                >
                                  <img
                                    src="assets/images/electronics/product/png/11.png"
                                    className="img-fluid lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                              <div className="product-details">
                                <h3 className="theme-color">
                                  $25.00
                                  <span className="font-light ml-1">
                                    $58.00
                                  </span>
                                </h3>
                                <a
                                  href="product-left-sidebar.html"
                                  className="font-default"
                                >
                                  <h5>Digital Unisex Watch</h5>
                                </a>
                                <ul className="rating">
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star theme-color"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                  <li>
                                    <i className="fas fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ratio_square">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="title title-2 text-center">
                <h2>Instagram Shop</h2>
                <h5>New Collection</h5>
              </div>
              <div className="product-style-1 instagram-2">
                <div className="insta-slider product-wrapper instagram-wrap">
                  <div>
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="top-wishlist product-color">
                          <a
                            href="wishlist.html"
                            className="heart-wishlist heart-color"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </div>
                        <div className="share share-box share-opacity">
                          <span className="share-plus share-plus-color">+</span>
                          <span>Share</span>
                        </div>
                        <a
                          href="shop-left-sidebar.html"
                          className="text-center"
                        >
                          <img
                            src="assets/images/electronics/instagram/1.jpg"
                            className="bg-img lazyload"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="insta-hover text-center">
                        <div>
                          <h5>New Offer -56% Discount</h5>
                          <h3 className="text-hide">Women T-shirt From $35</h3>
                          <button
                            onclick="location.href = 'shop-left-sidebar.html';"
                            type="button"
                            className="btn btn-light-white"
                          >
                            Shop now{" "}
                            <i className="fas fa-chevron-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="top-wishlist product-color">
                          <a
                            href="wishlist.html"
                            className="heart-wishlist heart-color"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </div>
                        <div className="share share-box share-opacity">
                          <span className="share-plus share-plus-color">+</span>
                          <span>Share</span>
                        </div>
                        <a
                          href="shop-left-sidebar.html"
                          className="text-center"
                        >
                          <img
                            src="assets/images/electronics/instagram/2.jpg"
                            className="bg-img lazyload"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="insta-hover text-center">
                        <div>
                          <h5>New Offer -40% Discount</h5>
                          <h3 className="text-hide">Men jacket From $80</h3>
                          <button
                            onclick="location.href = 'shop-left-sidebar.html';"
                            type="button"
                            className="btn btn-light-white"
                          >
                            Shop now{" "}
                            <i className="fas fa-chevron-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="top-wishlist product-color">
                          <a
                            href="wishlist.html"
                            className="heart-wishlist heart-color"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </div>
                        <div className="share share-box share-opacity">
                          <span className="share-plus share-plus-color">+</span>
                          <span>Share</span>
                        </div>
                        <a
                          href="shop-left-sidebar.html"
                          className="text-center"
                        >
                          <img
                            src="assets/images/electronics/instagram/3.jpg"
                            className="bg-img lazyload"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="insta-hover text-center">
                        <div>
                          <h5>New Offer -25% Discount</h5>
                          <h3 className="text-hide">Women jacket From $74</h3>
                          <button
                            onclick="location.href = 'shop-left-sidebar.html';"
                            type="button"
                            className="btn btn-light-white"
                          >
                            Shop now{" "}
                            <i className="fas fa-chevron-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="top-wishlist product-color">
                          <a
                            href="wishlist.html"
                            className="heart-wishlist heart-color"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </div>
                        <div className="share share-box share-opacity">
                          <span className="share-plus share-plus-color">+</span>
                          <span>Share</span>
                        </div>
                        <a
                          href="shop-left-sidebar.html"
                          className="text-center"
                        >
                          <img
                            src="assets/images/electronics/instagram/4.jpg"
                            className="bg-img lazyload"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="insta-hover text-center">
                        <div>
                          <h5>New Offer -30% Discount</h5>
                          <h3 className="text-hide">Men Jacket From $30</h3>
                          <button
                            onclick="location.href = 'shop-left-sidebar.html';"
                            type="button"
                            className="btn btn-light-white"
                          >
                            Shop now{" "}
                            <i className="fas fa-chevron-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="top-wishlist product-color">
                          <a
                            href="wishlist.html"
                            className="heart-wishlist heart-color"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </div>
                        <div className="share share-box share-opacity">
                          <span className="share-plus share-plus-color">+</span>
                          <span>Share</span>
                        </div>
                        <a
                          href="shop-left-sidebar.html"
                          className="text-center"
                        >
                          <img
                            src="assets/images/electronics/instagram/5.jpg"
                            className="bg-img lazyload"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="insta-hover text-center">
                        <div>
                          <h5>New Offer -40% Discount</h5>
                          <h3 className="text-hide">Women T-shirt From $20</h3>
                          <button
                            onclick="location.href = 'shop-left-sidebar.html';"
                            type="button"
                            className="btn btn-light-white"
                          >
                            Shop now{" "}
                            <i className="fas fa-chevron-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="top-wishlist product-color">
                          <a
                            href="wishlist.html"
                            className="heart-wishlist heart-color"
                          >
                            <i className="far fa-heart"></i>
                          </a>
                        </div>
                        <div className="share share-box share-opacity">
                          <span className="share-plus share-plus-color">+</span>
                          <span>Share</span>
                        </div>
                        <a
                          href="shop-left-sidebar.html"
                          className="text-center"
                        >
                          <img
                            src="assets/images/electronics/instagram/2.jpg"
                            className="bg-img lazyload"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="insta-hover text-center">
                        <div>
                          <h5>New Offer -25% Discount</h5>
                          <h3 className="text-hide">Women jacket From $74</h3>
                          <button
                            onclick="location.href = 'shop-left-sidebar.html';"
                            type="button"
                            className="btn btn-light-white"
                          >
                            Shop now{" "}
                            <i className="fas fa-chevron-right ms-2"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-b-space">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="brand-slider">
                <div>
                  <div className="brand-image">
                    <img
                      src="assets/images/brand/1.png"
                      className="img-fluid lazyload"
                      alt="brand logo"
                    />
                  </div>
                </div>
                <div>
                  <div className="brand-image">
                    <img
                      src="assets/images/brand/2.png"
                      className="img-fluid lazyload"
                      alt="brand logo"
                    />
                  </div>
                </div>
                <div>
                  <div className="brand-image">
                    <img
                      src="assets/images/brand/3.png"
                      className="img-fluid lazyload"
                      alt="brand logo"
                    />
                  </div>
                </div>
                <div>
                  <div className="brand-image">
                    <img
                      src="assets/images/brand/4.png"
                      className="img-fluid lazyload"
                      alt="brand logo"
                    />
                  </div>
                </div>
                <div>
                  <div className="brand-image">
                    <img
                      src="assets/images/brand/5.png"
                      className="img-fluid lazyload"
                      alt="brand logo"
                    />
                  </div>
                </div>
                <div>
                  <div className="brand-image">
                    <img
                      src="assets/images/brand/6.png"
                      className="img-fluid lazyload"
                      alt="brand logo"
                    />
                  </div>
                </div>
                <div>
                  <div className="brand-image">
                    <img
                      src="assets/images/brand/4.png"
                      className="img-fluid lazyload"
                      alt="brand logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer-sm-space">
        <div className="main-footer">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-contact">
                  <div className="brand-logo">
                    <a href="index-2.html" className="footer-logo">
                      <img
                        src="assets/images/logo.png"
                        className="img-fluid lazyload"
                        alt="logo"
                      />
                    </a>
                  </div>
                  <ul className="contact-lists">
                    <li>
                      <span>
                        <b>phone:</b>{" "}
                        <span className="font-light"> + 185659635</span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Address:</b>
                        <span className="font-light">
                          {" "}
                          1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052,
                          United States
                        </span>
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Email:</b>
                        <span className="font-light"> Voxo123@gmail.com</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-links">
                  <div className="footer-title">
                    <h3>About us</h3>
                  </div>
                  <div className="footer-content">
                    <ul>
                      <li>
                        <a href="index-2.html" className="font-dark">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html" className="font-dark">
                          Shop
                        </a>
                      </li>
                      <li>
                        <a href="about-us.html" className="font-dark">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html" className="font-dark">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html" className="font-dark">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-links">
                  <div className="footer-title">
                    <h3>New Categories</h3>
                  </div>
                  <div className="footer-content">
                    <ul>
                      <li>
                        <a href="shop-left-sidebar.html" className="font-dark">
                          Latest Shoes
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html" className="font-dark">
                          Branded Jeans
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html" className="font-dark">
                          New Jackets
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html" className="font-dark">
                          Colorfull Hoodies
                        </a>
                      </li>
                      <li>
                        <a href="shop-left-sidebar.html" className="font-dark">
                          Shiner Goggles
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div className="footer-links">
                  <div className="footer-title">
                    <h3>Get Help</h3>
                  </div>
                  <div className="footer-content">
                    <ul>
                      <li>
                        <a href="user-dashboard.html" className="font-dark">
                          Your Orders
                        </a>
                      </li>
                      <li>
                        <a href="user-dashboard.html" className="font-dark">
                          Your Account
                        </a>
                      </li>
                      <li>
                        <a href="order-tracking.html" className="font-dark">
                          Track Orders
                        </a>
                      </li>
                      <li>
                        <a href="wishlist.html" className="font-dark">
                          Your Wishlist
                        </a>
                      </li>
                      <li>
                        <a href="faq.html" className="font-dark">
                          Shopping FAQs
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6 d-none d-sm-block">
                <div className="footer-newsletter">
                  <h3>Let’s stay in touch</h3>
                  <div className="form-newsletter">
                    <div className="input-group mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email Address"
                      />
                      <span className="input-group-text" id="basic-addon4">
                        <i className="fas fa-arrow-right"></i>
                      </span>
                    </div>
                    <p className="font-dark mb-0">
                      Keep up to date with our latest news and special offers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub-footer">
          <div className="container">
            <div className="row gy-3">
              <div className="col-md-6">
                <ul>
                  <li className="font-dark">We accept:</li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../assets/images/payment-icon/1.jpg")}
                        className="img-fluid lazyload"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../assets/images/payment-icon/2.jpg")}
                        className="img-fluid lazyload"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../assets/images/payment-icon/3.jpg")}
                        className="img-fluid lazyload"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        src={require("../assets/images/payment-icon/4.jpg")}
                        className="img-fluid lazyload"
                        alt="payment icon"
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <p className="mb-0 font-dark">
                  © 2022, Voxo Theme. Made with heart by Pixelstrap
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className="modal fade cart-modal"
        id="addtocart"
        tabindex="-1"
        role="dialog"
        aria-label="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="modal-contain">
                <div>
                  <div className="modal-messages">
                    <i className="fas fa-check"></i> 3-stripes full-zip hoodie
                    successfully added to you cart.
                  </div>
                  <div className="modal-product">
                    <div className="modal-contain-img">
                      <img
                        src={require("../assets/images/fashion/instagram/4.jpg")}
                        className="img-fluid lazyload"
                        alt=""
                      />
                    </div>
                    <div className="modal-contain-details">
                      <h4>Premier Cropped Skinny Jean</h4>
                      <p className="font-light my-2">Yellow, Qty : 3</p>
                      <div className="product-total">
                        <h5>
                          TOTAL : <span>$1,140.00</span>
                        </h5>
                      </div>
                      <div className="shop-cart-button mt-3">
                        <a
                          href="shop-left-sidebar.html"
                          className="btn default-light-theme conti-button default-theme default-theme-2 rounded"
                        >
                          CONTINUE SHOPPING
                        </a>
                        <a
                          href="cart.html"
                          className="btn default-light-theme conti-button default-theme default-theme-2 rounded"
                        >
                          VIEW CART
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ratio_asos mt-4">
                <div className="container">
                  <div className="row m-0">
                    <div className="col-sm-12 p-0">
                      <div className="product-wrapper product-style-2 slide-4 p-0 light-arrow bottom-space spacing-slider">
                        <div>
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="front">
                                <a href="product-left-sidebar.html">
                                  <img
                                    src={require("../assets/images/fashion/product/front/1.jpg")}
                                    className="bg-img lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <div className="rating-details d-block text-center">
                                <span className="font-light grid-content">
                                  B&Y Jacket
                                </span>
                              </div>
                              <div className="main-price mt-0 d-block text-center">
                                <h3 className="theme-color">$78.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="front">
                                <a href="product-left-sidebar.html">
                                  <img
                                    src={require("../assets/images/fashion/product/front/2.jpg")}
                                    className="bg-img lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <div className="rating-details d-block text-center">
                                <span className="font-light grid-content">
                                  B&Y Jacket
                                </span>
                              </div>
                              <div className="main-price mt-0 d-block text-center">
                                <h3 className="theme-color">$78.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="front">
                                <a href="product-left-sidebar.html">
                                  <img
                                    src={require("../assets/images/fashion/product/front/3.jpg")}
                                    className="bg-img lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <div className="rating-details d-block text-center">
                                <span className="font-light grid-content">
                                  B&Y Jacket
                                </span>
                              </div>
                              <div className="main-price mt-0 d-block text-center">
                                <h3 className="theme-color">$78.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="product-box">
                            <div className="img-wrapper">
                              <div className="front">
                                <a href="product-left-sidebar.html">
                                  <img
                                    src={require("../assets/images/fashion/product/front/4.jpg")}
                                    className="bg-img lazyload"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="product-details text-center">
                              <div className="rating-details d-block text-center">
                                <span className="font-light grid-content">
                                  B&Y Jacket
                                </span>
                              </div>
                              <div className="main-price mt-0 d-block text-center">
                                <h3 className="theme-color">$78.00</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade quick-view-modal" id="quick-view">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="modal-body">
              <div className="row gy-4">
                <div className="col-lg-6">
                  <div className="quick-view-image">
                    <div className="quick-view-slider ratio_2">
                      <div>
                        <img
                          src={require("../assets/images/electronics/product/1.jpg")}
                          className="img-fluid bg-img"
                          alt="product"
                        />
                      </div>
                      <div>
                        <img
                          src={require("../assets/images/electronics/product/8.jpg")}
                          className="img-fluid bg-img"
                          alt="product"
                        />
                      </div>
                      <div>
                        <img
                          src={require("../assets/images/electronics/product/9.jpg")}
                          className="img-fluid bg-img"
                          alt="product"
                        />
                      </div>
                      <div>
                        <img
                          src={require("../assets/images/electronics/product/8.jpg")}
                          className="img-fluid bg-img"
                          alt="product"
                        />
                      </div>
                    </div>
                    <div className="quick-nav">
                      <div>
                        <img
                          src={require("../assets/images/electronics/product/1.jpg")}
                          className="img-fluid lazyload"
                          alt="product"
                        />
                      </div>
                      <div>
                        <img
                          src={require("../assets/images/electronics/product/8.jpg")}
                          className="img-fluid lazyload"
                          alt="product"
                        />
                      </div>
                      <div>
                        <img
                          src={require("../assets/images/electronics/product/9.jpg")}
                          className="img-fluid lazyload"
                          alt="product"
                        />
                      </div>
                      <div>
                        <img
                          src={require("../assets/images/electronics/product/8.jpg")}
                          className="img-fluid lazyload"
                          alt="product"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="product-right">
                    <h2 className="mb-2">Smart Watch ERT2</h2>
                    <h6 className="font-light mb-1">Model LR274</h6>
                    <ul className="rating">
                      <li>
                        <i className="fas fa-star theme-color"></i>
                      </li>
                      <li>
                        <i className="fas fa-star theme-color"></i>
                      </li>
                      <li>
                        <i className="fas fa-star theme-color"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                    </ul>
                    <div className="price mt-3">
                      <h3>$20.00</h3>
                    </div>
                    <div className="color-types">
                      <h4>colors</h4>
                      <ul className="color-variant mb-0">
                        <li className="bg-half-light selected"></li>
                        <li className="bg-light1"></li>
                        <li className="bg-blue1"></li>
                        <li className="bg-black1"></li>
                      </ul>
                    </div>
                    <div className="product-details">
                      <h4>product details</h4>
                      <ul>
                        <li>
                          <span className="font-light">Display type :</span>{" "}
                          Analog
                        </li>
                        <li>
                          <span className="font-light">Mechanism:</span> Quartz
                        </li>
                        <li>
                          <span className="font-light">Warranty:</span> 1 year
                        </li>
                      </ul>
                    </div>
                    <div className="product-btns">
                      <a
                        href="cart.html"
                        className="btn btn-solid-default btn-sm"
                        data-bs-dismiss="modal"
                      >
                        Add to cart
                      </a>
                      <a
                        href="product-left-sidebar.html"
                        className="btn btn-solid-default btn-sm"
                        data-bs-dismiss="modal"
                      >
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade newletter-modal" id="newsletter">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <img
                src={require("../assets/images/newletter-icon.png")}
                className="img-fluid lazyload"
                alt=""
              />
              <div className="modal-title">
                <h2 className="tt-title">Sign up for our Newsletter!</h2>
                <p className="font-light">
                  Never miss any new updates or products we reveal, stay up to
                  date.
                </p>
                <p className="font-light">Oh, and it's free!</p>

                <div className="input-group mb-3">
                  <input
                    placeholder="Email"
                    className="form-control"
                    type="text"
                  />
                </div>

                <div className="cancel-button text-center">
                  <button
                    className="btn btn-solid-default w-100"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cookie-bar-section cookiebar-left-section">
        <img src={require("../assets/images/cookie.png")} alt="" />
        <div className="content">
          <h3>Cookies Consent</h3>
          <p className="font-light">
            This website use cookies to ensure you get the best experience on
            our website.
          </p>
          <div className="cookie-buttons">
            <button className="btn btn-solid-default" id="button">
              I understand
            </button>
            <a href="javascript:void(0)" className="btn default-light1">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;