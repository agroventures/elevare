import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticleDetailCard from "../components/Articles/ArticleDetailCard";
import { articleData } from "../data/articleData";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaMagnifyingGlass } from "react-icons/fa6";
import useSEO from "../hooks/useSEO";

export default function Articles() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(10);

  // Get volume from URL params, default to "All"
  const volumeParam = searchParams.get("volume");
  const [selectedVolume, setSelectedVolume] = useState(() => {
    if (volumeParam) {
      const parsedVolume = parseInt(volumeParam);
      return isNaN(parsedVolume) ? "All" : parsedVolume;
    }
    return "All";
  });

  const url = window.location.href;

  useSEO({
    header: "Articles - ELEVARE Magazine",
    description: "Elevare Magazine recently hosted its much-anticipated event on the 16th of July at Cumulus Ballroom at Cinnamon Life, Colombo, bringing together a vibrant mix of industry leaders, creative minds, and loyal readers. The evening was marked by elegance, inspiring conversations, and stunning showcases that reflected the magazine’s essence. With its graceful setting and the presence of influential personalities, the event radiated beauty, sophistication, and celebration of ideas.",
    url,
    image_alt: "Articles",
    twitter_card: "summary_large_image",
  });

    // Extract unique volumes from articleData (volumes are numbers)
  const volumes = useMemo(() => {
    const uniqueVolumes = [
      ...new Set(
        articleData
          .map((article) => article.volume)
          .filter((v) => v !== undefined && v !== null)
      ),
    ];
    // Sort numerically
    uniqueVolumes.sort((a, b) => a - b);
    return ["All", ...uniqueVolumes];
  }, []);

  const filteredArticles = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();

    return [...articleData]
      .sort((a, b) => b.id - a.id)
      .filter((article) => {
        // Volume filter (compare as numbers)
        if (selectedVolume !== "All" && article.volume !== selectedVolume) {
          return false;
        }

        // Search filter
        const title = (article.title || "").toLowerCase();
        const excerpt = (article.excerpt || "").toLowerCase();

        if (!query) return true;

        return title.includes(query) || excerpt.includes(query);
      });
  }, [searchQuery, selectedVolume]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);

  const handleVolumeChange = (volume) => {
    setSelectedVolume(volume);
    setVisibleCount(10);

    // Update URL params
    if (volume === "All") {
      searchParams.delete("volume");
    } else {
      searchParams.set("volume", volume.toString());
    }
    setSearchParams(searchParams);
  };

  // Helper to display volume label
  const getVolumeLabel = (volume) => {
    if (volume === "All") return "All";
    return `Volume ${volume}`;
  };

  return (
    <div>
      <Header />

      <main className="max-w-7xl mx-auto mt-20 py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6">
          Articles
        </h2>

        {/* Volume Filter */}
        <section className="bg-white border-b border-gray-200 sticky top-16 z-30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              {volumes.map((volume) => (
                <button
                  key={volume}
                  onClick={() => handleVolumeChange(volume)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    selectedVolume === volume
                      ? "bg-blue text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {getVolumeLabel(volume)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
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
                    className="w-full border border-gray-300 pl-10 pr-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent transition-all"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setVisibleCount(10);
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-6">
                {selectedVolume !== "All" && (
                  <span className="text-blue text-sm font-medium">
                    Showing: Volume {selectedVolume}
                  </span>
                )}
                <span className="text-gray-500 text-sm ml-auto">
                  {filteredArticles.length} article
                  {filteredArticles.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Show message when no results */}
              {visibleArticles.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  {searchQuery
                    ? `No articles found for "${searchQuery}"${
                        selectedVolume !== "All"
                          ? ` in Volume ${selectedVolume}`
                          : ""
                      }`
                    : `No articles found in Volume ${selectedVolume}`}
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
                    className="px-8 py-3 bg-blue text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-300"
                  >
                    Load Older Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
