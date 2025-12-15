import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { BiCheckCircle, BiLoaderAlt } from "react-icons/bi";
import api from "../services/api";

export default function SubscriptionSuccess() {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState(null);
  const [error, setError] = useState(null);

  const orderId = searchParams.get("order_id");

  useEffect(() => {
    const verifyPayment = async () => {
      if (!orderId) {
        setError("Order ID not found");
        setLoading(false);
        return;
      }

      try {
        const { data } = await api.get(`/subscriptions/verify/${orderId}`);
        
        if (data.success && data.data.status === "completed") {
          setSubscription(data.data);
        } else {
          // Payment might still be processing
          setError("Payment is being processed. Please check your email for confirmation.");
        }
      } catch (err) {
        setError("Unable to verify payment. Please contact support if payment was deducted.");
      } finally {
        setLoading(false);
      }
    };

    // Add small delay to allow PayHere notification to process
    const timer = setTimeout(verifyPayment, 2000);
    return () => clearTimeout(timer);
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <BiLoaderAlt className="w-16 h-16 mx-auto text-gray-400 animate-spin" />
          <p className="mt-4 text-gray-600">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center">
            <BiLoaderAlt className="w-8 h-8 text-yellow-600" />
          </div>
          <h1 className="mt-6 text-2xl font-bold text-gray-900">Processing Payment</h1>
          <p className="mt-4 text-gray-600">{error}</p>
          <Link
            to="/"
            className="mt-8 inline-block bg-black text-white px-6 py-3 rounded-lg"
          >
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center">
          <BiCheckCircle className="w-12 h-12 text-green-600" />
        </div>
        
        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Thank You!
        </h1>
        
        <p className="mt-4 text-gray-600">
          Your subscription to ELEVARE Magazine has been confirmed.
        </p>

        {subscription && (
          <div className="mt-8 bg-gray-50 rounded-xl p-6 text-left">
            <h2 className="font-semibold text-gray-900 mb-4">Order Details</h2>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-500">Order ID:</span> {subscription.orderId}</p>
              <p><span className="text-gray-500">Plan:</span> {subscription.plan}</p>
              <p><span className="text-gray-500">Amount:</span> Rs. {subscription.amount.toLocaleString()}</p>
              <p><span className="text-gray-500">Email:</span> {subscription.email}</p>
            </div>
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500">
          A confirmation email has been sent to your email address.
        </p>

        <Link
          to="/"
          className="mt-8 inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}