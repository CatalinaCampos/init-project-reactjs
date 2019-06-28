import React from "react";
import "./style.scss";

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
