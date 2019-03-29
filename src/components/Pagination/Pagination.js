import React from "react";
import _ from "lodash";
import "./Pagination.scss";

const Pagination = props => {
  const {
    itemsNumber,
    itemPerPage,
    onPageChange,
    currentPage
  } = props;

  let nbrOfPages = itemsNumber / itemPerPage;
  let totalPages = _.range(1, nbrOfPages + 1);

  return (
    <nav className="pagiNav">
      <ul className="pagination">
        <li className="page-item">
          {" "}
          <a
            className={"page-link"}
            onClick={() => {
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
          >
            {"<<"}
          </a>
        </li>
        {totalPages.map(page => (
          <li key={page} className="page-item">
            <a
              className={
                page === currentPage
                  ? "page-link active"
                  : "page-link"
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          {" "}
          <a
            className={"page-link"}
            onClick={() => {
              if (currentPage >= totalPages.length) {
                onPageChange(currentPage);
              } else {
                onPageChange(currentPage + 1);
              }
            }}
          >
            {">>"}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
