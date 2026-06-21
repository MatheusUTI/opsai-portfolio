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
import Method from "./components/Method";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="topo" className="min-h-screen bg-[#fbf9f9] text-[#1b1c1c] selection:bg-[#1b1c1c] selection:text-[#fbf9f9]">
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

      {/* AISDD Section */}
      <AISDDSection />

      {/* Method Section */}
      <Method />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

