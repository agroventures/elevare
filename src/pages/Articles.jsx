import React, { useMemo, useState } from "react";
import ArticleDetailCard from "../components/Articles/ArticleDetailCard";
import { articleData } from "../data/articleData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return [...articleData]
      .sort((a, b) => b.id - a.id)
      .filter((article) => {
        const title = (article.title || "").toLowerCase();
        const excerpt = (article.excerpt || "").toLowerCase();

        if (!query) return true;

        return title.includes(query) || excerpt.includes(query);
      });
  }, [searchQuery]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  return (
    <div>
      <Header />

      <main className="max-w-7xl mx-auto mt-20 py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6">
          Articles
        </h2>

        {/* Category Filter */}
        {/* <section className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-amber-500 text-white"
                      : "bg-gray-100 text-gray hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section> */}

        {/* Main Content with Sidebar */}
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <div className="relative w-full">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400">
                    <FaMagnifyingGlass size={20} />
                  </div>

                  <input
                    type="search"
                    placeholder="Search articles…"
                    className="w-full border border-gray-300 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(10);
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end mb-6">
                <span className="text-gray-500 text-sm">
                  {filteredArticles.length} article
                  {filteredArticles.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Show message when no results */}
              {visibleArticles.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  No articles found for "{searchQuery}"
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {visibleArticles.map((article) => (
                    <ArticleDetailCard key={article.id} article={article} />
                  ))}
                </div>
              )}

              {visibleCount < filteredArticles.length && (
                <div className="text-center mt-12">
                  <button
                    onClick={() => setVisibleCount(filteredArticles.length)}
                    className="px-8 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    Load Older Articles
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            {/* <aside className="lg:w-[380px] shrink-0">
              <ArticleSidebar />
            </aside> */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
