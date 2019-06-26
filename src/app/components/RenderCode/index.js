import React from "react";
import PropTypes from "prop-types";
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
