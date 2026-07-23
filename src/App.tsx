/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { AestheticStrip } from "./components/AestheticStrip";
import { Services } from "./components/Services";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <AestheticStrip />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
