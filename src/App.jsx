import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BackToTopBtn from "./components/BackToTopBtn";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Loader from "./components/Loader";
import MainContent from "./components/MainContent";
import Template from "./components/Template";
import { ThemeProvider } from "./components/ThemeProvider";
import WhatsAppIcon from "./components/WhatsAppIcon";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handlePageLoad = () => setIsLoading(false);
    window.addEventListener("load", handlePageLoad);

    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route
                path="/"
                element={
                  <Template>
                    <MainContent />
                  </Template>
                }
              />
              <Route
                path="/about"
                element={
                  <Template>
                    <About />
                  </Template>
                }
              />
              <Route
                path="/projects"
                element={
                  <Template>
                    <Projects />
                  </Template>
                }
              />
              <Route
                path="/contact"
                element={
                  <Template>
                    <Contact />
                  </Template>
                }
              />
            </Routes>
            <BackToTopBtn />
            <WhatsAppIcon />
            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
