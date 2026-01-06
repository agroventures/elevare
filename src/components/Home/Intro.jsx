import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Intro() {
  const logoPath = "/elevare-logo.png";

  return (
    <section className="relative py-24 px-4 bg-zinc-50 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-blue" />
              <span className="text-sm font-medium tracking-widest text-blue uppercase">
                Welcome
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl tracking-[0.3em] font-light text-slate-800 uppercase">
              Elevare
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
              <span className="font-semibold text-slate-800">ELEVARE</span> is a
              luxury, business, and lifestyle magazine with a distinctive
              vision, connecting Sri Lanka's most successful entrepreneurs at
              home and abroad with emerging businesses and ventures.
            </p>

            <p className="text-slate-500 text-base leading-relaxed max-w-xl">
              We explore the intersections of enterprise, culture, and human
              experience, engaging business communities, investors, expats,
              innovators, and artists.
            </p>

            {/* CTA Button */}
            <Link to='/about'>
              <button className="group inline-flex items-center gap-2 px-8 py-4 bg-blue text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/25">
                Discover More
                <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  <BsArrowRight size={20} />
                </span>
              </button>
            </Link>
          </div>

          {/* Logo Card */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-blue/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glass card */}
            <div className="relative w-48 h-64 md:w-56 md:h-72 bg-black rounded-2xl flex items-center justify-center shadow-2xl shadow-slate-900/30 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
              {/* Decorative corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-blue rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-blue rounded-br-lg" />

              {/* Logo */}
              <img
                src={logoPath}
                alt="Elevare Logo"
                className="relative w-1/2 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white rounded-full shadow-lg border border-slate-100">
              <span className="text-xs font-semibold tracking-wider text-slate-700 uppercase">
                Est. 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
