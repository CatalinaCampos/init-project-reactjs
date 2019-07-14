import React from 'react';
import { BasicInput, DefaultButton, MainLogo } from '../../components';
import './style.scss';

const Register = () => (
  <div>
    <MainLogo />
    <div className="container">
      <BasicInput size="sm" placeholder="Contraseña" className="inputLogin" />
      <DefaultButton text="Ingresar" path="/home-auth" />
    </div>
  </div>
);

export default Register;
