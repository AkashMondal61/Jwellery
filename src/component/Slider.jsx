import React from "react";
import Carousel from "react-material-ui-carousel";
import slider3 from '../images/slider/3.jpg'
import slider2 from '../images/slider/2.jpg'
export const Slider=()=>{
    return (
        <>
        <Carousel>
            
                    <div class="slider_area slider_black owl-carousel"  style={{backgroundImage:`url(${slider3})`}}>
            <div class="single_slider" data-bgimg="images/slider/1.png">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <div class="slider_content">
                                <p data-aos='fade-right' data-aos-duration='4000'>exclusive offer -25% off this week</p>
                                <h1 data-aos='fade-left' data-aos-duration='4000'>Ring</h1>
                                <span>22 Carat Platinum Ring for wedding</span>
                                <p class="slider_price">starting at <span>Rs. 89,999</span></p>
                                <a href="#" class="button" data-aos='fade-left'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>

            <div class="slider_area slider_black owl-carousel" style={{backgroundImage:`url(${slider2})`}}>
            <div class="single_slider" data-bgimg="images/slider/2.png">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <div class="slider_content">
                                <p data-aos='fade-right' data-aos-duration='4000'>exclusive offer -20% off this week</p>
                                <h1 data-aos='fade-right' data-aos-duration='4000'>Necklace</h1>
                                <span>22 Carat gold necklace for wedding</span>
                                <p class="slider_price">starting at <span>Rs. 75,999</span></p>
                                <a href="#" class="button">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>

            </Carousel>
            {/* <div class="single_slider" data-bgimg="images/slider/2.jpg">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-12">
                            <div class="slider_content">
                                <p>exclusive offer -40% off this week</p>
                                <h1>Earings and Pendant</h1>
                                <span>Complete bridal set with white pearls</span>
                                <p class="slider_price">starting at <span>Rs. 89,499</span></p>
                                <a href="#" class="button">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div> */}
  
       
        </>
    )
}