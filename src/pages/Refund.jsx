import React from "react";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Header from "../components/Header";
import { refundPolicy } from "../data/refundPolicy";

export default function Refund() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-wide text-center mt-3 mb-6">
          Refund Policy
        </h1>

        <p className="text-zinc-600 text-sm leading-relaxed text-justify">
          Thank you for purchasing from{" "}
          <span className="font-semibold">ELEVARE Magazine.</span> We are
          committed to delivering premium-quality content and exceptional
          service. If you are not entirely satisfied with your purchase, we’re
          here to assist you.{" "}
        </p>

        <div className="my-10 w-full h-px bg-zinc-200"></div>

        <div className="space-y-8">
          {refundPolicy.map((refund) => (
            <div key={refund.id} className="mb-7">
              <h2 className="text-xl font-semibold mb-3">{refund.title}</h2>

              {refund.description}
            </div>
          ))}

          <Contact />

          <p className="text-zinc-600 text-sm">
            We’re here to ensure your experience with{" "}
            <span className="font-semibold">ELEVARE Magazine</span> is inspiring
            and worry-free.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
