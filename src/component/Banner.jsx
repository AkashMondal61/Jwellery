import React from "react";
import bg1 from "../images/banner/bg-1.jpg"
import bg2 from "../images/banner/bg-2.jpg"
import bg3 from "../images/banner/bg-3.jpg" 
export const Banner=()=>{
    return(
        <>
        <section class="banner_section banner_black">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="single_banner">
                            <div class="banner_thumb">
                                <a href="#"><img src={bg1} alt="banner1"/></a>
                                <div class="banner_content">
                                    <p>New Design</p>
                                    <h2>Small design Rings</h2>
                                    <span>Sale 20% </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single_banner">
                            <div class="banner_thumb">
                                <a href="#"><img src={bg2} alt="banner2"/></a>
                                <div class="banner_content">
                                    <p>Bestselling Rings</p>
                                    <h2>White gold rings</h2>
                                    <span>Sale 10% </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="single_banner">
                            <div class="banner_thumb">
                                <a href="#"><img src={bg3} alt="banner3"/></a>
                                <div class="banner_content">
                                    <p>Featured Rings</p>
                                    <h2>Platinium Rings</h2>
                                    <span>Sale 30% </span>
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