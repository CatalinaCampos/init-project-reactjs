import React from 'react';
import { Input, ButtonDefault, MainLogo } from '../../components/';
import './style.css';

const Login = () => {
    return (
      <div>
        <MainLogo />
        <div className='container'>
          <Input size='sm' placeholder='Correo' className='inputLogin' />
          <Input size='sm' placeholder='Contraseña' className='inputLogin' />
          <ButtonDefault name='Ingresar' path='/home-auth' />
        </div>
      </div>
    );
  }

export default Login;