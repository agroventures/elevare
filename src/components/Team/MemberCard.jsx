import React, { memo } from "react";

const MemberCard = memo(function MemberCard(props) {
  return (
    <div
      className="absolute w-72 cursor-pointer transition-all duration-700 ease-out"
      style={props.style}
      onClick={props.onClick}
    >
      <div
        className={`
          group bg-white
          rounded-2xl p-6 
          border border-gray-200
          shadow-xl
          ${props.isActive ? "ring-2 ring-blue/60 shadow-2xl" : ""}
          transition-all duration-500
          hover:border-purple-300
          hover:shadow-2xl
        `}
      >
        {/* Image Container */}
        <div className="relative w-full h-72 overflow-hidden rounded-xl mb-5">
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10" />

          {props.image ? (
            <img
              src={props.image}
              alt={props.name}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full bg-blue flex items-center justify-center">
              <span className="text-6xl font-bold text-white">
                {props.name.charAt(0)}
              </span>
            </div>
          )}

          {/* Active Indicator */}
          {props.isActive && (
            <div className="absolute top-4 right-4 z-20">
              <span className="flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue" />
              </span>
            </div>
          )}
        </div>

        {/* Member Info */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-1 tracking-wide">
            {props.name}
          </h3>
          <p className="text-blue text-sm font-medium uppercase tracking-wider">
            {props.role}
          </p>
        </div>
      </div>
    </div>
  );
});

export default MemberCard;