// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// eslint-disable-next-line react-refresh/only-export-components, react/display-name
export default () => {
  return (
    <div className="swiper">
      <h1>Customer Review</h1>

      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <div className="margin">
          <SwiperSlide>
            <div className="row">
              <h4>
                &quot;no cap started using this product two years ago, never
                gone back to any other thing since...&quot;
              </h4>
              <h3>~Opa Silas</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <h4>
                &quot;Amazing at maintaining my shoe’s health quite literally,
                10/10...&quot;
              </h4>
              <h3>~Thundaie</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <h4>&quot;Works like magic. No doubts...&quot;</h4>
              <br />
              <h3>~Shizzi03</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <h4>
                &quot;Packaging is on point, content works like magic and i like
                the fact that it’s super affordable...&quot;
              </h4>
              <br />
              <h3>~Kintanbilli</h3>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row">
              <h4>&quot;My shoes love you...&quot;</h4>
              <br />
              <h3>~Officiallayon</h3>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};
