import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { termsAndConditions } from "../data/termsAndConditions";

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-center mb-6">
          Terms & Conditions
        </h1>

        <p className="text-zinc-600 text-sm leading-relaxed text-justify">
          Welcome to <span className="font-semibold">ELEVARE Magazine.</span>{" "}
          These Terms and Conditions govern your use of our website{" "}
          <span className="font-semibold cursor-pointer">elevare.lk</span> and
          all purchases made through our platform. By accessing or using our
          website, you agree to be bound by these terms. Please read them
          carefully before making any purchases.
        </p>

        <div className="my-10 w-full h-px bg-zinc-200"></div>

        <div className="space-y-12">
          {termsAndConditions.map((terms) => (
            <div key={terms.id} className="mb-7">
              <h2 className="text-2xl font-semibold mb-3">
                {terms.id}. {terms.title}
              </h2>

              {terms.description}
            </div>
          ))}

          <Contact />
        </div>
      </section>

      <Footer />
    </div>
  );
}
