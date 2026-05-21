import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(() => {
    return !sessionStorage.getItem("hasVisited");
  });

  useEffect(() => {
    if (isFirstLoad) {
      sessionStorage.setItem("hasVisited", "true");
      // Remove first-load state after animations complete
      const timer = setTimeout(() => setIsFirstLoad(false), 800);
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  return (
    <div className="flex flex-col min-h-screen bg-dark-900 text-gray-100">
      <div className={isFirstLoad ? "animate-drop-in" : ""}>
        <Header />
      </div>
      <main className="flex-1 pt-6">
        <div
          key={location.pathname}
          className={
            isFirstLoad ? "animate-drop-in-delay-1" : "animate-drop-in"
          }
        >
          <Outlet />
        </div>
      </main>
      <div className={isFirstLoad ? "animate-drop-in-delay-2" : ""}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
