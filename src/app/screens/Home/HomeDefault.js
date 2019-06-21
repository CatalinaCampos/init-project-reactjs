import React, { Component } from 'react';
import {
  ButtonDefault,
  MainLogo,
  ControlledCarousel,
  Title
} from '../../components/';
import './style.css';

class HomeDefault extends Component {
  render() {
    const images = [
      {
        image:
          'https://s2.best-wallpaper.net/wallpaper/1680x1050/1107/Squirrel-in-the-grass_1680x1050.jpg',
        title: '1',
        subtitle: 'Uno'
      },
      {
        image: 'https://wallpaperstock.net/wallpapers/thumbs1/53718wide.jpg',
        title: '2',
        subtitle: 'Dos'
      },
      {
        image: 'http://www.fondox.net/wallpapers/una-ardilla-relajada-2033.jpg',
        title: '3',
        subtitle: 'Tres'
      },
      {
        image:
          'https://i.pinimg.com/736x/2d/c1/b5/2dc1b562c6cb0783ace045d66046dc24.jpg',
        title: '4',
        subtitle: 'Cuatro'
      }
    ];
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
          <ControlledCarousel items={images} />
        </div>
      </div>
    );
  }
}

export default HomeDefault;