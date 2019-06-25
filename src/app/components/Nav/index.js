import React from 'react';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';

const BaseNav = ({ items, variant }) => (
  <Nav variant={variant}>
    {items.map((item) => (
      <Nav.Item key={item.key}>
        <Nav.Link href={item.path}>{item.title}</Nav.Link>
      </Nav.Item>
    ))}
  </Nav>
);

BaseNav.protoTypes = {
  variant: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

BaseNav.defaultProps = {
  variant: 'tabs',
  path: null
};

const VerticalNav = ({ items, variant }) => (
  <Nav variant={variant} className='flex-column'>
    {items.map((item) => (
      <Nav.Link href={item.path} key={item.key}>{item.title}</Nav.Link>
    ))}
  </Nav>
);

VerticalNav.protoTypes = {
  variant: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

VerticalNav.defaultProps = {
  variant: 'tabs',
  path: null
};

const NavPills = ({ variant, path }) => (
  <Nav variant={variant} defaultActiveKey='/home'>
    <Nav.Item>
      <Nav.Link href={path}>Active</Nav.Link>
      <Nav.Link href='/home-auth'>Active</Nav.Link>
    </Nav.Item>
  </Nav>
);

export { BaseNav, VerticalNav, NavPills };
