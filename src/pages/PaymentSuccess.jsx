import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { BiCheckCircle, BiTime, BiXCircle } from "react-icons/bi";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../services/api";

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState("loading");
  const [orderData, setOrderData] = useState(null);

  const orderId = searchParams.get("order_id");

  useEffect(() => {
    const verifyPayment = async () => {
      if (!orderId) {
        setStatus("error");
        return;
      }

      try {
        const { data } = await api.get(`/subscriptions/verify/${orderId}`);
        
        if (data.success) {
          setOrderData(data.data);
          setStatus(data.data.paymentStatus);
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("error");
      }
    };

    verifyPayment();
  }, [orderId]);

  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="animate-spin h-10 w-10 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Verifying Payment...
            </h2>
            <p className="text-gray-600">Please wait while we confirm your payment.</p>
          </div>
        );

      case "completed":
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BiCheckCircle className="text-5xl text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for subscribing to <strong>ELEVARE Magazine</strong>!
            </p>
            {orderData && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
                <h3 className="font-semibold text-gray-900 mb-4">Order Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Order ID:</span>
                    <span className="font-medium">{orderData.orderId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Plan:</span>
                    <span className="font-medium">{orderData.planName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Amount:</span>
                    <span className="font-medium">Rs. {orderData.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Email:</span>
                    <span className="font-medium">{orderData.email}</span>
                  </div>
                </div>
              </div>
            )}
            <p className="text-sm text-gray-500 mb-6">
              A confirmation email has been sent to your email address.
            </p>
            <Link
              to="/"
              className="inline-block bg-black text-white py-3 px-8 rounded-xl font-semibold hover:bg-zinc-800 transition-all"
            >
              Return to Home
            </Link>
          </div>
        );

      case "pending":
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BiTime className="text-5xl text-yellow-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Pending
            </h2>
            <p className="text-gray-600 mb-6">
              Your payment is being processed. This may take a few moments.
            </p>
            {orderData && (
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <p className="text-sm text-gray-500">Order ID</p>
                <p className="font-bold text-gray-900">{orderData.orderId}</p>
              </div>
            )}
            <p className="text-sm text-gray-500 mb-6">
              You will receive an email once your payment is confirmed.
            </p>
            <Link
              to="/"
              className="inline-block bg-black text-white py-3 px-8 rounded-xl font-semibold hover:bg-zinc-800 transition-all"
            >
              Return to Home
            </Link>
          </div>
        );

      case "failed":
      case "error":
      default:
        return (
          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <BiXCircle className="text-5xl text-red-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Payment Failed
            </h2>
            <p className="text-gray-600 mb-6">
              We couldn't process your payment. Please try again.
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
        );
    }
  };

  return (
    <div>
      <Header />
      <main className="max-w-2xl mx-auto mt-20 py-20 px-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}