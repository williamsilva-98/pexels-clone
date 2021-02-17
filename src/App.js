import React from "react";
import "./styles.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
