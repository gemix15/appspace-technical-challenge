import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./pagination.scss";

const Pagination = ({ pageNumber, info, setPageNumber }) => {

    let pageChange = (data) => {
        setPageNumber(data.selected + 1);
    };

    const [width, setWidth] = useState(window.innerWidth);
    const setDimensions = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", setDimensions);
        return () => window.removeEventListener("resize", setDimensions);
    }, []);

    return (
        <>
        <ReactPaginate
            nextLabel="Next" previousLabel="Prev" activeClassName="active" previousClassName='prev' nextClassName='next'
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1} 
            marginPagesDisplayed={width < 576 ? 1 : 2} pageRangeDisplayed={width < 576 ? 1 : 2}
            pageCount={info?.pages} onPageChange={pageChange}
            ></ReactPaginate>
        </>
    );
};

export default Pagination;
