// Imports
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";

// Function that renders the footer
const Footer = () => {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Grid
        style={{ display: "flex", justifyContent: "center" }}
        container
        sx={{ color: "text.primary" }}
      >
        <Grid
          style={{ display: "flex", justifyContent: "space-evenly" }}
          item
          xs={4}
        >
          <LinkedInIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={() =>
            (window.location.href =
              "https://www.linkedin.com/in/mark-hobbs-0b6a62229/")
            }
          />
          <GitHubIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={() =>
              (window.location.href = "https://github.com/hobbsm-code")
            }
          />
          <XIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={() =>
              (window.location.href = "https://x.com/MarkHobbs6")
            }
          />
          <EmailIcon
            id="icon"
            className="pop-on-hover"
            sx={{ fontSize: 50 }}
            onClick={() =>
              (window.location.href = "mailto:hobbsm121@gmail.com")
            }
          />
        </Grid>
      </Grid>
    </div>
  );
};

// Export
export default Footer;
