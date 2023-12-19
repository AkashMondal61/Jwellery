import React from "react"
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaAngleDown } from "react-icons/fa";
export const Footer = () => {
    return (
        <>
            <footer class="footer_widgets footer_black">
                <div class="container">
                    <div class="footer_top">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-8">
                                <div class="widgets_container contact_us">
                                    <h3>About Ashirwaad</h3>
                                    <div class="footer_contact">
                                       <a href="https://maps.app.goo.gl/Hzf91uABv6isfkb79" className="address">Kolkta Baubajar Street</a>
                                        <p>Phone : <a href="tel:(+91)888888885555">(+91)32454657687</a></p>
                                        <p>Email : ashirwaadjewlersbaubajar@gmail.com</p>
                                        <a href="https://maps.app.goo.gl/4cHvjNUsq7U2vn4A9" className="address">Kolkta Nagendrabajar Street</a>
                                        <p>Phone : <a href="tel:(+91)888888885555">(+91)987656784499</a></p>
                                        <p>Email : ashirwaadjewlersnagendra@gmail.com</p>
                                        <a href="https://maps.app.goo.gl/oFws1miBo8zeHtV6A" className="address">Delhi</a>
                                        <p>Phone : <a href="tel:(+91)888888885555">(+91)984566785555</a></p>
                                        <p>Email : ashirwaadjewlersdelhi@gmail.com</p>
                                        <ul>
                                            <li><a href="#">< FaFacebook/></a></li>
                                            <li><a href="#"><FaTwitter/></a></li>
                                    
                                            <li><a href="#"><FaYoutube/></a></li>
                                            <li><a href="#"><FaLinkedin/></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-4 col-6">
                                <div class="widgets_container widget_menu">
                                    <h3>Information</h3>
                                    <div class="footer_menu">
                                        <ul>
                                            <li><a href="#">About Us</a></li>
                                            <li><a href="#">Blog</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Services</a></li>
                                            <li><a href="#">Collection</a></li>
                                            <li><a href="#">Portfolio</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-5 col-6">
                                <div class="widgets_container widget_menu">
                                    <h3>My Account</h3>
                                    <div class="footer_menu">
                                        <ul>
                                            <li><a href="#">My Account</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">Wishlist</a></li>
                                            <li><a href="#">Portfolio</a></li>
                                            <li><a href="#">Checkout</a></li>
                                            <li><a href="#">Frequently Questions</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-7">
                                <div class="widgets_container product_widget">
                                    <h3>Top Rated Products</h3>
                                    <div class="simple_product">
                                        <div class="simple_product_items">
                                            <div class="simple_product_thumb">
                                                {/* <a href="#"><img src="images/product/14.jpg" alt=""></a> */}
                                            </div>
                                            <div class="simple_product_content">
                                                <div class="tag_cate">
                                                    <a href="#">Women,</a>
                                                    <a href="#">Earrings</a>
                                                </div>
                                                <div class="product_name">
                                                    <h3><a href="#">Bracelet</a></h3>
                                                </div>
                                                <div class="product_price">
                                                    <span class="old_price">Rs. 45612.54</span>
                                                    <span class="current_price">Rs. 41612.54</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="simple_product_items">
                                            <div class="simple_product_thumb">
                                                {/* <a href="#"><img src="images/product/28.jpg" alt=""></a> */}
                                            </div>
                                            <div class="simple_product_content">
                                                <div class="tag_cate">
                                                    <a href="#">Women,</a>
                                                    <a href="#">Earrings</a>
                                                </div>
                                                <div class="product_name">
                                                    <h3><a href="#">Ring</a></h3>
                                                </div>
                                                <div class="product_price">
                                                    <span class="old_price">Rs. 75612.54</span>
                                                    <span class="current_price">Rs. 71612.54</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer_bottom">
                        <div class="row">
                            <div class="col-12">
                                <div class="copyright_area">
                                    <p>Copyright &copy; 2020 <a href="#">ashirwaad</a> All rights Reserved.</p>
                                    {/* <img src="images/icon/papyel2.png" alt=""> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}
