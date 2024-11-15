import { useState } from "react";
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === "About" && <About />}
        {currentPage === "Projects" && <Projects />}
        {currentPage === "Contact" && <Contact />}
        {currentPage === "Resume" && <Resume />}
      </main>
      <Footer />
    </div>
  );
};

export default App;

