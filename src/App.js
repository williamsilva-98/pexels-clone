import React, { useState, useEffect } from "react";
import "./styles.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  const [blackNavbar, setBlackNavbar] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackNavbar(true);
      } else {
        setBlackNavbar(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div>
      <Navbar blackNavbar={blackNavbar}/>
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
