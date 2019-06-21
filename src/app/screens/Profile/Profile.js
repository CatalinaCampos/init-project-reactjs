import React, { Component } from 'react';
import { ButtonDefault } from '../../components/';
import './style.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>PERFIL</h1>
        <ButtonDefault name='Editar perfil' path='profile-edit' />
      </div>
    );
  }
}

export default Profile;