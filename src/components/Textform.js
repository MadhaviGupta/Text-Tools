import React, { useState } from "react";
import { BsDownload } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Textform(props) {
  const [text, setText] = useState("");

  const toUpCase = () => {
    let upText = text.toUpperCase();
    setText(upText);
    toast("Converted to Uppercase.");
  };
  const toLwCase = () => {
    let lwText = text.toLowerCase();
    setText(lwText);
    toast("Converted to Lowercase.");
  };
  const toTitleCase = () => {
    let titleText = text.toLowerCase().split(" ");
    for (var i = 0; i < titleText.length; i++) {
      titleText[i] =
        titleText[i].charAt(0).toUpperCase() + titleText[i].slice(1);
    }
    setText(titleText.join(" "));
    toast("Converted to Titlecase.");
  };
  const removeSpaces = () => {
    let removedText = text.replace(/\s+/g, " ");
    setText(removedText);
    toast("Extra space removed.");
  };
  const clearText = () => {
    let clr = "";
    setText(clr);
    toast("Text cleared.");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    toast("Copied to clipboard.");
  };
  const downloadFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain",
    });
    element.href = URL.createObjectURL(file);
    element.download = "TextTools.txt";
    document.body.appendChild(element);
    element.click();
    toast("File downloaded successfully!");
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  debugger;
  return (
    <>
      <h5 className="fw-bold">Put your text here</h5>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label"></label>
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button
        className={`btn btn-sm btn-outline-${
          props.mode === "dark" ? "light" : "dark"
        } mx-2 my-1`}
        onClick={toUpCase}
      >
        Convert to Uppercase
      </button>
      <button
        className={`btn btn-sm btn-outline-${
          props.mode === "dark" ? "light" : "dark"
        } mx-2 my-1`}
        onClick={toLwCase}
      >
        Convert to Lowercase
      </button>
      <button
        className={`btn btn-sm btn-outline-${
          props.mode === "dark" ? "light" : "dark"
        } mx-2 my-1`}
        onClick={toTitleCase}
      >
        Convert to Title Case
      </button>
      <button
        className={`btn btn-sm btn-outline-${
          props.mode === "dark" ? "light" : "dark"
        } mx-2 my-1`}
        onClick={removeSpaces}
      >
        Remove Extra Spaces
      </button>
      <button
        className={`btn btn-sm btn-outline-${
          props.mode === "dark" ? "light" : "dark"
        } mx-2 my-1`}
        onClick={copyText}
      >
        Copy to Clipboard
      </button>
      <button
        className={`btn btn-sm btn-outline-${
          props.mode === "dark" ? "light" : "dark"
        } mx-2 my-1`}
        onClick={clearText}
      >
        Clear Text
      </button>
      <button
        className={`btn btn-sm btn-outline-${
          props.mode === "dark" ? "light" : "dark"
        } mx-2 my-1`}
        onClick={downloadFile}
      >
        <BsDownload />
      </button>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={props.mode}
        bodyClassName={`fs-6 font-inter rounded-4 text-${
          props.mode === "dark" ? "light" : "dark"
        }`}
      />

      <h5 className="my-3">Your text summary</h5>
      <p>
        <b>{text.length}</b> characters (including spaces)
      </p>
      <p>
        <b>{text.split(" ").join("").length}</b> characters (excluding spaces)
      </p>
      <p>
        <b>
          {text.length > 0
            ? text.trim().split(" ").length +
              text.replace(/\n$/gm, "").split(/\n/).length -
              1
            : 0}
        </b>{" "}
        words
      </p>
      <p>
        <b>{text.length > 0 ? text.trim().split(/[.!?]/).length - 1 : 0}</b>{" "}
        sentences
      </p>
      <p>
        <b>
          {text.length > 0 ? text.replace(/\n$/gm, "").split(/\n/).length : 0}
        </b>{" "}
        paragraphs
      </p>
      <p>
        <b>
          {(text.length === 0 ? 0 : 0.008 * text.split(" ").length).toFixed()}
        </b>{" "}
        minutes to read (approximation)
      </p>
    </>
  );
}
