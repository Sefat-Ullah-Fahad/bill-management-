import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/s9d3HKS4/45c48721-a61f-419c-9ea4-557fec69af7c.jpg",
      text: "Pay Your Utility Bills Easily & Securely",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/gb7txDy2/abb35d90-0aa1-4138-8661-624f96e5a469.jpg",
      text: "Track Electricity, Gas, Water & Internet Bills",
    },
    {
      id: 3,
      img: "https://i.ibb.co.com/q3wSYrSx/adf726c4-5f9e-4673-9d14-f9cd45e609fe.jpg",
      text: "Never Miss a Bill — Get Reminders & Pay On Time",
    },
    {
      id: 4,
      img: "https://i.ibb.co.com/DDVzzbVx/e42eb8bc-1471-4fba-a00d-8d6d3c6e02f6.jpg",
      text: "Track Electricity, Gas, Water & Internet Bills",
    },
  ];

  return (
    <div className="w-full rounded-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}   // Mouse drag
        spaceBetween={0}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[350px] md:h-[500px]">
              <img
                src={slide.img}
                className="w-full h-full object-cover"
                alt="banner"
              />
              <div className="absolute inset-0 bg-black/50 z-0 flex items-center justify-center">
                <h2 className="text-white text-xl md:text-4xl font-bold text-center px-4">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;

