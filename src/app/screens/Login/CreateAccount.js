import React from 'react';
import { BasicInput, ButtonDefault, MainLogo } from '../../components/';
import './style.css';

const CreateAccount = () => (
      <div>
        <MainLogo />
        <div className='container'>
          <BasicInput size='sm' placeholder='Contraseña' className='inputLogin' />
          <ButtonDefault name='Ingresar' path='/home-auth' />
        </div>
      </div>
    );

export default CreateAccount;