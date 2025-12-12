import React from "react";
import VolumeCard from "./VolumeCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { magazineData } from "../../data/magazineData";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { HiBookOpen } from "react-icons/hi";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Magazines() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red text-sm font-medium rounded-full mb-4 border border-zinc-300 shadow-sm">
            <div className="w-4 h-4">
              <HiBookOpen size={20} />
            </div>
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Magazine Volumes
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            Explore our carefully curated collection of magazine editions
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-red to-orange mx-auto mt-6 rounded-full" />
        </div>

        {/* Swiper Container */}
        <div className="relative px-16">
          {/* Navigation Arrows */}
          <button
            id="prev-btn"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-black border border-zinc-200 transition-all duration-300 hover:bg-red hover:text-white hover:scale-110 hover:border-red"
          >
            <div className="w-5 h-5">
              <BiChevronLeft size={20} />
            </div>
          </button>

          <button
            id="next-btn"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-black border border-zinc-200 transition-all duration-300 hover:bg-red hover:text-white hover:scale-110 hover:border-red"
          >
            <div className="w-5 h-5">
              <BiChevronRight size={20} />
            </div>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            loop={true}
            speed={800}
            navigation={{
              prevEl: "#prev-btn",
              nextEl: "#next-btn",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {magazineData.map((magazine) => (
              <SwiperSlide key={magazine.id}>
                <VolumeCard
                  image={magazine.image}
                  volume={magazine.volume}
                  title={magazine.title}
                  date={magazine.date}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}