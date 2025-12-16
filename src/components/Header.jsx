import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  const [mobileMenu, setMobileMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(() => {
    if (typeof window !== 'undefined') {
      return !isLandingPage || window.scrollY > 30;
    }
    return !isLandingPage;
  });
  const [scrolled, setScrolled] = useState(false);

  const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Articles", path: "/articles" },
  ];

  const logoPath = "/elevare-logo.png";

  useEffect(() => {
    if (!isLandingPage) {
      setShowHeader(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setShowHeader(true);
        setScrolled(true);
      } else {
        setShowHeader(false);
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLandingPage]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenu]);

  const isActivePath = (path) => location.pathname === path;

  return (
    <>
      <header
        className={`w-full h-20 lg:h-[90px] fixed top-0 left-0 z-50 transition-all duration-500 ${
          showHeader
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        } ${
          scrolled || !isLandingPage
            ? "bg-black backdrop-blur-xl shadow-lg shadow-black/10"
            : "bg-linear-to-b from-black to-transparent backdrop-blur-sm"
        }`}
        onMouseEnter={() => isLandingPage && setShowHeader(true)}
        onMouseLeave={() => {
          if (isLandingPage && window.scrollY < 30) setShowHeader(false);
        }}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="relative px-3 md:px-0 group">
            <div className="absolute -inset-2 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-24 lg:w-28 h-10 lg:h-12 flex items-center group-hover:scale-105 transition-transform duration-300">
              <img
                src={logoPath}
                alt="Elevare Logo"
                className="w-full h-full object-contain"
              />
              <img className="absolute w-10 -top-3 -left-5 pointer-events-none" src="/christmas_hat.png" alt="Christmas Hat" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((nav) => (
              <Link
                key={nav.name}
                to={nav.path}
                className="relative px-5 py-2 group"
              >
                <span
                  className={`relative z-10 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    isActivePath(nav.path)
                      ? "text-orange"
                      : "text-white/80 group-hover:text-white"
                  }`}
                >
                  {nav.name}
                </span>

                {/* Hover background */}
                <span className="absolute inset-0 rounded-lg bg-white/5 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />

                {/* Active/Hover underline */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-red to-orange rounded-full transition-all duration-300 ${
                    isActivePath(nav.path) ? "w-6" : "w-0 group-hover:w-6"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            {/* <Link to="/subscribe"> */}
              <a href="https://subscribe.elevare.lk/">
              <button className="bg-linear-to-r from-red to-orange text-white py-4 px-8 rounded-full font-semibold hover:shadow-lg hover:shadow-red/25 hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
              </a>
            {/* </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileMenu ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenu ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                  mobileMenu ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileMenu(false)}
        />

        {/* Menu Panel */}
        <nav
          className={`absolute top-20 left-0 right-0 bg-black backdrop-blur-xl border-t border-white/10 transition-all duration-500 ${
            mobileMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8"
          }`}
        >
          {/* Gradient accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-linear-to-r from-transparent via-orange to-transparent" />

          <div className="px-6 py-8 space-y-2">
            {navigation.map((nav, index) => (
              <Link
                key={nav.name}
                to={nav.path}
                onClick={() => setMobileMenu(false)}
                className={`block transition-all duration-500 ${
                  mobileMenu
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                    isActivePath(nav.path)
                      ? "bg-linear-to-r from-amber-500/20 to-transparent border-l-2 border-orange"
                      : "hover:bg-white/5"
                  }`}
                >
                  {/* Decorative dot */}
                  <span
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      isActivePath(nav.path) ? "bg-orange" : "bg-white/30"
                    }`}
                  />
                  <span
                    className={`text-lg font-medium tracking-wide ${
                      isActivePath(nav.path)
                        ? "text-orange"
                        : "text-white/90"
                    }`}
                  >
                    {nav.name}
                  </span>
                </div>
              </Link>
            ))}

            {/* Mobile Subscribe Button */}
            <div
              className={`pt-6 transition-all duration-500 ${
                mobileMenu
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {/* <Link to="/subscribe" onClick={() => setMobileMenu(false)}> */}
              <a href="https://subscribe.elevare.lk/">
                <button className="bg-linear-to-r from-red to-orange text-white py-4 px-8 rounded-full font-semibold hover:shadow-lg hover:shadow-red/25 hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
                </a>
              {/* </Link> */}
            </div>
          </div>

          {/* Bottom decorative gradient */}
          <div className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
        </nav>
      </div>
    </>
  );
}
