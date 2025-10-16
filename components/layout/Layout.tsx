"use client";
import type { PropsWithChildren } from "react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../page_effects/BackToTop";

export default function Layout({ children }: PropsWithChildren) {

  return (
    <div className="shell">
      <Header />
      <main>{children}</main>
      
      {/* ADD THIS IMAGE TAG */}
      <img 
        src="/assets/img/badge.png" // Path to your image
        alt="Salesforce Ridge Partner" 
        className="floating-partner-badge" 
      />

      <BackToTop />
      <Footer />
    </div>
  );
}