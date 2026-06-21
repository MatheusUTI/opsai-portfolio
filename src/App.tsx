/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Areas from "./components/Areas";
import Impact from "./components/Impact";
import Projects from "./components/Projects";
import AISDDSection from "./components/AISDDSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="root-viewport" className="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans antialiased">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Key Areas Section */}
      <Areas />

      {/* Impact Section */}
      <Impact />

      {/* Projects Section */}
      <Projects />

      {/* AISDD Compact Section */}
      <AISDDSection />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
