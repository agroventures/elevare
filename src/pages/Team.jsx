import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MemberCard from "../components/Team/MemberCard";
import { teamData } from "../data/teamData";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export default function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate carousel
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

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
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-7xl mx-auto mt-20 py-20 px-4 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-6">
          Meet Our Team
        </h2>

        <div
          className="relative h-[500px] flex items-center justify-center"
          style={{ perspective: "1000px" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Circular Glow Background */}
          <div className="absolute w-96 h-96 rounded-full bg-linear-to-r from-[orange] to-[red] blur-3xl animate-pulse" />

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
            className="absolute left-4 z-50 p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-gray-50 hover:border-purple-300 transition-all hover:scale-110"
          >
            <div className="w-6 h-6 text-gray-700">
              <BiChevronLeft size={24} />
            </div>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 z-50 p-3 rounded-full bg-white border border-gray-200 shadow-lg hover:bg-gray-50 hover:border-purple-300 transition-all hover:scale-110"
          >
            <div className="w-6 h-6 text-gray-700">
              <BiChevronRight size={24} />
            </div>
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
                    ? "w-8 h-2 bg-linear-to-r from-[orange] to-[red]"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }
              `}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {/* <div className="max-w-md mx-auto mt-6">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-[orange] to-[red] transition-all duration-300"
              style={{
                width: `${((activeIndex + 1) / teamData.length) * 100}%`,
              }}
            />
          </div>
        </div> */}
      </section>

      <Footer />
    </div>
  );
}
