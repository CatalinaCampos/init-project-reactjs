import React from 'react';
import {
  ButtonDefault,
  MainLogo,
  ControlledCarousel,
  Title,
  Accordion
} from '../../components';
import { images } from '../../data/data'
import './style.css';

const Default = () => {
    return (
      <div>
        <div className='container-fluid home'>
          <MainLogo />
          <ButtonDefault
            name='Iniciar sesión'
            variantType='link'
            size='md'
            path='/login'
          />
          <ButtonDefault
            name='Crear cuenta'
            variantType='outline-info'
            size='md'
            path='/new-account'
          />
          <Title title='Home' />
          <Accordion />
          <ControlledCarousel items={images} />
        </div>
      </div>
    );
  }

export default Default;