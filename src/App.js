import React from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";
import { ServiceCarousel } from "./components/ServiceCarousel";
import { PortfolioCarousel } from "./components/PortfolioCarousel";
import { CustomCarousel } from "./components/Carousel";
import { Projects } from "./components/Projects";
import { ClientsCarousel } from "./components/ClientsCarousel";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <AboutUs />
      <ServiceCarousel />
      <Services />
      <PortfolioCarousel />
      <Projects />
      <ClientsCarousel />
      <Footer />
    </div>
  );
}

export default App;
