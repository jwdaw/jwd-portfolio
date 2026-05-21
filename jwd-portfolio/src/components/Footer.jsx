import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-dark-600">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              Jackson Dawson
            </h3>
            <p className="text-gray-500 text-sm">Developer &amp; Creator</p>
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
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white text-sm transition-colors no-underline"
                >
                  Contact
                </Link>
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
