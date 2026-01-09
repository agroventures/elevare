import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import logo from "/images/elevaremagazinee.svg"
import { articleData } from "../data/articleData";

export default function Footer() {
  const recentArticles = articleData
    .sort((a, b) => b.date - a.date)
    .slice(0, 3);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-blue text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src={logo}
                alt="Elevare Magazine"
                className="w-[150px] hover:opacity-80 transition-opacity"
              />
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              <span className="text-white font-semibold">
                Business Media International (Pvt) Ltd.
              </span>
            </p>

            <div className="flex items-start gap-3 text-sm text-zinc-400 mb-4">
              <HiOutlineLocationMarker className="text-white text-xl shrink-0 mt-0.5" />
              <span>48, Sir Marcus Fernando Mawatha, Colombo 07</span>
            </div>

            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <HiOutlineMail className="text-white text-xl shrink-0" />
              <a
                href="mailto:info@elevare.lk"
                className="hover:text-white transition-colors"
              >
                info@elevare.lk
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-white rounded-full" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Team", path: "/team" },
                { name: "Articles", path: "/articles" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-white rounded-full transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Articles */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-white rounded-full" />
              Recent Articles
            </h3>
            <ul className="space-y-4">
              {recentArticles.map((article) => (
                <li key={article.id}>
                  <Link to={`/article/${article.slug}`} className="group block">
                    <h4 className="text-zinc-400 text-sm line-clamp-2 group-hover:text-white transition-colors mb-1">
                      {article.shortTitle}
                    </h4>
                    <span className="text-xs text-zinc-600 group-hover:text-white transition-colors">
                      {article.date.toLocaleString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-white rounded-full" />
              Connect With Us
            </h3>

            <p className="text-zinc-400 text-sm mb-6">
              Follow us on social media for the latest updates and
              behind-the-scenes content.
            </p>

            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61576325729481"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 hover:bg-white hover:border-transparent transition-all duration-300"
              >
                <BsFacebook className="text-lg text-zinc-400 group-hover:text-blue transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/elevare_lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 hover:bg-white hover:border-transparent transition-all duration-300"
              >
                <BsInstagram className="text-lg text-zinc-400 group-hover:text-blue transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-zinc-500 text-center md:text-left leading-relaxed">
              © {currentYear}{" "}
              <span className="font-medium text-zinc-400">
                ELEVARE.lk
              </span>
              . All rights reserved. Developed by{" "}
              <a
                href="https://ventrax.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary-500 hover:text-primary-400 
                           underline underline-offset-4 transition-colors"
              >
                Ventrax.lk
              </a>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <Link
                to="/terms"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/refund"
                className="text-zinc-500 hover:text-white transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-24 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/25 hover:scale-110 transition-transform duration-300"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
