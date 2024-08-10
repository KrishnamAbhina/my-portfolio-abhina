import React, { useState, useEffect } from "react";
import Preloader from "D:/abhifolio/src/Components/Pre";
import Navbar from "D:/abhifolio/src/Components/Navbar";
import Home from "D:/abhifolio/src/Components/Home/Home";
import About from "D:/abhifolio/src/Components/About/About";
import Projects from "D:/abhifolio/src/Components/Projects/Projects";
import Footer from "D:/abhifolio/src/Components/Footer";
import Resume from "D:/abhifolio/src/Components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "D:/abhifolio/src/Components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;