import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({
  slug,
  image,
  alt,
  topic,
  author,
  date,
  category,
  index = 0,
}) {
  return (
    <Link
      to={`/article/${slug}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <article className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={alt}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
          
          {/* Category Badge */}
          {/* {category && (
            <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-slate-700 rounded-full">
              {category}
            </span>
          )} */}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 line-clamp-2 mb-4 group-hover:text-red transition-colors duration-300">
            {topic}
          </h3>

          {/* Author & Meta */}
          <div className="flex items-center gap-3">
            {/* Author Avatar */}
            {/* <div className="w-10 h-10 rounded-full bg-linear-to-br from-red to-orange flex items-center justify-center text-white font-semibold text-sm">
              {author?.charAt(0)?.toUpperCase() || "A"}
            </div> */}

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">
                {author}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-red to-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </article>
    </Link>
  );
}