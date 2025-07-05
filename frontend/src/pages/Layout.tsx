import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./ui/footer";


const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* You can add a Header here if needed */}
      
      {/* This will render the current route */}
      <Outlet />

      {/* Shared Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
