import React from 'react';
import { memoize } from 'react-data-table-component';
import { Eye, Edit, Trash } from 'react-feather';
import { Button } from 'react-bootstrap';

const columns = memoize(clickHandler => [
  {
    name: 'ID',
    selector: 'id',
    sortable: true
  },
  {
    name: 'Titulo',
    selector: 'title',
    sortable: true
  },
  {
    name: 'URL',
    selector: 'url',
    sortable: true
  },
  {
    cell: item => (
      <div>
        <Button
          variant="outline-primary"
          size="sm"
          className="mr-2"
          onClick={() => clickHandler(item, 'show')}
        >
          <Eye />
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          className="mr-2"
          onClick={() => clickHandler(item, 'edit')}
        >
          <Edit />
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          className="mr-2"
          onClick={() => clickHandler(item, 'remove')}
        >
          <Trash />
        </Button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true
  }
]);

export default columns;
