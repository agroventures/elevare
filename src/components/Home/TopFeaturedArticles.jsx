import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { articleData } from "../../data/articleData";
import { BsArrowRight } from "react-icons/bs";

export default function TopFeaturedArticles() {
  const featuredArticles = articleData.filter((a) => a.featured).slice(0, 3);

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-zinc-200 text-red text-sm font-medium rounded-full mb-4">
            Featured
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Top Featured Articles
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Discover our most impactful stories, carefully curated for curious minds
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-red to-orange mx-auto mt-6 rounded-full" />
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <ArticleCard
              key={article.id}
              slug={article.slug}
              image={article.image}
              alt={article.shortTitle}
              topic={article.title}
              author={article.author}
              date={article.date.toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              category={article.category}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-14">
          <Link
            to="/articles"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25"
          >
            View All Articles
            <div className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <BsArrowRight size={20} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}