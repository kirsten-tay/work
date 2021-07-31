import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carouselcomponent=()=>{
    return (
        <div class="carousel-wrapper">
            <Carousel  >
                <div>
                    <img src="../building1.jpg" />
                </div>
                <div>
                    <img src="../photo2.jpg" />
                </div>
                <div>
                    <img src="../photo4.jpg" />
                </div>
                <div>
                    <img className="" src="../photo3.jpg" />
                </div>
            </Carousel>
        </div>
    );
}

export default Carouselcomponent;
