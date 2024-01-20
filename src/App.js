import React from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { AboutUs } from "./components/AboutUs";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <AboutUs />
    </div>
  );
}

export default App;
