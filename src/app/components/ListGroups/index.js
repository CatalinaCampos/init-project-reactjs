import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

const ListGroups = ({ items, size }) => (
  <ListGroup size={size}>
    {items.map(item => (
      <ListGroup.Item variant={item.variant} key={item.key}>
        {item.title}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

ListGroups.propTypes = {
  size: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      variant: PropTypes.string,
      key: PropTypes.string.isRequired
    })
  ).isRequired
};

ListGroups.defaultProps = {
  size: 'sm'
};

export default ListGroups;
