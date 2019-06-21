import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const AccordionTogle = () =>  {
        return(<Accordion>
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                  Click me!
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey='0'>
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card />
          </Accordion>)
    }

export default AccordionTogle;