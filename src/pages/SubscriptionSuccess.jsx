import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BiCheckCircle, BiLoader } from "react-icons/bi";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export default function SubscriptionSuccess() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      fetchSubscription();
    }
  }, [orderId]);

  const fetchSubscription = async () => {
    try {
      const response = await fetch(`${API_URL}/subscriptions/${orderId}`);
      const result = await response.json();
      if (result.success) {
        setSubscription(result.data);
      }
    } catch (error) {
      console.error("Error fetching subscription:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  return (
    <div>
      <Header />
      <main className="max-w-5xl mx-auto mt-20 py-20 px-4">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          {loading ? (
            <div className="text-center">
              <BiLoader className="animate-spin text-5xl text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Loading order details...</p>
            </div>
          ) : (
            <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 text-center max-w-lg w-full">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BiCheckCircle className="text-5xl text-green-500" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Payment Successful!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for subscribing to <strong>ELEVARE Magazine</strong>!
                Your subscription is now active.
              </p>

              {subscription && (
                <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Order ID</p>
                      <p className="font-semibold">{subscription.orderId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Plan</p>
                      <p className="font-semibold">{subscription.planName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Amount</p>
                      <p className="font-semibold">
                        Rs. {formatPrice(subscription.amount)}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Status</p>
                      <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {subscription.paymentStatus}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <Link
                to="/"
                className="inline-block w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-zinc-800 transition-all"
              >
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}