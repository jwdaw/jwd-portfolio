import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
    { to: "/blog", label: "Blog" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-white hover:text-accent-light transition-colors no-underline"
        >
          Jackson Dawson
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors no-underline ${
                isActive(link.to)
                  ? "text-accent-light"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 border-t border-dark-600 pt-4">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-medium transition-colors no-underline ${
                isActive(link.to)
                  ? "text-accent-light"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navigation;
