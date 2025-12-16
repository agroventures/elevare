import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MemberCard from "../components/Team/MemberCard";
import { teamData } from "../data/teamData";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import useSEO from "../hooks/useSEO";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const url = window.location.href;

  useSEO({
    header: "Team - ELEVARE Magazine",
    description: "Meet the visionary team behind ELEVARE magazine — creators of premium content in business, lifestyle, art, and culture. Discover the people shaping our voice.",
    url,
    image_alt: "Team",
    twitter_card: "summary_large_image",
  });

  // Get current member
  const currentMember = teamData[activeIndex];

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Trigger animation on index change
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Calculate position for each card
  const getCardStyles = (index) => {
    const totalMembers = teamData.length;
    const diff = index - activeIndex;

    let normalizedDiff = diff;
    if (diff > totalMembers / 2) normalizedDiff = diff - totalMembers;
    if (diff < -totalMembers / 2) normalizedDiff = diff + totalMembers;

    const isActive = normalizedDiff === 0;
    const absPosition = Math.abs(normalizedDiff);

    const angle = normalizedDiff * (360 / totalMembers);
    const radius = 280;
    const x = Math.sin((angle * Math.PI) / 180) * radius;
    const z = Math.cos((angle * Math.PI) / 180) * radius - radius;

    const scale = isActive ? 1 : Math.max(0.6, 1 - absPosition * 0.15);
    const opacity = isActive ? 1 : Math.max(0.3, 1 - absPosition * 0.25);
    const blur = isActive ? 0 : absPosition * 2;
    const zIndex = 100 - absPosition * 10;

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      opacity,
      filter: `blur(${blur}px)`,
      zIndex,
    };
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % teamData.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + teamData.length) % teamData.length);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Vector Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Concentric Circles */}
        <svg
          className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-[0.08]"
          viewBox="0 0 200 200"
        >
          <defs>
            <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="90" fill="none" stroke="url(#circleGradient)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="url(#circleGradient)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="50" fill="none" stroke="url(#circleGradient)" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" fill="none" stroke="url(#circleGradient)" strokeWidth="0.5" />
        </svg>

        {/* Bottom Left Wave Pattern */}
        <svg
          className="absolute -bottom-10 -left-10 w-[600px] h-[400px] opacity-[0.06]"
          viewBox="0 0 600 400"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q150,50 300,100 T600,100"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
          />
          <path
            d="M0,150 Q150,100 300,150 T600,150"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
          />
          <path
            d="M0,200 Q150,150 300,200 T600,200"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
          />
          <path
            d="M0,250 Q150,200 300,250 T600,250"
            fill="none"
            stroke="url(#waveGradient)"
            strokeWidth="2"
          />
        </svg>

        {/* Dot Grid Pattern */}
        <svg className="absolute top-1/4 left-10 w-32 h-32 opacity-[0.1]" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          {[...Array(5)].map((_, i) =>
            [...Array(5)].map((_, j) => (
              <circle
                key={`${i}-${j}`}
                cx={10 + j * 20}
                cy={10 + i * 20}
                r="2"
                fill="url(#dotGradient)"
              />
            ))
          )}
        </svg>

        {/* Abstract Triangle */}
        <svg
          className="absolute top-1/3 right-20 w-48 h-48 opacity-[0.05]"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="url(#triangleGradient)"
            strokeWidth="1"
          />
          <polygon
            points="50,25 75,75 25,75"
            fill="none"
            stroke="url(#triangleGradient)"
            strokeWidth="1"
          />
        </svg>

        {/* Floating Hexagon */}
        <svg
          className="absolute bottom-1/3 right-1/4 w-40 h-40 opacity-[0.06] animate-pulse"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="none"
            stroke="url(#hexGradient)"
            strokeWidth="1"
          />
        </svg>

        {/* Curved Lines - Left Side */}
        <svg
          className="absolute top-1/2 -left-20 w-64 h-64 opacity-[0.08] -translate-y-1/2"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path d="M90,10 Q10,50 90,90" fill="none" stroke="url(#curveGradient)" strokeWidth="1" />
          <path d="M80,10 Q0,50 80,90" fill="none" stroke="url(#curveGradient)" strokeWidth="1" />
          <path d="M70,10 Q-10,50 70,90" fill="none" stroke="url(#curveGradient)" strokeWidth="1" />
        </svg>

        {/* Plus Signs Scattered */}
        <div className="absolute top-20 left-1/3 text-orange-400/20 text-4xl font-thin">+</div>
        <div className="absolute top-40 right-1/3 text-red-400/20 text-2xl font-thin">+</div>
        <div className="absolute bottom-40 left-1/4 text-orange-400/15 text-3xl font-thin">+</div>
        <div className="absolute bottom-60 right-1/4 text-red-400/10 text-5xl font-thin">+</div>

        {/* Small Floating Circles */}
        <div className="absolute top-32 right-40 w-4 h-4 rounded-full bg-linear-to-r from-orange-400 to-red-400 opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }} />
        <div className="absolute top-60 left-32 w-3 h-3 rounded-full bg-linear-to-r from-orange-400 to-red-400 opacity-15 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }} />
        <div className="absolute bottom-48 right-60 w-2 h-2 rounded-full bg-linear-to-r from-orange-400 to-red-400 opacity-25 animate-bounce" style={{ animationDelay: '2s', animationDuration: '3.5s' }} />
      </div>

      <Header />

      <section className="max-w-7xl mx-auto mt-20 py-20 px-4 overflow-hidden relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-500 max-w-2xl mx-auto mb-12">
          Passionate individuals working together to create amazing experiences
        </p>

        <div
          className="relative h-[500px] flex items-center justify-center"
          style={{ perspective: "1000px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Circular Glow Background */}
          <div className="absolute w-96 h-96 rounded-full bg-linear-to-r from-orange-400 to-red-500 blur-3xl opacity-20 animate-pulse" />

          {/* Cards Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {teamData.map((member, index) => (
              <MemberCard
                key={member.id}
                name={member.name}
                role={member.designation}
                image={member.image}
                isActive={index === activeIndex}
                style={getCardStyles(index)}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-50 p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-gray-50 hover:border-orange-300 transition-all hover:scale-110 group"
          >
            <BiChevronLeft size={24} className="text-gray-700 group-hover:text-orange-500 transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 z-50 p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-gray-50 hover:border-orange-300 transition-all hover:scale-110 group"
          >
            <BiChevronRight size={24} className="text-gray-700 group-hover:text-orange-500 transition-colors" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {teamData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                transition-all duration-300 rounded-full
                ${
                  index === activeIndex
                    ? "w-8 h-2 bg-linear-to-r from-orange-400 to-red-500"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }
              `}
            />
          ))}
        </div>

        {/* Member Description Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <div
            key={activeIndex}
            className={`text-center transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Member Name */}
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              {currentMember.name}
            </h3>

            {/* Member Role/Designation */}
            <p className="text-lg font-semibold bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-6">
              {currentMember.designation}
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-linear-to-r from-transparent to-orange-400" />
              <div className="w-2 h-2 rounded-full bg-linear-to-r from-orange-400 to-red-500" />
              <div className="h-px w-16 bg-linear-to-l from-transparent to-red-400" />
            </div>

            {/* Member Description */}
            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto mb-8">
              {currentMember.description ||
                ""}
            </p>

            {/* Skills/Tags (Optional) */}
            {currentMember.skills && (
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {currentMember.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-1.5 text-sm bg-linear-to-r from-orange-50 to-red-50 text-orange-600 rounded-full border border-orange-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}