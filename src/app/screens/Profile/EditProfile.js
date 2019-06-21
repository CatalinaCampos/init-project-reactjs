import React, { Component } from 'react';
import { ButtonDefault } from '../../components/';
import './style.css';

class EditProfile extends Component {
  render() {
    return (
      <div>
        <h1>EDITAR PERFIL</h1>
        <ButtonDefault name='Home' path='/' />
      </div>
    );
  }
}

export default EditProfile;