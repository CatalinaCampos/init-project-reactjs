import React from 'react';
import {
  ButtonDefault,
  MainLogo,
  ControlledCarousel,
  Title,
  Accordion
} from '../../components';
import { images, dataAccordion } from '../../data/data'
import './style.css';

const Default = () => {
    return (
      <div>
        <div className='container-fluid home'>
          <MainLogo />
          <ButtonDefault
            name='Iniciar sesión'
            variant='link'
            path='/login'
          />
          <ButtonDefault
            name='Crear cuenta'
            path='/new-account'
          />
          <Title title='Home' />
          <Accordion items={dataAccordion}/>
          <ControlledCarousel items={images} />
        </div>
      </div>
    );
  }

export default Default; 