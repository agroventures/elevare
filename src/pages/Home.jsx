import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EMagazinePreview from "../components/Home/EMagazine";
import TopFeaturedArticles from "../components/Home/TopFeaturedArticles";
import Hero from "../components/Home/Hero";
import Intro from "../components/Home/Intro";
import Magazines from "../components/Home/Magazines";

export default function Home() {
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
