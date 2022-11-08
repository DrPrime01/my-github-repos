import React from "react";
import { useReducer, useState, useEffect } from "react";

function Pagination({
  maxNumberOfPages,
  minNumberOfPages,
  currentPage,
  change,
}) {
  const [currentPageX, setCurrentPageX] = useState(currentPage);
  
  const [activeBtnNumber, setActiveBtnNumber] = useState(1);

  //function to get the number of a clicked btn and set the value to activeBtnNumber's value
  const paginationBtns = document.querySelectorAll(".numPaginationBtn");
  paginationBtns.forEach((paginationBtn) => {
    paginationBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.target.textContent;
      const parsed = parseInt(target)
      setActiveBtnNumber(parsed);
    });
  });

  useEffect(() => {
    console.log(activeBtnNumber)
    setCurrentPageX(activeBtnNumber);
    console.log(currentPageX)
    change(() => activeBtnNumber);
  }, [activeBtnNumber])

  const initialState = {
    minPageBtn: 1,
    midPageBtn: 2,
    maxPageBtn: 3,
    disableBtn: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "next": {
        if (currentPageX < maxNumberOfPages) {
          setCurrentPageX(prev => prev + 1);
          return {
            ...state,
            minPageBtn: state.minPageBtn + 1,
            maxPageBtn: state.maxPageBtn + 1,
            midPageBtn: state.midPageBtn + 1,
          };
        } else {
          return {
            ...state,
            disableBtn: true,
          };
        }
      }
      case "prev": {
        if (currentPageX > minNumberOfPages) {
          setCurrentPageX(prev => prev - 1);
          return {
            ...state,
            minPageBtn: state.minPageBtn - 1,
            maxPageBtn: state.maxPageBtn - 1,
            midPageBtn: state.midPageBtn - 1,
          };
        } else {
          setCurrentPageX(1);
          return {
            ...state,
            disableBtn: true,
          };
        }
      }
      default: {
        return state;
      }
    }
  }

  function handleNext(e) {
    e.preventDefault();
    dispatch({ type: "next" });
    change(()=> currentPageX);
    console.log(currentPageX);
  }
  function handlePrev(e) {
    e.preventDefault();
    dispatch({ type: "prev" });
    change(()=> currentPageX);
    console.log(currentPageX);
  }
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log(activeBtnNumber)
  //   console.log(currentPageX);
  // }
  return (
    <div
      id="pager"
      className="flex flex-row justify-between max-w-xs w-full px-0"
    >
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800 paginationBtn"
        id="prev"
        onClick={handlePrev}
        disabled={state.disableBtn}
      >
        Prev
      </button>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800 numPaginationBtn"
        id="minbtn"
        
      >
        {state.minPageBtn}
      </button>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800 numPaginationBtn"
        id="midbtn"
        
      >
        {state.midPageBtn}
      </button>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800 numPaginationBtn"
        id="maxbtn"
        
      >
        {state.maxPageBtn}
      </button>
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-900 focus:outline-none dark:focus:ring-gray-800 paginationBtn"
        id="next"
        onClick={handleNext}
        disabled={state.disableBtn}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
