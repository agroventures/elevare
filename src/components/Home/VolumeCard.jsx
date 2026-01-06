import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi2";

export default function VolumeCard({ image, volume, title, date }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles?volume=${volume}`);
  };

  return (
    <div className="group cursor-pointer py-4" onClick={handleClick}>
      <div className="relative bg-white rounded-xl overflow-hidden shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden">
          <img
            src={image}
            alt={`Volume ${volume}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-sm"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

          {/* Volume Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white rounded-full shadow-md">
            <span className="text-black text-xs font-bold tracking-wider">
              VOL. {volume}
            </span>
          </div>

          {/* Read More Overlay - Shows on Hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex flex-col items-center gap-3">
                {/* Icon Circle */}
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <HiBookOpen className="w-7 h-7 text-orange" />
                </div>
                
                {/* Read More Button */}
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-orange text-white font-semibold text-sm rounded-full shadow-lg hover:bg-red transition-colors duration-300">
                  View Articles
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Content on Image */}
          <div className="absolute bottom-0 left-0 right-0 p-5 transform group-hover:translate-y-0 transition-transform duration-300">
            {title && (
              <h3 className="text-white font-bold text-lg mb-1 line-clamp-2 group-hover:text-red transition-colors duration-300">
                {title}
              </h3>
            )}

            {date && <span className="text-white/80 text-sm">{date}</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
