import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BiXCircle } from "react-icons/bi";

export default function SubscriptionCancel() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");

  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto mt-20 py-20 px-4">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center max-w-lg w-full">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BiXCircle className="text-5xl text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Cancelled
            </h2>
            <p className="text-gray-600 mb-6">
              Your payment was cancelled. No charges have been made to your
              account.
            </p>

            {orderId && (
              <p className="text-sm text-gray-500 mb-6">Order ID: {orderId}</p>
            )}

            <div className="space-y-3">
              <Link
                to="/subscribe"
                className="inline-block w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-zinc-800 transition-all"
              >
                Try Again
              </Link>
              <Link
                to="/"
                className="inline-block w-full border border-gray-300 text-gray-700 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}