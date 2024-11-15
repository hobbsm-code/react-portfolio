import "./Navigation.css";

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
    return (
      <nav className="shift">
        <ul
        className="nav nav-tabs"
        style={{ paddingRight: "35px", paddingTop: "22px" }}
      >
        <li className="nav-item">
          <a
            id="nav-link"
            href="#about"
            onClick={() => setCurrentPage("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            id="nav-link"
            href="#portfolio"
            onClick={() => setCurrentPage("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            id="nav-link"
            href="#Contact"
            onClick={() => setCurrentPage("Contact")}
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            id="nav-link"
            href="#resume"
            onClick={() => setCurrentPage("Resume")}
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </li>
      </ul>

      </nav>
    
    );
  }
  
  // Export
  export default Navigation;