import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h2",
//   { id: "heading", class: "mainHeading" },
//   "I'm Learning about React JS"
// );

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Hello Aman Yadav"),
//     React.createElement("h2", {}, "Nested Structure"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Nested Structure"),
//     React.createElement("h2", {}, "Nested Structure"),
//   ]),
// ]);
// console.log(heading);
// const heading = React.createElement("h1", { id: "heading" }, "Hello React JS");
const jsxHeading = <h1>Hello React JS</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
