import React from "react";
import { Link } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PaymentCancel() {
  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto mt-20 py-20 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <BiXCircle className="text-5xl text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Cancelled
          </h2>
          <p className="text-gray-600 mb-6">
            You cancelled the payment process. No charges have been made.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Your subscription order is still saved. You can complete the payment anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/subscribe"
              className="inline-block bg-black text-white py-3 px-8 rounded-xl font-semibold hover:bg-zinc-800 transition-all"
            >
              Try Again
            </Link>
            <Link
              to="/"
              className="inline-block bg-gray-100 text-gray-700 py-3 px-8 rounded-xl font-semibold hover:bg-gray-200 transition-all"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}