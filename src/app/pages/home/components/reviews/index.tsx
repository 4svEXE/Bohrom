import React from "react";
import { useTranslation } from "react-i18next";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.scss";
import Review from "../../../../components/shared/review";

const Reviews: React.FC = () => {
  const { t } = useTranslation();

  const reviewsURL =
    "https://www.google.com/search?client=opera-gx&sca_esv=ead86818698e8678&cs=1&hl=cz&tbm=lcl&sxsrf=ADLYWIItGPB6L4PBleORupMi3OzbfenDyQ:1732368068664&q=Bohrom+stěhování+reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxtDA0A0JjQzNzQ0tLE0NDcyODDYyMrxiVnPIzivJzFYpLjszOyC87vDDv8FqFC5MuTruw5cLmi80Xdl3YsYiVCEUAjC9yzGUAAAA&rldimm=18161613167199411720&sa=X&ved=2ahUKEwjlhen6xfKJAxXMxQIHHSVgDIgQ9fQKegQIPhAF&biw=1344&bih=936&dpr=1#lkt=LocalPoiReviews";

  const reviews = [
    {
      rating: 5,
      author: "Renata Kynychová",
      year: 2024,
    },
    {
      rating: 5,
      author: "Petra Nevařilová",
      year: 2024,
    },
    {
      rating: 5,
      author: "Bronislav Roubal",
      year: 2024,
    },
    {
      rating: 5,
      author: "Milena Jiráková",
      year: 2024,
    },
  ];

  return (
    <section>
      <div className="Reviews flex flex-col items-center gap-10">
        <div className="flex flex-col items-center gap-3">
          <h2>{t("reviews.title")}</h2>
          <p>{t("reviews.p")}</p>
        </div>
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={50}
            observer={true}
            loop={true}
            observeParents={true}
            navigation
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 3 },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="slide">
                  <Review
                    rating={review.rating}
                    postedAt={`${review.year}`}
                    text={t(`reviews.text.${index}`)}
                    author={review.author}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <a className="link" href={reviewsURL} target="_blank">
          {t('reviews.openIn')} Google ↝
        </a>
      </div>
    </section>
  );
};

export default Reviews;
