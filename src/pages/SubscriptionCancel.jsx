import React from "react";
import { Link } from "react-router-dom";
import { BiXCircle } from "react-icons/bi";

export default function SubscriptionCancel() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto bg-slate-800 rounded-full flex items-center justify-center">
          <BiXCircle className="w-12 h-12 text-blue" />
        </div>
        
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Payment Cancelled
        </h1>
        
        <p className="mt-4 text-gray-600">
          Your payment was cancelled. No charges have been made to your account.
        </p>

        <div className="mt-8 space-x-4">
          <Link
            to="/subscribe"
            className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Try Again
          </Link>
          
          <Link
            to="/"
            className="inline-block bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}