import React, { Component } from 'react';
import { ButtonDefault } from '../../components/';
import './style.css';

class HomeLogged extends Component {
  render() {
    return (
      <div>
        <h1>HOME LOGGED</h1>
        <ButtonDefault name='Cerrar Sesión' path='/' />
        <ButtonDefault name='Perfil' path='/profile' />
      </div>
    );
  }
}

export default HomeLogged;