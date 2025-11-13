


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co/s9d3HKS4/45c48721-a61f-419c-9ea4-557fec69af7c.jpg",
      text: "Pay Your Utility Bills Easily & Securely",
    },
    {
      id: 2,
      img: "https://i.ibb.co/gb7txDy2/abb35d90-0aa1-4138-8661-624f96e5a469.jpg",
      text: "Track Electricity, Gas, Water & Internet Bills",
    },
    {
      id: 3,
      img: "https://i.ibb.co/q3wSYrSx/adf726c4-5f9e-4673-9d14-f9cd45e609fe.jpg",
      text: "Never Miss a Bill — Get Reminders & Pay On Time",
    },
    {
      id: 4,
      img: "https://i.ibb.co/DDVzzbVx/e42eb8bc-1471-4fba-a00d-8d6d3c6e02f6.jpg",
      text: "Track Electricity, Gas, Water & Internet Bills",
    },
  ];

  return (
    <div className="w-full rounded-xl overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
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

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center px-4">
                <h2 className="text-white text-xl md:text-4xl font-bold text-center">
                  <Typewriter
                    words={[slide.text]}  // Slide এর text
                    loop={true}           // বারবার টাইপ হবে
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}      // টাইপ হওয়ার পরে next টাইপের delay
                  />
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
