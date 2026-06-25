import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EMagazinePreview from "../components/Home/EMagazine";
import TopFeaturedArticles from "../components/Home/TopFeaturedArticles";
import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import Magazines from "../components/Home/Magazines";
import useSEO from "../hooks/useSEO";

export default function Home() {
  const url = window.location.href;

  useSEO({
    title: "ELEVARE MAGAZINE",
    description: "ELEVARE is a luxury, business and lifestyle magazine with a distinctive vision, connecting Sri Lanka’s most successful entrepreneurs at home and abroad with emerging businesses and ventures. We explore the intersections of enterprise, culture, and human experience, engaging business communities, investors, expats, innovators, and artists.",
    url,
    image_alt: "Home",
    twitter_card: "summary_large_image",
  });

  return (
    <div>
      <Header />
      <Hero />
      <TopFeaturedArticles />
      <Intro />
      <Magazines />
      <EMagazinePreview />
      <Footer />
    </div>
  );
}
