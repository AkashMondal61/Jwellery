import React, { useState } from "react";
import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component"
// import "./Home.css"
import { Modal } from "../component/Modal";
import prdct1 from '../images/product/1.jpg'
import prdct2 from '../images/product/2.jpg'
import prdct3 from '../images/product/3.jpg'
import prdct4 from '../images/product/4.jpg'
import prdct5 from '../images/product/5.jpg'
import prdct6 from '../images/product/6.jpg'
import prdct7 from '../images/product/7.jpg'
import prdct8 from '../images/product/8.jpg'
import prdct9 from '../images/product/9.jpg'
import prdct10 from '../images/product/10.jpg'
import prdct11 from '../images/product/11.jpg'
import prdct12 from '../images/product/12.jpg'
import prdct13 from '../images/product/13.jpg'
import prdct14 from '../images/product/14.jpg'
import prdct15 from '../images/product/15.jpg'
import prdct16 from '../images/product/16.jpg'
import prdct17 from '../images/product/17.jpg'
import prdct18 from '../images/product/18.jpg'
import prdct19 from '../images/product/19.jpg'
import prdct41 from '../images/product/41.jpg'
import prdct40 from '../images/product/40.jpg'

import {FaHeart} from 'react-icons/fa'
import { HiAdjustmentsHorizontal } from "react-icons/hi2";


const options={
    edit:false,
    color:"rgba",
    activeColor:"tomato",
    value:2.5,
    isHalf:true,
}
const Product=()=>{
    const [show,setShow] = useState(false);
    return(
        <>
                    <section class="product_section p_section1 product_black_section">
            <div class="container">
                <div class="row">
                    <div class="">
                        <div class="product_area">
                            <div class="product_tab_button">
                                <ul class="nav" role="tablist">
                                    <li>
                                        <a href="#featured" class="active" data-toggle="tab" role="tab"
                                            aria-controls="featured" aria-selected="true">Featured</a>
                                    </li>
                                 

                                </ul>
                            </div>
                            {/* <div class="tab-content"> */}
                                <div class="tab-pane fade show active" id="featured" role="tabpane1">
                                    <div class="product_container">
                                        <div class="custom-row product_column3">
                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct1}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct2} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Necklace</a></h3>
                                                        <div class="price_box">
                                                            <span class="old_price">Rs. 45654</span>
                                                            <span class="current_price">Rs. 44015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct3}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct4} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Earrings</a></h3>
                                                        <div class="price_box">

                                                            <span class="current_price">Rs. 45015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct5}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct6} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Bracelet</a></h3>
                                                        <div class="price_box">
                                                            <span class="old_price">Rs. 75654</span>
                                                            <span class="current_price">Rs. 74015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct7}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct8} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Bangles</a></h3>
                                                        <div class="price_box">
                                                            <span class="old_price">Rs. 45654</span>
                                                            <span class="current_price">Rs. 44015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct9}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct10} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view" onClick={() => setShow(!show)}>Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Gemstones</a></h3>
                                                        <div class="price_box">
                                                            <span class="old_price">Rs. 45654</span>
                                                            <span class="current_price">Rs. 44015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct11}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct12} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Wedding set</a></h3>
                                                        <div class="price_box">
                                                            <span class="old_price">Rs. 45654</span>
                                                            <span class="current_price">Rs. 44015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct17}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct18} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Wedding set</a></h3>
                                                        <div class="price_box">
                                                            <span class="old_price">Rs. 45654</span>
                                                            <span class="current_price">Rs. 44015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct15}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct16} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Wedding set</a></h3>
                                                        <div class="price_box">
                                                            <span class="old_price">Rs. 45654</span>
                                                            <span class="current_price">Rs. 44015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct13}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct14} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Wedding set</a></h3>
                                                        <div class="price_box">
                                                            <span class="old_price">Rs. 45654</span>
                                                            <span class="current_price">Rs. 44015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="custom-col-5">
                                                <div class="single_product">
                                                    <div class="product_thumb">
                                                        <a href="#" class="primary_img"><img src={prdct40}
                                                                alt="product1"/></a>
                                                        <a href="#" class="secondary_img"><img
                                                                src={prdct41} alt="product1"/></a>
                                                        <div class="quick_button">
                                                            <a href="#" data-toggle="modal" data-target="#modal_box"
                                                                data-placement="top"
                                                                data-original-title="quick view">Quick View</a>
                                                        </div>
                                                    </div>
                                                    <div class="product_content">
                                                        <div class="tag_cate">
                                                            <a href="#">Ring, Necklace</a>
                                                            <a href="#">Earrings</a>
                                                        </div>
                                                        <h3><a href="#">Wedding set</a></h3>
                                                        <div class="price_box">
                                                            <span class="old_price">Rs. 45654</span>
                                                            <span class="current_price">Rs. 44015</span>
                                                        </div>
                                                        <div class="product_hover">
                                                            <div class="product_ratings">
                                                                <ul>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                    <li><a href="#"><i
                                                                                class="ion-ios-star-outline"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div class="product_desc">
                                                                <p>This is a gold ring with diamond and Lorem ipsum
                                                                    dolor sit amet.</p>
                                                            </div>
                                                            <div class="action_links">
                                                                <ul>
                                                                    <li><a href="#" data-placement="top"
                                                                            title="Add to Wishlist"
                                                                            data-toggle="tooltip">
                                                                                <FaHeart/></a></li>
                                                                    <li class="add_to_cart"><a href="#"
                                                                            title="Add to Cart">Add to Cart</a></li>
                                                                    <li><a href="#" title="Compare">
                                                                                <HiAdjustmentsHorizontal/></a>
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
                             
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>    
            
        </>
    );
}
export default Product; 