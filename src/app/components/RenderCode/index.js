import React from "react";
import "./style.css";

const RenderCode = ({ ...props }) => (
  <div> 
  <figure>
    <pre>
      <code>{props.children}</code>
    </pre>
  </figure>
  </div>
);

export default RenderCode;
