import React from 'react';
import { BasicInput, ButtonDefault, MainLogo } from '../../components/';
import './style.css';

const Login = () => {
    return (
      <div>
        <MainLogo />
        <div className='container'>
          <BasicInput size='sm' placeholder='Correo' className='inputLogin' />
          <BasicInput size='sm' placeholder='Contraseña' className='inputLogin' />
          <ButtonDefault name='Ingresar' path='/home-auth' />
        </div>
      </div>
    );
  }

export default Login;