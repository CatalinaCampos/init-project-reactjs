import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => ( 
  <div style={{ display: 'flex' }}> 
    <h1>{title}</h1> 
  </div>
);


Title.prototype = {
  title: PropTypes.string.isRequired
};

export default Title;