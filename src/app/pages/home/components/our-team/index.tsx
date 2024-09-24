import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import "./index.scss";
import Loader from "../../../../components/shared/loader";

const OurTeam: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="OurTeam flex flex-col gap-20">
        <h2>
          Наша <span> команда в дії</span>
        </h2>

        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className="slide">
                <Loader></Loader>
                <img src="/Bohrom/assets/img/our-team/1.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <Loader></Loader>
                <img src="/Bohrom/assets/img/our-team/2.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <Loader></Loader>
                <img src="/Bohrom/assets/img/our-team/3.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <Loader></Loader>
                <img src="/Bohrom/assets/img/our-team/1.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <Loader></Loader>
                <img src="/Bohrom/assets/img/our-team/2.png" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <Loader></Loader>
                <img src="/Bohrom/assets/img/our-team/3.png" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
