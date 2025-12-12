import { useState } from "react";
import { BiPlayCircle } from "react-icons/bi";
import { CgClose, CgEye } from "react-icons/cg";
import { GiNewspaper } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function EMagazinePreview() {
  const [open, setOpen] = useState(false);

  const magazineImagePath = "/src/assets/magazine/magazines-min.png";

  return (
    <>
      <section className="relative py-24 px-4 bg-linear-to-b from-white to-zinc-100 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red text-sm font-medium rounded-full mb-6 border border-zinc-200 shadow-sm">
                <div className="w-4 h-4">
                  <GiNewspaper size={20} />
                </div>
                Digital Edition
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                E-Magazine
              </h2>

              <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Explore two pages of the latest Elevare magazine for free.
                Subscribe to unlock full access to premium issues and archives.
              </p>

              {/* Features List */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-zinc-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Free Preview</span>
                </div>

                <div className="flex items-center gap-2 text-zinc-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">HD Quality</span>
                </div>

                <div className="flex items-center gap-2 text-zinc-700">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Instant Access</span>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setOpen(true)}
                className="group inline-flex items-center gap-3 bg-linear-to-r from-red to-orange text-white py-4 px-8 rounded-full font-semibold shadow-lg shadow-red/25 hover:shadow-xl hover:shadow-red/30 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Preview Free Pages
                <div className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <CgEye size={18} />
                </div>
              </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-linear-to-r from-red/20 to-orange/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Magazine Image */}
                <div className="relative">
                  <div className="w-64 sm:w-72 md:w-80 bg-white p-3 rounded-2xl shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500">
                    <img
                      src={magazineImagePath}
                      alt="E-Magazine Preview"
                      className="w-full rounded-xl"
                    />
                  </div>

                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4 bg-linear-to-r from-red to-orange text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
                    FREE
                  </div>

                  {/* Play Button Overlay */}
                  <div
                    onClick={() => setOpen(true)}
                    className="absolute inset-3 flex items-center justify-center bg-black/0 hover:bg-black/30 rounded-xl cursor-pointer transition-all duration-300 group/play"
                  >
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover/play:opacity-100 scale-50 group-hover/play:scale-100 transition-all duration-300">
                      <div className="w-6 h-6 text-red">
                        <BiPlayCircle size={25} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <div>
                <h3 className="text-2xl font-bold text-black">
                  Magazine Preview
                </h3>
                <p className="text-zinc-500 text-sm mt-1">
                  Enjoy your free preview pages
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-red hover:text-white transition-all duration-300"
              >
                <div className="w-5 h-5">
                  <CgClose size={20} />
                </div>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/images/preview-page-1.jpg"
                    alt="Preview Page 1"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-zinc-700">
                    Page 1
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src="/images/preview-page-2.jpg"
                    alt="Preview Page 2"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-zinc-700">
                    Page 2
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-linear-to-r from-zinc-50 to-zinc-100 border-t border-zinc-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-bold text-black">
                    Want to keep reading?
                  </h4>
                  <p className="text-zinc-500 text-sm">
                    Subscribe now to unlock the full magazine and all future
                    issues.
                  </p>
                </div>

                <Link
                  to="/subscribe"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-red to-orange text-white py-3 px-8 rounded-full font-semibold shadow-lg shadow-red/25 hover:shadow-xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
                >
                  Subscribe Now
                  <div className="w-5 h-5">
                    <CgEye size={18} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}