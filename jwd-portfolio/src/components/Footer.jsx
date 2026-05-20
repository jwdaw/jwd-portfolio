import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-600 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Jackson Dawson
            </h3>
            <p className="text-gray-400 text-sm">Developer &amp; Creator</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact" },
                { to: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white text-sm transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/jwdaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors no-underline"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jackson-dawson-0a2259266/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white text-sm transition-colors no-underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark-600 py-4 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Jackson Dawson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
