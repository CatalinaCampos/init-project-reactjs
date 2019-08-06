import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionToggle = ({ items }) => (
  <Accordion defaultActiveKey="0">
    {items.map(item => (
      <Card key={item.eventKey}>
        <Card.Header>
          <Accordion.Toggle
            as={Button}
            variant={item.variant}
            eventKey={item.eventKey}
          >
            {item.title}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey={item.eventKey}>
          <Card.Body>{item.body}</Card.Body>
        </Accordion.Collapse>
      </Card>
    ))}
  </Accordion>
);

AccordionToggle.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      variant: PropTypes.string,
      eventKey: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })
  ).isRequired
};

export default AccordionToggle;
