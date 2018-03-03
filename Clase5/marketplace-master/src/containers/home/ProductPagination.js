import React, { Component } from 'react';

export default class ProductPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
    // Handlers
    this.handleCurrentPage = this.handleCurrentPage.bind(this);
  }

  handleCurrentPage(currentPage) {
    this.setState({
      currentPage
    });

    this.props.onCurrentPageChange(currentPage);
  }

  render() {
    const { currentPage } = this.state;
    const { itemsPerPage, totalItems } = this.props;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const links = [];

    for (let i = 1; i <= totalPages; i++) {
      links.push(
        (
          <button type="button" className={`btn btn-primary ${i === currentPage ? 'active' : ''}`} key={i} onClick={() => this.handleCurrentPage(i)}>{i}</button>
        )
      );
    }

    return (
      <div className="pagination justify-content-center">
        <div className="btn-group" role="group">
        {
          totalPages > 1 && <button type="button" className="btn btn-primary" disabled={currentPage === 1} onClick={() => this.handleCurrentPage(currentPage - 1)}>&laquo;</button>
        }
        {links}
        {
          totalPages > 1 && <button type="button" className="btn btn-primary" disabled={currentPage === totalPages} onClick={() => this.handleCurrentPage(currentPage + 1)}>&raquo;</button>
        }
        </div>
      </div>
    );
  }
}