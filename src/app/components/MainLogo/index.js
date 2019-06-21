import React from 'react';
import logo from './logo_nnodes.png';
import { Image } from 'react-bootstrap';
import './style.css';

const MainLogo = () => {
  return <Image src={logo} alt={logo} className='logo_nnodes' />;
};

export default MainLogo;