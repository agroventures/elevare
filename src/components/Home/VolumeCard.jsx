import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi2";
import { BiArrowToRight, BiChevronRight } from "react-icons/bi";

export default function VolumeCard({ image, volume, title, date }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles?volume=${volume}`);
  };

  return (
    <div className="group cursor-pointer py-4" onClick={handleClick}>
      <div className="relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-96 md:h-75 lg:h-96 overflow-hidden">
          <img
            src={image}
            alt={`Volume ${volume}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Volume Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white rounded-full shadow-md">
            <span className="text-black text-xs font-bold tracking-wider">
              VOL. {volume}
            </span>
          </div>

          {/* Bottom Content on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-5 transform group-hover:translate-y-0 transition-transform duration-300">
            {title && (
              <h3 className="text-white font-bold text-lg mb-1 line-clamp-2 group-hover:text-blue transition-colors duration-300">
                {title}
              </h3>
            )}

            {date && <span className="text-white/80 text-sm">{date}</span>}
          </div>
        </div>

        <div className="p-4">
          <Link to={`/articles?volume=${volume}`} className="group-hover:text-blue flex items-center justify-center transition-colors duration-300">
            <p className="text-blue text-md font-semibold">Read More</p>
            <BiChevronRight className="w-5 h-5 text-blue" />
          </Link>
        </div>
      </div>
    </div>
  );
}
