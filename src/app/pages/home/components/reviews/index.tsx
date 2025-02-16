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
      author: "Vít Dlouhý",
      year: 2025,
      text: "Skvělá zkušenost, rozhodně doporučuji i ostatním. Od prvního kontaktu až po samotné stěhování, vše naprosto bez problémů. Velmi ochotné jednání a velmi dobrá cena! Děkujeme :-)",
    },
    {
      rating: 5,
      author: "Lea Ťoupalová",
      year: 2025,
      text: "Maximální spokojenost! Celý proces stěhování bytu byl úplně bez problémů. Blesková reakce na poptávku, firma přijela včas. Velmi rychlá a profesionální práce s lidským přístupem a za skvělou cenu!! Doporučuji!!",
    },
    {
      rating: 5,
      author: "Renata Kynychová",
      year: 2024,
      text: "Jsem naprosto spokojená.Přijeli v domluvený čas, vše bylo odstěhováno rychle. Profesionální a milý přístup.",
    },
    {
      rating: 5,
      author: "Petra Nevařilová",
      year: 2024,
      text: "Vse probehlo perfektne, profesionalne a rychle. Moc mile jednani, dochvilnost a preciznost muzu jen pochvalit a doporucit. 👌",
    },
    {
      rating: 5,
      author: "Bronislav Roubal",
      year: 2024,
      text: "Rychlé, profesionální, vše na jedničku:-)",
    },
    {
      rating: 5,
      author: "Milena Jiráková",
      year: 2024,
      text: "Vše proběhlo v pohodě,příjemné jednání,dobrá cena,vše bylo tak,jak jsme se domluvili. Mohu vřele doporučit a pokud budu potřebovat tyto služby,obrátím se znovu na ně.",
    },
    {
      rating: 5,
      author: "Kveta Vychterova",
      year: 2024,
      text: "Velká spokojenosti 👍 profesionální,milý a ochotný přístup. Přijeli v domluvený čas a vše bylo tak,jak jsme se domluvili. 👌",
    },
    {
      rating: 5,
      author: "Nell Ťoupalová",
      year: 2024,
      text: `kvělá a rychlá domluva.
Samotné stěhování proběhlo rychle a bez problémů, pánové jsou precizní a opatrní .
Byli v domluvený čas na místě, nábytek který by se mohl poničit zakryli. A cena oproti konkurenci výborná. Určitě bych se na pány znovu obrátila .`,
    },
    {
      rating: 5,
      author: "Lenka Marie Oeckinghaus",
      year: 2024,
      text: `Velmi profesionální a k tomu navíc příjemný přístup personálu.
Od poptávky, přes osobní návštěvu, cenovou kalkulaci a následnou objednávku, až po samotné uskutečnění vyklizení našeho starého domu, který jsme potřebovali připravit pro následnou rekonstrukci.
Vše proběhlo dle domluvy.
Můžeme jen doporučit. 👍🙂👍
Děkujeme.`,
    },
    {
      rating: 5,
      author: "Petra",
      year: 2024,
      text: "Výborný. Přijeli na čas. Vše pečlivě zabalili. Nic se nerozbilo. Za mě určitě ano.",
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
                    text={`${review.text}`}
                    author={review.author}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <a className="link" href={reviewsURL} target="_blank">
          {t("reviews.openIn")} Google ↝
        </a>
      </div>
    </section>
  );
};

export default Reviews;
