import React from "react";

function Pagination({ reposPerPage, totalPages, changePage }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPages / reposPerPage); i++) {
    pageNumbers.push(i);
  }
  const numbers = pageNumbers.map((number) => {
    return (
      <button
        key={number}
        onClick={() => changePage(number)}
        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800 numPaginationBtn"
        id="minbtn"
      >
        {number}
      </button>
    );
  });
  return (
    <div
      id="pager"
      className="flex flex-row justify-between max-w-xs w-full px-0"
    >
      {numbers}
    </div>
  );
}

export default Pagination;
