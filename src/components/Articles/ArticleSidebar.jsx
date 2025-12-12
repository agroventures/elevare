// components/ArticleSidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin, 
  FiYoutube,
  FiArrowRight,
  FiTrendingUp,
  FiMail
} from "react-icons/fi";

const trendingArticles = [
  {
    id: 1,
    title: "How to Build a Successful Startup in 2024",
    image: "/images/trending-1.jpg",
    category: "Entrepreneurship",
    readTime: 8,
    slug: "build-successful-startup-2024",
  },
  {
    id: 2,
    title: "Leadership Lessons from Top CEOs",
    image: "/images/trending-2.jpg",
    category: "Leadership",
    readTime: 6,
    slug: "leadership-lessons-top-ceos",
  },
  {
    id: 3,
    title: "The Future of Remote Work",
    image: "/images/trending-3.jpg",
    category: "Career",
    readTime: 5,
    slug: "future-remote-work",
  },
  {
    id: 4,
    title: "Mastering Personal Branding",
    image: "/images/trending-4.jpg",
    category: "Career",
    readTime: 7,
    slug: "mastering-personal-branding",
  },
];

const categories = [
  { name: "Leadership", count: 24, slug: "leadership" },
  { name: "Entrepreneurship", count: 18, slug: "entrepreneurship" },
  { name: "Innovation", count: 15, slug: "innovation" },
  { name: "Success Stories", count: 12, slug: "success-stories" },
  { name: "Lifestyle", count: 20, slug: "lifestyle" },
  { name: "Career", count: 16, slug: "career" },
];

const tags = [
  "Business",
  "Leadership",
  "Growth",
  "Marketing",
  "Technology",
  "Mindset",
  "Finance",
  "Networking",
  "Productivity",
  "Innovation",
];

export default function ArticleSidebar() {
  return (
    <div className="space-y-8 lg:sticky lg:top-24">
      {/* Trending Articles */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <FiTrendingUp className="w-5 h-5 text-amber-500" />
          <h3 className="font-bold text-lg text-gray-900">Trending Now</h3>
        </div>
        <div className="space-y-4">
          {trendingArticles.map((article, index) => (
            <Link
              key={article.id}
              to={`/articles/${article.slug}`}
              className="flex gap-4 group"
            >
              {/* Number */}
              <span className="text-3xl font-bold text-gray-200 group-hover:text-amber-500 transition-colors w-8 shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              {/* Content */}
              <div className="flex-1">
                <span className="text-xs font-medium text-amber-500 uppercase tracking-wider">
                  {article.category}
                </span>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors line-clamp-2 mt-1">
                  {article.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-lg text-gray-900 mb-6">Categories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              to={`/articles/category/${category.slug}`}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 group transition-colors"
            >
              <span className="text-gray-700 group-hover:text-amber-600 font-medium transition-colors">
                {category.name}
              </span>
              <span className="text-sm text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
                {category.count}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-lg text-gray-900 mb-6">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              to={`/articles/tag/${tag.toLowerCase()}`}
              className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Social Media */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-lg text-gray-900 mb-6">Follow Us</h3>
        <div className="grid grid-cols-5 gap-3">
          {[
            { icon: FiFacebook, color: "hover:bg-blue-600", href: "#" },
            { icon: FiTwitter, color: "hover:bg-sky-500", href: "#" },
            { icon: FiInstagram, color: "hover:bg-pink-600", href: "#" },
            { icon: FiLinkedin, color: "hover:bg-blue-700", href: "#" },
            { icon: FiYoutube, color: "hover:bg-red-600", href: "#" },
          ].map(({ icon: Icon, color, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray ${color} hover:text-white transition-all duration-300`}
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Advertisement / Promo Banner */}
      <div className="relative rounded-2xl overflow-hidden h-[300px] group">
        <img
          src="/images/magazine-promo.jpg"
          alt="Magazine Promo"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <span className="text-amber-400 text-sm font-semibold uppercase tracking-wider">
            New Release
          </span>
          <h4 className="text-xl font-bold mt-2 mb-3">
            Elevare Magazine Vol. 5
          </h4>
          <Link
            to="/magazines"
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            Get Your Copy
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}