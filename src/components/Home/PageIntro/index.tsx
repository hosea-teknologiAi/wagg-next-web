"use client"
import React from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Icon } from "@iconify/react";
import "./styles.scss"

const PageIntro = () => {
  return (
    <section className="page-intro">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        navigation={false}
        effect="fade"
        className="swiper-wrapper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/assets/images/slide-1.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Deals Of The Week</h2>
                <Link href="/" className="btn-shop">
                  <Icon className="icon-shop" icon="eva:shopping-cart-fill" />
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/assets/images/slide-2.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>NEW PRODUCTS ALERT!</h2>
                <Link href="/" className="btn-shop">
                  <Icon className="icon-shop" icon="eva:shopping-cart-fill" />
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <Icon icon="fa-solid:shipping-fast" className="icon-shipping" />
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>On purchases over $199</p>
              </div>
            </li>

            <li>
              <Icon
                icon="fluent:box-checkmark-20-filled"
                className="icon-shipping"
              />
              <div className="data-item__content">
                <h4>99% Satisfied Customers</h4>
                <p>Our clients&apos; opinions speak for themselves</p>
              </div>
            </li>

            <li>
              <Icon icon="pepicons-pop:checkmark-filled" className="icon-shipping" />
              <div className="data-item__content">
                <h4>Originality Guaranteed</h4>
                <p>30 days warranty for each product from our store</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PageIntro