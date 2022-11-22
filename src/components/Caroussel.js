import React, { Component } from "react";
import profil from "../img/profil.png";
import guillemet from "../img/guillemet.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Carousel.css";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className="flex items-center justify-center relative mt-20 lg:ml-16">
              <img
                src={profil}
                className="invisible lg:visible lg:block absolute w-[359px] left-28 top-14 "
                alt="image"
              />
              <div className="space-y-3 lg:w-7/12 rounded-3xl bg-gradient-to-tl from-green-200 to-blue-500 py-28 pl-20 lg:pl-52 pr-16">
                <img
                  src={guillemet}
                  className="absolute bottom-0 right-96"
                  alt="guillemet"
                />
                <h3 className="text-3xl font-medium text-white">Andry Mara</h3>
                <p className="text-lightGreen">Blues Barber Shop</p>
                <p className="text-darkGreen">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa
                  doloribus omnis, molestiae esse placeat, exercitationem magnam
                  quod molestias quia aspernatur deserunt voluptatibus.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center relative mt-20 lg:ml-16">
              <img
                src={profil}
                className="invisible lg:visible lg:block absolute w-[359px] left-28 top-14 "
                alt="image"
              />
              <div className="space-y-3 lg:w-7/12 rounded-3xl bg-gradient-to-tl from-green-200 to-blue-500 py-28 pl-20 lg:pl-52 pr-16">
                <img
                  src={guillemet}
                  className="absolute bottom-0 right-96"
                  alt="guillemet"
                />
                <h3 className="text-3xl font-medium text-white">Andry Mara</h3>
                <p className="text-lightGreen">Blues Barber Shop</p>
                <p className="text-darkGreen">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa
                  doloribus omnis, molestiae esse placeat, exercitationem magnam
                  quod molestias quia aspernatur deserunt voluptatibus.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center relative mt-20 lg:ml-16">
              <img
                src={profil}
                className="invisible lg:visible lg:block absolute w-[359px] left-28 top-14 "
                alt="image"
              />
              <div className="space-y-3 lg:w-7/12 rounded-3xl bg-gradient-to-tl from-green-200 to-blue-500 py-28 pl-20 lg:pl-52 pr-16">
                <img
                  src={guillemet}
                  className="absolute bottom-0 right-96"
                  alt="guillemet"
                />
                <h3 className="text-3xl font-medium text-white">Andry Mara</h3>
                <p className="text-lightGreen">Blues Barber Shop</p>
                <p className="text-darkGreen">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa
                  doloribus omnis, molestiae esse placeat, exercitationem magnam
                  quod molestias quia aspernatur deserunt voluptatibus.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center relative mt-20 lg:ml-16">
              <img
                src={profil}
                className="invisible lg:visible lg:block absolute w-[359px] left-28 top-14 "
                alt="image"
              />
              <div className="space-y-3 lg:w-7/12 rounded-3xl bg-gradient-to-tl from-green-200 to-blue-500 py-28 pl-20 lg:pl-52 pr-16">
                <img
                  src={guillemet}
                  className="absolute bottom-0 right-96"
                  alt="guillemet"
                />
                <h3 className="text-3xl font-medium text-white">Andry Mara</h3>
                <p className="text-lightGreen">Blues Barber Shop</p>
                <p className="text-darkGreen">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa
                  doloribus omnis, molestiae esse placeat, exercitationem magnam
                  quod molestias quia aspernatur deserunt voluptatibus.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
