import React from "react";
import styled from "styled-components";
import "../../assets/css/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImageSlide() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="mainContainer">
            <Slider {...settings}>
                <div className="slideContainer">
                    <Overlay></Overlay>
                    <img
                        src="https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house4.jpg"
                        width="100%"
                        alt="House images"
                        className="image"
                    />
                </div>
                <div>
                    <Overlay></Overlay>
                    <img
                        src="https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house2.jpg"
                        width="100%"
                        alt="House images"
                        className="image"
                    />
                </div>
                <div>
                    <Overlay></Overlay>
                    <img
                        src="https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house3.jpg"
                        width="100%"
                        alt="House images"
                        className="image"
                    />
                </div>
                <div>
                    <Overlay></Overlay>
                    <img
                        src="https://stikcon-website.sgp1.digitaloceanspaces.com/stikcon-user-images/house4.jpg"
                        width="100%"
                        alt="House images"
                        className="image"
                    />
                </div>
            </Slider>
        </div>
    );
}

export default ImageSlide;

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.2);
    z-index: 10000;
    position: absolute;
    left: 0;
    top: 0px;
    width: 100%;
    min-height: 120vh;
    max-height: 100vh;
`;
