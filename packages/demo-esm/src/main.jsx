import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div id="PACKAGE_VERSION">{import.meta.env.PACKAGE_VERSION}</div>
  </React.StrictMode>
);
