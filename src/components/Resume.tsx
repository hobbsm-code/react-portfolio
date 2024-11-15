//Imports
import Button from "@mui/material/Button";
import PdfFile from "../assets/Resume_Mark_Hobbs.pdf";
import "./Resume.css";

// Function that renders the downloadable resume, proficiencies & exports
export default function Resume() {
  return (
    <section className="resume-container">
      <div>
        <a
        id="resume-link"
          href={PdfFile}
          download="Mark Hobbs Resumé"
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "25px",
          }}
          rel="noreferrer"
        >
          <Button id="resume-button" className="pop-on-hover">
            Click Here to Download My Resume
          </Button>
        </a>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Front-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "100px",
          }}
        >
          - HTML
          <br></br>- CSS
          <br></br>- JavaScript
          <br></br>- JQuery
          <br></br>- Responsive Design
          <br></br>- React
          <br></br>- Bootstrap
        </p>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textDecoration: "underline",
          }}
        >
          Back-end Proficiencies
        </h2>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            paddingRight: "140px",
          }}
        >
          
          - API's
          <br></br>- Node
          <br></br>- Express
          <br></br>- PostgreSQL
          <br></br>- Bootstrap
          <br></br>- REST
          
        </p>
      </div>
    </section>

  );
}
