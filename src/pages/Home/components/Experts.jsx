import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ExpertData } from './data'; 

const Expert = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section style={{ backgroundColor: "rgba(155, 77, 218, 0.25)" }}>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="text-center">
                    <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">TECH EXPERTS</p>
                    <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
                        Let's meet the expert.
                    </h2>
                </div>
                <Slider {...settings}>
                    {ExpertData.map((items, i) => (
                        <div key={i}>
                            <div className="m-3 py-14 my-10 text-center">
                                <div className="relative" style={{ position: "relative" }}>
                                    <img
                                        src={items.imgSrc}
                                        alt="expert"
                                        width={362}
                                        height={262}
                                        style={{ display: "inline-block", margin: "auto" }}
                                    />
                                    <div style={{ position: "absolute", top: "50%", right: "2%" }}>
                                        <img
                                            src="/images/home/expert/Linkedin.svg"
                                            alt="linkedin"
                                            width={220}
                                            height={120}
                                        />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-semibold text-lightblack">{items.name}</h3>
                                <h4 className="text-lg font-normal text-lightblack pt-4 pb-2 opacity-50">{items.profession}</h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Expert;
