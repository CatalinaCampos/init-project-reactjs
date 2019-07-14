import React from 'react';
import './style.scss';

const RenderCode = ({ ...props }) => {
  const { children } = props;
  return (
    <div>
      <figure>
        <pre>
          <code>{children}</code>
        </pre>
      </figure>
    </div>
  );
};

export default RenderCode;
