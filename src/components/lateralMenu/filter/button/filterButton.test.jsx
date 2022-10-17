import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FilterButton from "./filterButton";

describe("filterButton", () => {
    it("renders properly", () => {
        const input = "test input";
        render(<FilterButton input={input}/>);

        expect(screen.getByText(input)).toBeInTheDocument();
    });

    it("calls the onClick function when user click on filters", () => {
        const input = "test input";
        const setCategory = jest.fn();
        const setPageNumber = jest.fn();
        
        render(<FilterButton input={input} task={setCategory} setPageNumber={setPageNumber}/>);

        fireEvent.click(screen.getByText(input));
        expect(setCategory).toHaveBeenCalledTimes(1);
        expect(setCategory).toHaveReturned();

        expect(setPageNumber).toHaveBeenCalledTimes(1);
        expect(setPageNumber).toHaveReturned();
    });
});