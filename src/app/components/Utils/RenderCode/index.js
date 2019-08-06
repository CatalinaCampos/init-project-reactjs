import React from 'react';

const RenderCode = ({ ...props }) => {
  const { children } = props;
  return (
    <div>
      <figure>
        <pre>{children ? <code>&lt;{children} /&gt;</code> : false}</pre>
      </figure>
    </div>
  );
};

export default RenderCode;
