import React from 'react';
//import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';

const BasicPagination = () => (
  <div style={{ display: 'flex' }}> 
  <Pagination>
    <Pagination.First />
    <Pagination.Prev />
    <Pagination.Item>{1}</Pagination.Item>
    <Pagination.Ellipsis />

    <Pagination.Item active>{10}</Pagination.Item>
    <Pagination.Item>{11}</Pagination.Item>
    <Pagination.Item>{12}</Pagination.Item>
    <Pagination.Item>{13}</Pagination.Item>
    <Pagination.Item>{14}</Pagination.Item>

    <Pagination.Ellipsis />
    <Pagination.Item>{20}</Pagination.Item>
    <Pagination.Next />
    <Pagination.Last />
  </Pagination>
  </div>
);

export default BasicPagination;
