const dataImages = [
  {
    image:
      'https://s2.best-wallpaper.net/wallpaper/1680x1050/1107/Squirrel-in-the-grass_1680x1050.jpg',
    title: '1',
    subtitle: 'Uno',
    key: '1'
  },
  {
    image: 'https://wallpaperstock.net/wallpapers/thumbs1/53718wide.jpg',
    title: '2',
    subtitle: 'Dos',
    key: '2'
  },
  {
    image: 'http://www.fondox.net/wallpapers/una-ardilla-relajada-2033.jpg',
    title: '3',
    subtitle: 'Tres',
    key: '3'
  },
  {
    image:
      'https://i.pinimg.com/736x/2d/c1/b5/2dc1b562c6cb0783ace045d66046dc24.jpg',
    title: '4',
    subtitle: 'Cuatro',
    key: '4'
  }
];

const dataAccordion = [
  {
    title: 'Header 1',
    body: 'body 1',
    variant: 'link',
    eventKey: '0'
  },
  {
    title: 'Header 2',
    body: 'body 2',
    variant: 'link',
    eventKey: '1'
  }
];

const dataGroupBtn = [
  {
    variant: 'info',
    title: 'Btn 1',
    key: '1'
  },
  {
    variant: 'info',
    title: 'Btn 2',
    key: '2'
  },
  {
    variant: 'info',
    title: 'Btn 3',
    key: '3'
  }
];

const dataCardGroup = [
  {
    position: 'top',
    src:
      'https://alumni.crg.eu/sites/default/files/default_images/default-picture_0_0.png',
    title: 'card 1',
    text: 'text card 1',
    footer: 'footer 1',
    key: '1'
  },
  {
    position: 'top',
    src:
      'https://alumni.crg.eu/sites/default/files/default_images/default-picture_0_0.png',
    title: 'card 2',
    text: 'text card 2',
    footer: 'footer 2',
    key: '2'
  },
  {
    position: 'top',
    src:
      'https://alumni.crg.eu/sites/default/files/default_images/default-picture_0_0.png',
    title: 'card 3',
    text: 'text card 3',
    footer: 'footer 3',
    key: '3'
  }
];

const dataDropdown = [
  {
    path: '/',
    title: 'Action 1',
    key: '1'
  },
  {
    path: '/',
    title: 'Action 2',
    key: '2'
  },
  {
    path: '/',
    title: 'Action 3',
    key: '3'
  }
];

const dataInputDropdown = [
  {
    path: '/',
    text: 'dropdown 1',
    key: '1'
  },
  {
    path: '/',
    text: 'dropdown 2',
    key: '2'
  },
  {
    path: '/',
    text: 'dropdown 3',
    key: '3'
  }
];

const dataListGroup = [
  {
    title: '1',
    variant: 'light',
    key: '1'
  },
  {
    title: '2',
    variant: 'light',
    key: '2'
  },
  {
    title: '3',
    variant: 'light',
    key: '3'
  }
];

const dataNav = [
  {
    href: '/home',
    status: 'active',
    title: 'Active',
    key: '1'
  },
  {
    href: '/',
    status: 'disabled',
    title: 'Disabled',
    key: '2'
  },
  {
    href: '/',
    status: 'disabled',
    title: 'Disabled',
    key: '3'
  },
  {
    href: '/',
    status: 'active',
    title: 'Active',
    key: '4'
  },
];

const dataTooltip = [
  {
    direction: 'top',
    variant: 'info',
    text: 'uno ',
    title: '1'
  },
  {
    direction: 'bottom',
    variant: 'info',
    text: 'dos ',
    title: '2'
  },
  {
    direction: 'right',
    variant: 'info',
    text: 'tres ',
    title: '3'
  },
  {
    direction: 'left',
    variant: 'info',
    text: 'cuatro ',
    title: '4'
  }
];

export { 
  dataImages, 
  dataAccordion, 
  dataGroupBtn, 
  dataCardGroup, 
  dataDropdown, 
  dataInputDropdown, 
  dataListGroup, 
  dataNav, 
  dataTooltip 
};
