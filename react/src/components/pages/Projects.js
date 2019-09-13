import React from "react";
import "./pages.css";

export default () => {
  return (
    <div className="reactPageScrollerComponent horizontal-scroll">
      <div className="ver-page one" />
      <div className="ver-page two" />
      <div className="ver-page one " />
      <div className="ver-page two" />
    </div>
  );
};
