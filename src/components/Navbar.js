import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand mx-2" to="/">
        Textalyzer
        </Link>
        {props.mode === "light" ? (
          <LightModeIcon className="mx-2" onClick={props.toggleMode} />
        ) : (
          <DarkModeIcon className="mx-2" onClick={props.toggleMode} />
        )}
      </div>
    </nav>
  );
}

// used to set types of the props
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // it is must and gives error when not given in App.js or default
  // title : PropTypes.string,
};

// used to set default values of the props
Navbar.defaultProps = {
  title: "Title of website",
};
