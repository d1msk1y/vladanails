/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { GalleryPreview } from "./components/GalleryPreview";
import { GalleryPage } from "./components/GalleryPage";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

export default function App() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateTo = (path: string) => {
    if (path === window.location.pathname) return;
    window.history.pushState({}, "", path);
    setPathname(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (pathname === "/gallery") {
    return (
      <div className="site-shell">
        <Navbar currentPath={pathname} onNavigate={navigateTo} />
        <main>
          <GalleryPage onNavigate={navigateTo} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="site-shell">
      <Navbar currentPath={pathname} onNavigate={navigateTo} />
      <main>
        <Hero />
        <About />
        <GalleryPreview onNavigate={navigateTo} />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
