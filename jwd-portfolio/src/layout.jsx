import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-dark-900 text-gray-100">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
