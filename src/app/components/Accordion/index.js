import React from "react";
import PropTypes from 'prop-types';
import { Accordion, Card } from "react-bootstrap";

const AccordionToggle = ({items}) => ( 
    <Accordion>
      {items.map((item) => (
        <Card>
        <Card.Header>
          <Accordion.Toggle as={item.type} variant={item.variant} eventKey={item.eventKey}>
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

  AccordionToggle.prototype = {
    items: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      variant: PropTypes.types,
      eventKey: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    })).isRequired,
  };

  AccordionToggle.defaultProps = {
    variant: 'link'
  }

export default AccordionToggle;