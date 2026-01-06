import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  BiBookOpen,
  BiCrown,
  BiPrinter,
  BiErrorCircle,
  BiCheckCircle,
} from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import api from "../services/api";
import { countries } from "../data/countryList";

export default function Subscribe() {
  const navigate = useNavigate();

  // Form Data State
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: { value: "LK", label: "Sri Lanka" },
    plan: "print",
  });

  // Form States
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const subscriptionPlans = {
    print: {
      name: "Print Subscription",
      price: 6000,
      deliveryCharge: 350,
      total: 6350,
    },
    digital: { name: "Digital Subscription", price: 6000, total: 6000 },
  };

  const magazineFeatures = [
    {
      icon: <BiBookOpen />,
      feature: "Curated long-form reads",
      excerpt:
        "Every issue features deeply researched stories and perspectives you won't find elsewhere.",
    },
    {
      icon: <BiPrinter />,
      feature: "Premium print quality",
      excerpt:
        "Sustainably printed on archival paper with vibrant photography and illustrations.",
    },
    {
      icon: <CiDeliveryTruck />,
      feature: "Delivered to your door",
      excerpt:
        "Ships worldwide every quarter. Manage your subscription online anytime.",
    },
    {
      icon: <BiCrown />,
      feature: "Member perks",
      excerpt:
        "Early access to events, digital extras, and community discussions.",
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  // Validation Rules
  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
        if (!value.trim()) return "First name is required";
        if (value.trim().length < 2)
          return "First name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value))
          return "First name can only contain letters";
        return "";

      case "lastName":
        if (!value.trim()) return "Last name is required";
        if (value.trim().length < 2)
          return "Last name must be at least 2 characters";
        if (!/^[a-zA-Z\s]+$/.test(value))
          return "Last name can only contain letters";
        return "";

      case "email":
        if (!value.trim()) return "Email is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value))
          return "Please enter a valid email address";
        return "";

      case "phone":
        if (!value || value.length < 8)
          return "Please enter a valid phone number";
        return "";

      case "address":
        if (!value.trim()) return "Address is required";
        if (value.trim().length < 10) return "Please enter a complete address";
        return "";

      case "city":
        if (!value.trim()) return "City is required";
        if (value.trim().length < 2) return "Please enter a valid city name";
        return "";

      case "state":
        if (!value.trim()) return "State/Province is required";
        return "";

      case "postalCode":
        if (!value.trim()) return "Postal code is required";
        if (value.trim().length < 4) return "Please enter a valid postal code";
        return "";

      case "country":
        if (!value) return "Country is required";
        return "";

      default:
        return "";
    }
  };

  // Validate all fields
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "plan") {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  // Handle phone change
  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
    if (touched.phone) {
      const error = validateField("phone", value);
      setErrors((prev) => ({ ...prev, phone: error }));
    }
  };

  // Handle country change
  const handleCountryChange = (selectedOption) => {
    setFormData((prev) => ({ ...prev, country: selectedOption }));
    if (touched.country) {
      const error = validateField("country", selectedOption);
      setErrors((prev) => ({ ...prev, country: error }));
    }
  };

  // Handle blur
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Handle phone blur
  const handlePhoneBlur = () => {
    setTouched((prev) => ({ ...prev, phone: true }));
    const error = validateField("phone", formData.phone);
    setErrors((prev) => ({ ...prev, phone: error }));
  };

  // Handle country blur
  const handleCountryBlur = () => {
    setTouched((prev) => ({ ...prev, country: true }));
    const error = validateField("country", formData.country);
    setErrors((prev) => ({ ...prev, country: error }));
  };

  // Redirect to PayHere
  const redirectToPayHere = (paymentData) => {
    // Create and submit form to PayHere
    const form = document.createElement("form");
    form.method = "POST";
    form.action = paymentData.checkout_url;

    const fields = [
      "merchant_id",
      "return_url",
      "cancel_url",
      "notify_url",
      "order_id",
      "items",
      "currency",
      "amount",
      "first_name",
      "last_name",
      "email",
      "phone",
      "address",
      "city",
      "country",
      "hash",
    ];

    fields.forEach((field) => {
      if (paymentData[field] !== undefined) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = field;
        input.value = paymentData[field];
        form.appendChild(input);
      }
    });

    document.body.appendChild(form);
    form.submit();
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(formData).forEach((key) => {
      if (key !== "plan") allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate all fields
    const formErrors = validateForm();
    setErrors(formErrors);

    // Check if there are any errors
    if (Object.keys(formErrors).length > 0) {
      const firstErrorField = document.querySelector(".error-field");
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    // Submit form
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { data } = await api.post("/subscriptions", formData);

      if (data.success) {
        // Redirect to PayHere immediately
        redirectToPayHere(data.data.payment);
      }
    } catch (error) {
      console.error("Submission error:", error);

      if (error.response) {
        const { data } = error.response;

        if (data.errors && Array.isArray(data.errors)) {
          const serverErrors = {};
          data.errors.forEach((err) => {
            serverErrors[err.field] = err.message;
          });
          setErrors(serverErrors);
          setSubmitError("Please fix the validation errors.");
        } else {
          setSubmitError(
            data.message || "Something went wrong. Please try again."
          );
        }
      } else if (error.request) {
        setSubmitError(
          "Unable to connect to server. Please check your internet connection."
        );
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input field classes
  const getInputClasses = (fieldName) => {
    const baseClasses =
      "w-full border rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 transition-all";
    const errorClasses =
      errors[fieldName] && touched[fieldName]
        ? "border-red-400 bg-red-50 focus:ring-blue focus:border-transparent error-field"
        : "border-gray-200 bg-gray-50 focus:bg-white focus:ring-black focus:border-transparent";
    return `${baseClasses} ${errorClasses}`;
  };

  // Custom styles for react-select
  const getSelectStyles = (hasError) => ({
    control: (provided, state) => ({
      ...provided,
      backgroundColor: hasError ? "#fef2f2" : "#f9fafb",
      borderColor: hasError ? "#f87171" : state.isFocused ? "#000" : "#e5e7eb",
      borderRadius: "0.75rem",
      padding: "0.375rem 0.5rem",
      boxShadow: state.isFocused
        ? hasError
          ? "0 0 0 2px #ef4444"
          : "0 0 0 2px #000"
        : "none",
      "&:hover": {
        borderColor: state.isFocused
          ? hasError
            ? "#ef4444"
            : "#000"
          : "#d1d5db",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#000"
        : state.isFocused
        ? "#f3f4f6"
        : "white",
      color: state.isSelected ? "white" : "#374151",
      cursor: "pointer",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.75rem",
      overflow: "hidden",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#9ca3af",
    }),
  });

  // Error message component
  const ErrorMessage = ({ error }) => {
    if (!error) return null;
    return (
      <div className="flex items-center gap-1 mt-1.5 text-blue text-sm animate-fadeIn">
        <BiErrorCircle className="text-base shrink-0" />
        <span>{error}</span>
      </div>
    );
  };

  return (
    <div>
      <Header />

      <main className="max-w-5xl mx-auto mt-20 py-20 px-4">
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold tracking-tight">
              ELEVARE Magazine
            </h2>

            <p className="text-gray-700 leading-relaxed text-md text-justify">
              Inspired by the Latin word <strong>ELEVARE</strong> meaning "to
              elevate," our name embodies our mission: to celebrate the hero
              within every journey.
              <br />
              <br />
              ELEVARE is a luxury, business, and lifestyle magazine with a
              distinctive vision, connecting Sri Lanka's most successful
              entrepreneurs at home and abroad with emerging businesses and
              ventures.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("form")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-blue text-white py-4 px-8 rounded-full font-semibold hover:shadow-lg hover:shadow-blue/25 hover:scale-105 transition-all duration-300"
            >
              Subscribe Now
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src="/src/assets/magazines-min.png"
              alt="Magazines"
              className="w-3/4 animate-float drop-shadow-xl"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
          {magazineFeatures.map((mag, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl text-blue bg-red-50 p-2 rounded-lg">
                  {mag.icon}
                </span>
                <h2 className="text-lg font-bold">{mag.feature}</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {mag.excerpt}
              </p>
            </div>
          ))}
        </section>

        <section id="form" className="mt-20">
          <h3 className="text-2xl font-bold py-2">Subscribe to ELEVARE</h3>
          <p className="text-sm text-gray-500 pb-6">
            Fill in your delivery details below. You'll be redirected to PayHere
            to pay securely.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-100 rounded-3xl shadow-xl p-8 md:p-10 space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-blue">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses("firstName")}
                  placeholder="Nimal"
                />
                {touched.firstName && (
                  <ErrorMessage error={errors.firstName} />
                )}
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name <span className="text-blue">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses("lastName")}
                  placeholder="Perera"
                />
                {touched.lastName && <ErrorMessage error={errors.lastName} />}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-blue">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses("email")}
                  placeholder="nimal@example.com"
                />
                {touched.email && <ErrorMessage error={errors.email} />}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-blue">*</span>
                </label>
                <PhoneInput
                  country={"lk"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onBlur={handlePhoneBlur}
                  inputStyle={{
                    width: "100%",
                    height: "52px",
                    fontSize: "16px",
                    borderRadius: "0.75rem",
                    border: `1px solid ${
                      errors.phone && touched.phone ? "#f87171" : "#e5e7eb"
                    }`,
                    backgroundColor:
                      errors.phone && touched.phone ? "#fef2f2" : "#f9fafb",
                    paddingLeft: "60px",
                  }}
                  buttonStyle={{
                    borderRadius: "0.75rem 0 0 0.75rem",
                    border: `1px solid ${
                      errors.phone && touched.phone ? "#f87171" : "#e5e7eb"
                    }`,
                    borderRight: "none",
                    padding: "0 8px",
                  }}
                  dropdownStyle={{
                    borderRadius: "0.75rem",
                    boxShadow:
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  enableSearch={true}
                  searchPlaceholder="Search country..."
                />
                {touched.phone && <ErrorMessage error={errors.phone} />}
              </div>

              {/* Address */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address <span className="text-blue">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses("address")}
                  placeholder="123 Main Street, Apartment 4B"
                />
                {touched.address && <ErrorMessage error={errors.address} />}
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City <span className="text-blue">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses("city")}
                  placeholder="Colombo"
                />
                {touched.city && <ErrorMessage error={errors.city} />}
              </div>

              {/* State */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  State/Province <span className="text-blue">*</span>
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses("state")}
                  placeholder="Western"
                />
                {touched.state && <ErrorMessage error={errors.state} />}
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Postal Code <span className="text-blue">*</span>
                </label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClasses("postalCode")}
                  placeholder="00100"
                />
                {touched.postalCode && (
                  <ErrorMessage error={errors.postalCode} />
                )}
              </div>

              {/* Country */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Country <span className="text-blue">*</span>
                </label>
                <Select
                  value={formData.country}
                  onChange={handleCountryChange}
                  onBlur={handleCountryBlur}
                  options={countries}
                  styles={getSelectStyles(errors.country && touched.country)}
                  placeholder="Select a country"
                  isSearchable={true}
                />
                {touched.country && <ErrorMessage error={errors.country} />}
              </div>

              {/* Subscription Plan */}
              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Select Subscription Plan{" "}
                  <span className="text-blue">*</span>
                </label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3.5 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="print">Print Subscription – Rs. 6,000 + Delivery</option>
                  <option value="digital">Digital Subscription – Rs. 6,000</option>
                </select>
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Selected Plan</p>
                    <p className="font-semibold text-gray-800">
                      {subscriptionPlans[formData.plan].name}
                      {subscriptionPlans[formData.plan].deliveryCharge > 0 &&
                        ` + Delivery (Rs. ${subscriptionPlans[formData.plan].deliveryCharge})`}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Total</p>
                    <p className="text-2xl font-bold text-gray-900">
                      Rs. {formatPrice(subscriptionPlans[formData.plan].total)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Summary */}
            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center gap-2 text-red-600">
                  <BiErrorCircle className="text-xl shrink-0" />
                  <p className="font-medium">{submitError}</p>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-[300px] py-4 rounded-xl text-lg font-semibold transition-all duration-200 shadow-lg shadow-black/10 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:bg-zinc-800 hover:scale-[1.02] active:scale-100"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                    Processing...
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </button>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}