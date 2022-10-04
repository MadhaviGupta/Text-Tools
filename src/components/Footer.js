import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer(props) {
  return (
    <>
      <footer className="text-center">
        <div className="container pt-4">
          <section>
            <a
              className={`btn btn-link btn-floating btn-lg text-${
                props.mode === "light" ? "dark" : "light"
              } m-1`}
              href="https://www.linkedin.com/in/madhavi-gupta-6b9358219/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <LinkedInIcon />
            </a>
            <a
              className={`btn btn-link btn-floating btn-lg text-${
                props.mode === "light" ? "dark" : "light"
              } m-1`}
              href="https://github.com/MadhaviGupta"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <GitHubIcon />
            </a>
          </section>
        </div>
        <div
          className={`text-center text-${
            props.mode === "light" ? "dark" : "light"
          } p-3`}
        >
          Made by
          <a href="mailto:madhavigupta1225@gmail.com" className="mx-1">
            Madhavi Gupta
          </a>
          using ReactJS
        </div>
      </footer>
    </>
  );
}
