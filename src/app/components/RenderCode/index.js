import React from "react";
import PropTypes from "prop-types";
import './style.css';

const RenderCode = ({ ...props }) => (
  <figure className='code'>
    <pre>
      <code>
        {props.children}
      </code>
    </pre>
  </figure>
);

export default RenderCode;
