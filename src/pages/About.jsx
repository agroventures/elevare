import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useSEO from "../hooks/useSEO";


export default function About() {
  const logoPath = "/elevare-logo.png";
  const url = window.location.href;

  useSEO({
    title: "About - ELEVARE MAGAZINE",
    description: "Inspired by the Latin word ELEVARE meaning &quot;to elevate&quot; our name embodies our mission: to celebrate the hero within every journey.",
    url,
    image_alt: "About",
    twitter_card: "summary_large_image",
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="h-px w-8 bg-linear-to-r from-red to-orange" />
                <span className="text-red text-sm font-medium tracking-[0.2em] uppercase">
                  Our Story
                </span>
                <div className="h-px w-8 bg-linear-to-r from-orange to-red" />
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6">
                About{" "}
                <span className="font-semibold bg-linear-to-r from-red to-orange bg-clip-text text-transparent">
                  Elevare
                </span>
              </h1>

              <p className="text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Inspired by the Latin word meaning "to elevate," our name
                embodies our mission: to celebrate the hero within every
                journey.
              </p>

              {/* Scroll indicator */}
              <div className="hidden lg:flex items-center gap-3 mt-12">
                <div className="w-px h-12 bg-linear-to-b from-red to-transparent" />
                <span className="text-xs tracking-widest uppercase">
                  Scroll to explore
                </span>
              </div>
            </div>

            {/* Logo Card */}
            <div className="relative group">
              {/* Main card */}
              <div className="relative w-52 h-64 lg:w-64 lg:h-80 bg-black rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl overflow-hidden">
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-10 h-10 border-l-2 border-t-2 border-red/40 rounded-tl-xl" />
                <div className="absolute bottom-4 right-4 w-10 h-10 border-r-2 border-b-2 border-red/40 rounded-br-xl" />

                {/* Logo */}
                <img
                  src={logoPath}
                  alt="Elevare Logo"
                  className="relative w-1/2 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-red rounded-full flex items-center justify-center shadow-lg shadow-red/50">
                <span className="text-white text-xs">✦</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Decorative Quote */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 text-8xl text-red/20 font-serif">
                "
              </div>
              <div className="relative bg-linear-to-br from-slate-50 to-white rounded-2xl p-8 lg:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
                <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-light italic">
                  Business is not just about numbers—it's about{" "}
                  <span className="text-red font-medium not-italic">
                    people
                  </span>
                  ,{" "}
                  <span className="text-red font-medium not-italic">
                    stories
                  </span>
                  ,{" "}
                  <span className="text-red font-medium not-italic">
                    memory
                  </span>{" "}
                  and{" "}
                  <span className="text-red font-medium not-italic">
                    meaning
                  </span>
                  .
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-linear-to-r from-red to-transparent" />
                  <span className="text-sm text-slate-500 tracking-wider uppercase">
                    Our Philosophy
                  </span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 text-8xl text-red/20 font-serif rotate-180">
                "
              </div>
            </div>

            {/* Right: Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-red to-orange flex items-center justify-center shadow-lg shadow-red/25">
                  <span className="text-white text-xl">◈</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-800">
                  Our Mission
                </h2>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                <span className="font-semibold text-slate-800">ELEVARE</span> is
                a luxury, business and lifestyle magazine with a distinctive
                vision, connecting Sri Lanka's most successful entrepreneurs at
                home and abroad with emerging businesses and ventures.
              </p>

              <p className="text-slate-500 leading-relaxed">
                We explore the intersections of enterprise, culture, and human
                experience, engaging business communities, investors, expats,
                innovators, and artists. Entrepreneurship, to us, is deeply
                personal and transformative.
              </p>

              <p className="text-slate-500 leading-relaxed">
                That's why we carve out space for art, heritage, and cultural
                exchange alongside business features and inspiring profiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
