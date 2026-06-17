import React from "react";
import "./top-bar.scss";

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <img src="/logo.png" alt="Ooln Logo" className="top-bar-logo" />
      </div>
    </div>
  );
}
