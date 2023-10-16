import React from "react";
import PropTypes from "prop-types";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <h1 className="navbar-brand mx-2 fw-bolder fs-3">
          TextTools
        </h1>
        {props.mode === "light" ? (
          <BsSunFill className="mx-2 fs-4 cursor-pointer" onClick={props.toggleMode} />
        ) : (
          <BsMoonFill className="mx-2 fs-4 cursor-pointer" onClick={props.toggleMode} />
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
