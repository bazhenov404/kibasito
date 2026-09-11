import { Outlet } from "react-router-dom";

import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <div className="mt-18">
        <Footer />
      </div>
    </>
  );
}
