import React, { Component } from 'react';
import { Col, FormControl, Form, Spinner } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import PropTypes from 'prop-types';

const Debounce = AwesomeDebouncePromise(value => value, 500);

class ComponentDataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      page: 0,
      RowsPage: props.RowsPage,
      column: '',
      direction: 'desc'
    };
  }

  componentDidMount() {
    this.setRequest();
  }

  componentDidUpdate(prevProps) {
    const { moreData } = this.props;
    if (moreData) {
      if (moreData.finished !== prevProps.moreData.finished) {
        this.handleRequest();
      }
    }
  }

  setRequest = params => {
    const { reduxDispatch, moreData } = this.props;
    const { RowsPage, page, textInput, direction, column } = this.state;

    reduxDispatch({
      name: textInput,
      display_start: page * RowsPage,
      display_length: RowsPage,
      sort_direction: direction,
      sort_column: column,
      ...moreData,
      ...params
    });
  };

  onChangePage = page => {
    const { RowsPage } = this.state;
    this.setState({
      page: page - 1
    });

    this.setRequest({
      display_start: (page - 1) * RowsPage
    });
  };

  handleRequest = () => {
    this.setRequest({
      display_start: 0
    });
  };

  onChangeRowsPage = RowsPage => {
    this.setState({
      RowsPage
    });

    this.setRequest({
      display_start: 0,
      display_length: RowsPage
    });
  };

  handleSearchRequest = async name => {
    this.setState({
      textInput: name,
      page: 0
    });
    const text = await Debounce(name);

    this.setRequest({
      name: text,
      display_start: 0
    });
  };

  handleSort = (column, direction) => {
    this.setState({
      direction,
      column: column.selector,
      page: 0
    });

    this.setRequest({
      display_start: 0,
      sort_direction: direction,
      sort_column: column.selector
    });
  };

  render() {
    const {
      columns,
      onRequest,
      data,
      totalRows,
      RowsPage,
      expandable
    } = this.props;
    const { textInput } = this.state;
    return (
      <div className="mt-4" style={{ position: 'relative' }}>
        {onRequest && (
          <div
            className="containerSpinnerLoad"
            style={{ position: 'absolute', height: '100%' }}
          >
            <Spinner animation="border" variant="primary" />
          </div>
        )}
        <DataTable
          className="custom-table"
          pagination
          noDataComponent={onRequest ? '' : 'NO SE ENCONTRARON DATOS'}
          paginationServer
          expandableRows={expandable}
          paginationTotalRows={totalRows}
          paginationPerPage={RowsPage}
          paginationRowsPerPageOptions={[5, 10, 15]}
          onChangePage={this.onChangePage}
          onChangeRowsPerPage={this.onChangeRowsPage}
          paginationComponentOptions={{
            rowsPerPageText: 'Filas por pagina:',
            rangeSeparatorText: 'de'
          }}
          sortServer
          onSort={(column, direction) => this.handleSort(column, direction)}
          sortFunction={a => a}
          noHeader
          subHeader
          disabled={onRequest}
          columns={columns}
          data={data}
          subHeaderComponent={
            <Col xs={5}>
              <Form.Group>
                <FormControl
                  placeholder="Buscar"
                  value={textInput}
                  onChange={text => this.handleSearchRequest(text.target.value)}
                  onFocus={() => this.setRequest()}
                />
              </Form.Group>
            </Col>
          }
        />
      </div>
    );
  }
}

ComponentDataTable.propTypes = {
  onRequest: PropTypes.bool,
  totalRows: PropTypes.number,
  RowsPage: PropTypes.number,
  expandable: PropTypes.bool,
  moreData: PropTypes.string,
  reduxDispatch: PropTypes.func
};

ComponentDataTable.defaultProps = {
  onRequest: false,
  totalRows: 0,
  RowsPage: 10,
  expandable: false,
  moreData: '',
  reduxDispatch: () => null
};

export default ComponentDataTable;
