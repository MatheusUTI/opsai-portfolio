/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Areas from "./components/Areas";
import Projects from "./components/Projects";
import AISDDSection from "./components/AISDDSection";
import Stack from "./components/Stack";
import Method from "./components/Method";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="topo" className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Key Areas Section */}
      <Areas />

      {/* Projects Section */}
      <Projects />

      {/* AISDD Section */}
      <AISDDSection />

      {/* Stack Section */}
      <Stack />

      {/* Method Section */}
      <Method />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

