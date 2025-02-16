import React from "react";
import "./index.scss";

const PromoSection: React.FC = () => {
  return (
    <section className="relative bg-gray-100 py-16 px-8 text-center">
      {/* Контентний блок */}
      <div className="relative">
        <div className="max-w-[600px] mx-auto text-center">
          {/* Заголовок */}
          <h2 className="text-center"><span>Doplňkové</span> služby</h2>

          <p className="font-extrabold text-gray-900 mb-6 text-center">
            U nás v <span className="text-orange-600">Bohrom stěhování </span>
            neděláme jen převoz nábytku – staráme se, aby Vaše stěny vypadaly
            dokonale. Ať už potřebujete:
          </p>

          {/* Вступний текст */}
          <p className="text-lg text-gray-700 mb-16 w-full text-center"></p>
        </div>

        {/* Список послуг */}
        <div className="flex flex-wrap gap-6 justify-center">
          {/* Перша картка */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border border-gray-300 rounded-lg bg-white card-item">
            <img
              src="./assets/img/promo/1.svg"
              alt="Pefesionální malířské práce"
              className="h-48 object-cover m-auto rounded-t-lg"
            />
            <div className="p-4">
              <h6 className="">Profesionální malířské práce</h6>
              <p className="text-lg text-gray-700">
                Akrylové, latexové, dekorativní nátěry.
              </p>
            </div>
          </div>

          {/* Друга картка */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border border-gray-300 rounded-lg bg-white card-item">
            <img
              src="./assets/img/promo/2.svg"
              alt="Opravy a rekonstrukce"
              className="h-48 object-cover m-auto rounded-t-lg"
            />
            <div className="p-4">
              <h6 className="">Opravy a rekonstrukce</h6>
              <p className="text-lg text-gray-700">
                Po demontáži pro kvalitní výsledek.
              </p>
            </div>
          </div>

          {/* Третя картка */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 border border-gray-300 rounded-lg bg-white card-item">
            <img
              src="./assets/img/promo/3.svg"
              alt="Srovnání nerovností"
              className="h-48 object-cover m-auto rounded-t-lg"
            />
            <div className="p-4">
              <h6 className="">Srovnání nerovností</h6>
              <p className="">
                Přetření starých vrstev, moderní designové řešení.
              </p>
            </div>
          </div>
        </div>

        {/* Чому ми */}
        <div className="mt-20 space-y-6 text-left text-gray-800 mx-auto">
          <h2 className=" text-orange-600 mb-4 w-full text-center">Proč my?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Пункт 1 */}
            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md">
              <i className="fa fa-clock text-3xl text-orange-600"></i>
              <div className="flex flex-col">
                <h6 className="text-xl ">Rychle a čisté</h6>
                <p className="text-lg text-gray-700">
                  Žádné skvrny, žádný chaos. Respektujeme váš čas.
                </p>
              </div>
            </div>

            {/* Пункт 2 */}
            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md">
              <i className="fa fa-leaf text-3xl text-orange-600"></i>
              <div className="flex flex-col">
                <h6 className="text-xl ">Ekologické materiály</h6>
                <p className="text-lg text-gray-700">
                  Bezpečné pro děti i alergiky.
                </p>
              </div>
            </div>

            {/* Пункт 3 */}
            <div className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md">
              <i className="fa fa-paint-roller text-3xl text-orange-600"></i>
              <div className="flex flex-col">
                <h6 className="text-xl ">Od nápadu k realizaci</h6>
                <p className="text-lg text-gray-700">
                  Pomůžeme s výběrem barev i stylu!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Заклик до дії */}
        <div className="mt-20 flex flex-col gap-8 justify-center items-center ">
          <a
            href="tel:+420123456789"
            type="tel"
            className="text-orange-600 max-w-[340px] w-full md:w-auto font-semibold flex items-center phone"
          >
            <i className="fa fa-phone"></i>
            <span>Zavolejte nám</span>
          </a>

          <div className="flex gap-2 flex-wrap justify-center">
            <a href="https://t.me/+420775473171" className="Btn telegram">
              <img src="/assets/icons/tg.svg" width="40px" alt="Telegram" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61567518533792"
              className="Btn facebook"
            >
              <img src="/assets/icons/fb.svg" width="40px" alt="Facebook" />
            </a>

            <a href="https://m.me/bohrom.stehovani" className="Btn messenger">
              <img
                src="/assets/icons/fb_msgr.svg"
                width="40px"
                alt="Messenger"
              />
            </a>

            <a href="viber://chat?number=%2B420775473171" className="Btn viber">
              <img src="/assets/icons/viber.svg" width="40px" alt="Viber" />
            </a>

            <a href="https://wa.me/420775473171" className="Btn whatsapp">
              <img
                src="/assets/icons/whatsap.svg"
                width="40px"
                alt="WhatsApp"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
