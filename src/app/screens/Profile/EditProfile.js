import React from 'react';
import { LinkButton } from '../../components';
import './style.scss';

const EditProfile = () => {
  return (
    <div>
      <h1>EDITAR PERFIL</h1>
      <LinkButton text="Home" to="/" />
    </div>
  );
};

export default EditProfile;
