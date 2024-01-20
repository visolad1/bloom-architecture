import React from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { AboutUs } from "./components/AboutUs";
import { Services } from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <AboutUs />
      <div style={{ height: '500px' }}>Carousel</div>
      <Services />
    </div>
  );
}

export default App;
