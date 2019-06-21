import React from 'react';
import { ButtonDefault } from '../../components';
import './style.css';

const Logged = () => {
    return (
      <div>
        <h1>HOME LOGGED</h1>
        <ButtonDefault name='Cerrar Sesión' path='/' />
        <ButtonDefault name='Perfil' path='/profile' />
      </div>
    );
  }

export default Logged;