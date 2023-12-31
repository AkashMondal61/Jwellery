import { Fragment } from "react"
import react from "react-dom"
// import "./navbar.css"
import { NavLink } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import ash from '../images/logo/logo-ash.png' 
import phn from "../images/icon/icon_phone.png"
import prdct from "../images/nav-product/product.jpg"
// 'images/logo/logo-ash.png'
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaAngleDown ,FaOpencart,FaSearch,FaHeart } from "react-icons/fa";
export const Navbar = () => {

    return (
        <>
         <header className="header_area header_black">
            {/* <!-- header top starts --> */}
            <div className="header_top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="social_icone">
                                <ul>
                                    <li><a href="#">< FaFacebook/></a></li>
                                    <li><a href="#">< FaTwitter/></a></li>
                                    <li><a href="#">< FaLinkedin/></a></li>
                                    <li><a href="#"><FaYoutube/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="top_right text-right">
                                <ul>
                                    <li className="language">
                                        <a href="#">English <i className="ion-chevron-down"></i></a>
                                        <ul className="dropdown_language">
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">Germany</a></li>
                                            <li><a href="#">Hindi</a></li>
                                        </ul>
                                    </li>
                                    <li className="currency">
                                        <a href="#">INR <i className="ion-chevron-down"></i></a>
                                        <ul className="dropdown_currency">
                                            <li><a href="#">USD - Dollar</a></li>
                                            <li><a href="#">EUR - Euro</a></li>
                                            <li><a href="#">GBP - British Pound</a></li>
                                        </ul>
                                    </li>
                                    <li className="top_links">
                                        <a href="#">My Account <i className="ion-chevron-down"></i></a>
                                        <ul className="dropdown_links">
                                            <li><a href="#">Checkout</a></li>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Shopping Cart</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- header top ends --> */}

            {/* <!-- header middle starts --> */}
            <div className="header_middel">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-5">
                            <div className="home_contact">
                                <div className="contact_icone">
                                    <img src={phn} alt=""/>
                                </div>
                                <div className="contact_box">
                                    <p>Inquiry / Helpline : <a href="tel: 1231231234">1231231234</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 col-4">
                            <div className="logo">
                                <a href="index.html"><img src={ash} alt=""/></a>
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-7 col-6">
                            <div className="middel_right">
                                <div className="search_btn">
                                    <a href="#"><FaSearch/></a>
                                    <div className="dropdown_search">
                                        <form action="#">
                                            <input type="text" placeholder="Search Product ...."/>
                                            <button type="submit"><FaSearch/></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="wishlist_btn">
                                    <a href="#"><FaHeart/></a>
                                </div>
                                <div className="cart_link">
                                    <a href="#"><FaOpencart/><span className="cart_text_quantity">Rs.
                                            67,598</span><i className="ion-chevron-down"></i></a>
                                    <span className="cart_quantity">2</span>

                                    {/* <!-- mini cart --> */}
                                    <div className="mini_cart">
                                        <div className="cart_close">
                                            <div className="cart_text">
                                                <h3>cart</h3>
                                            </div>
                                            <div className="mini_cart_close">
                                                <a href="javascript:void(0)"><FaOpencart /></a>
                                            </div>
                                        </div>
                                        <div className="cart_item">
                                            <div className="cart_img">
                                                <a href="#"><img src={prdct} alt=""/></a>
                                            </div>
                                            <div className="cart_info">
                                                <a href="#">Earings</a>
                                                <span className="quantity">Qty : 1</span>
                                                <span className="price_cart">Rs. 54,599</span>
                                            </div>
                                            <div className="cart_remove">
                                                <a href="#"><FaOpencart /></a>
                                            </div>
                                        </div>
                                        <div className="cart_item">
                                            <div className="cart_img">
                                                <a href="#"><img src="images/nav-product/product2.jpg" alt=""/></a>
                                            </div>
                                            <div className="cart_info">
                                                <a href="#">Bracelet</a>
                                                <span className="quantity">Qty : 1</span>
                                                <span className="price_cart">Rs. 12,999</span>
                                            </div>
                                            <div className="cart_remove">
                                                <a href="#"><FaOpencart /></a>
                                            </div>
                                        </div>
                                        <div className="cart_total">
                                            <span>Subtotal : </span>
                                            <span>Rs. 67,598</span>
                                        </div>
                                        <div className="mini_cart_footer">
                                            <div className="cart_button view_cart">
                                                <a href="#">View Cart</a>
                                            </div>
                                            <div className="cart_button checkout">
                                                <a href="#" className="active">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- mini cart ends  --> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- header middle ends --> */}

            {/* <!-- header bottom starts --> */}

            <div className="header_bottom sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <div className="main_menu_inner">
                                <div className="logo_sticky">
                                    <a href="#"><img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.liblogo.com%2Flib%2Fjewellery-logo.html&psig=AOvVaw21wsxOLvi5uJBcdlKAT5vU&ust=1703007711169000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMjig6bEmYMDFQAAAAAdAAAAABAD" alt="logo"/></a>
                                </div>
                                <div className="main_menu">
                                    <nav>
                                        <ul>
                                            <li className="active">
                                                <a href="#">Home <i className="ion-chevron-down"></i></a>
                                                <ul className="sub_menu">
                                                    <li><a href="#">Banner</a></li>
                                                    <li><a href="#">Featured</a></li>
                                                    <li><a href="#">Collection</a></li>
                                                    <li><a href="#">Best Selling</a></li>
                                                    <li><a href="#">News</a></li>
                                                    <li><a href="#">Blog</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">Category <FaAngleDown/></a>
                                                {/* <ul className="mega_menu">
                                                    <li>
                                                        <a href="#">Women</a>
                                                        <ul>
                                                            <li><a href="#">Earring</a></li>
                                                            <li><a href="#">Pendant</a></li>
                                                            <li><a href="#">Rings</a></li>
                                                            <li><a href="#">Chain</a></li>
                                                            <li><a href="#">Bangles</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Men</a>
                                                        <ul>
                                                            <li><a href="#">Ring</a></li>
                                                            <li><a href="#">Pendant</a></li>
                                                            <li><a href="#">Bracelet</a></li>
                                                            <li><a href="#">Chain</a></li>
                                                            <li><a href="#">Gemstone</a></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a href="#">Other</a>
                                                        <ul>
                                                            <li><a href="#">Platinium</a></li>
                                                            <li><a href="#">Silver</a></li>
                                                            <li><a href="#">Coins</a></li>
                                                            <li><a href="#">Gift Card</a></li>
                                                        </ul>
                                                    </li>

                                                </ul> */}
                                            </li>
                                            <li>
                                                <a href="#">Uncut Diamonds <FaAngleDown/></a>
                                                <ul className="sub_menu pages">
                                                    <li><a href="#">Earrings</a></li>
                                                    <li><a href="#">Pendant</a></li>
                                                    <li><a href="#">Ring</a></li>
                                                    <li><a href="#">Bracelet</a></li>
                                                    <li><a href="#">Necklace Set</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">About Us</a></li>
                                            <li>
                                                <a href="#">Special Collection <FaAngleDown/></a>
                                                <ul className="sub_menu pages">
                                                    <li><a href="#">Gemstone</a></li>
                                                    <li><a href="#">Gold</a></li>
                                                    <li><a href="#">Rose Gold</a></li>
                                                    <li><a href="#">Silver</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        </>
    )
}