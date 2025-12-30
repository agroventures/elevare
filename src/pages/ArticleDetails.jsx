import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { articleData } from "../data/articleData";
import { BsArrowRight } from "react-icons/bs";
import ArticleDetailCard from "../components/Articles/ArticleDetailCard";
import { FaCopy, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import useSEO from "../hooks/useSEO";
import toast from "react-hot-toast";

export default function ArticleDetails() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const url = window.location.href;

  useEffect(() => {
    // Find the article by slug
    const foundArticle = articleData.find((a) => a.slug === slug);
    setArticle(foundArticle);

    // Get related articles (same category, excluding current)
    if (foundArticle) {
      const related = articleData
        .filter(
          (a) =>
            a.category === foundArticle.category && a.slug !== foundArticle.slug
        )
        .slice(0, 3);
      setRelatedArticles(related);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [slug]);

  useSEO({
    title: article ? article.title : "Loading...",
    description: article?.excerpt || article?.title,
    url,
    image_alt: article ? article.title : "Loading...",
    twitter_card: "summary_large_image",
  });

  // Reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
  };

  // Share functions
  const shareOnWhatsapp = () => {
    const message = `${article.title}\n\n${window.location.href}`;
  
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappUrl, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
  
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };
  
  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
  
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">

      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-linear-to-r from-red to-orange z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative">
          {/* Featured Image */}
          <div className="w-full h-[50vh] md:h-[60vh] relative">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
          </div>

          {/* Article Header Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              {/* Category Badge */}
              {/* <Link
                to={`/articles?category=${article.category}`}
                className="inline-block px-4 py-1.5 bg-red text-white text-sm font-medium rounded-full mb-4 hover:bg-amber-600 transition-colors"
              >
                {article.category}
              </Link> */}

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {article.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-medium">{article.author}</p>
                  </div>
                </div>

                <span className="hidden md:block w-1 h-1 bg-white/50 rounded-full" />

                {/* Date */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          <div className="flex gap-8">
            {/* Sticky Social Share - Desktop */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 flex flex-col gap-3">
                <button
                  onClick={shareOnWhatsapp}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange hover:text-white flex items-center justify-center transition-all duration-300"
                  title="Share on WhatsApp"
                >
                  <div className="w-5 h-5">
                    <FaWhatsapp size={20} />
                  </div>
                </button>

                <button
                  onClick={shareOnLinkedIn}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange hover:text-white flex items-center justify-center transition-all duration-300"
                  title="Share on LinkedIn"
                >
                  <div className="w-5 h-5">
                    <FaLinkedin size={20} />
                  </div>
                </button>

                <button
                  onClick={shareOnFacebook}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange hover:text-white flex items-center justify-center transition-all duration-300"
                  title="Share on Facebook"
                >
                  <div className="w-5 h-5">
                    <FaFacebook size={20} />
                  </div>
                </button>

                <button
                  onClick={copyLink}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center transition-all duration-300"
                  title="Copy Link"
                >
                  <div className="w-5 h-5">
                    <FaCopy size={20} />
                  </div>
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <article className="flex-1 min-w-0">
              {/* Article Body */}
              <div className="max-w-none">
                {
                  article.content.heading && (
                    <h2 className="text-lg font-semibold text-center pb-3">{article.content.heading}</h2>
                  )
                }
                {
                  article.content.body && (
                    article.content.body
                  )
                }
              </div>

              {article.album && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="columns-2 md:columns-3 gap-4">
                    {article.album.map((url, index) => (
                      <div
                        key={index}
                        className="mb-4 break-inside-avoid overflow-hidden rounded-lg group"
                      >
                        <img
                          src={url}
                          alt={`${article.title} - ${index + 1}`}
                          className="w-full object-cover transition-transform duration-700 cursor-pointer group-hover:scale-110"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {article.bottomQuote && (
                <div className="py-10 font-bold text-lg text-center">{article.bottomQuote}</div>
              )}

              {/* Tags */}
              {/* {article.tags && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <Link
                        key={index}
                        to={`/articles?tag=${tag}`}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-amber-100 hover:text-amber-700 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )} */}

              <div className="mt-10 pt-8 border-t border-gray-200 flex justify-center">
                <a href="https://subscribe.elevare.lk/">
                  <button className="bg-linear-to-r from-red to-orange text-white py-4 px-8 rounded-full font-semibold hover:shadow-lg hover:shadow-red/25 hover:scale-105 transition-all duration-300">
                    Subscribe
                  </button>
                </a>
              </div>

              {/* Mobile Share Buttons */}
              <div className="lg:hidden mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm font-medium text-gray-500 mb-4">
                  Share this article
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={shareOnWhatsapp}
                    className="flex-1 py-3 bg-gray-100 hover:bg-orange hover:text-white rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <div className="w-5 h-5">
                      <FaWhatsapp size={16} />
                    </div>
                    <span className="text-sm font-medium">WhatsApp</span>
                  </button>

                  <button
                    onClick={shareOnFacebook}
                    className="flex-1 py-3 bg-gray-100 hover:bg-orange hover:text-white rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <div className="w-5 h-5">
                      <FaFacebook size={16} />
                    </div>
                    <span className="text-sm font-medium">Facebook</span>
                  </button>

                  <button
                    onClick={copyLink}
                    className="flex-1 py-3 bg-gray-100 hover:bg-gray-800 hover:text-white rounded-lg flex items-center justify-center gap-2 transition-all"
                  >
                    <FaCopy size={16} />
                    <span className="text-sm font-medium">Copy</span>
                  </button>
                </div>
              </div>

              {/* Author Box */}
              {/* <div className="mt-12 p-6 md:p-8 bg-linear-to-br from-gray-50 to-gray-100 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={article.author?.avatar || "/default-avatar.png"}
                    alt={article.author?.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-white shadow-lg"
                  />
                  <div className="flex-1">
                    <p className="text-sm text-amber-600 font-medium mb-1">
                      Written by
                    </p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {article.author?.name}
                    </h3>
                    <p className="text-gray mb-4">
                      {article.author?.bio ||
                        "Writer and content creator passionate about sharing knowledge and insights with readers worldwide."}
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={article.author?.twitter || "#"}
                        className="text-gray-400 hover:text-orange transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                      <a
                        href={article.author?.linkedin || "#"}
                        className="text-gray-400 hover:text-orange transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </article>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h2>
                <p className="text-gray">
                  Continue reading more articles in this category
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((relatedArticle) => (
                  <div
                    key={relatedArticle.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <ArticleDetailCard
                      key={relatedArticle.id}
                      article={relatedArticle}
                    />
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/articles"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors"
                >
                  View All Articles
                  <div className="w-5 h-5">
                    <BsArrowRight size={20} />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
