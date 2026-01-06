import React from "react";
import { Link } from "react-router-dom";

export default function ArticleDetailCard({ article }) {
  return (
    <Link to={`/article/${article.slug}`} className="group block">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
          {/* Category Badge */}
          {/* <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold rounded-full">
            {article.category}
          </span> */}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue transition-colors duration-300 line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray text-sm mb-4 line-clamp-3 flex-1">
            {article.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            {/* Author */}
            <div className="flex items-center gap-3">
              {/* <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-8 h-8 rounded-full object-cover"
              /> */}
              <div>
                <p className="text-sm font-medium text-gray-900">
                  {article.author}
                </p>
                <p className="text-xs text-gray-500">{article.date}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}