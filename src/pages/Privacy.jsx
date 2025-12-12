import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { privacyPolicy } from "../data/privacyPolicy";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-center mt-3 mb-6">
          Privacy Policy
        </h1>

        <p className="text-zinc-600 text-sm leading-relaxed text-justify">
          At ELEVARE Magazine, we are dedicated to safeguarding your personal
          information and ensuring your privacy is protected. This Privacy
          Policy explains how we collect, use, and secure your data when you
          visit or make a purchase through{" "}
          <span className="font-semibold cursor-pointer">www.elevare.lk</span>.
          By using our website, you agree to the practices described below.
        </p>

        <div className="my-10 w-full h-px bg-zinc-200"></div>

        <div className="space-y-12">
          {privacyPolicy.map((privacy) => (
            <div key={privacy.id} className="mb-7">
              <h2 className="text-xl font-semibold mb-3">{privacy.title}</h2>

              {privacy.description}
            </div>
          ))}

          <Contact />

          <p className="text-zinc-600 text-sm">
            We value your trust and are committed to keeping your information
            safe.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
