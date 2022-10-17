import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Sorter from "./sorter";

describe("sorter", () => {
    it("renders properly", () => {
        render(<Sorter/>);

        expect(screen.getByText(/order by/i)).toBeInTheDocument();
        expect(screen.getByText(/id/i)).toBeInTheDocument();
        expect(screen.getByText(/name/i)).toBeInTheDocument();
    });

    it("calls the onClick function when user click on id or name", () => {
        const setResult = jest.fn();
        const setPageNumber = jest.fn();
        
        render(<Sorter setPageNumber={setPageNumber} setResult={setResult}/>);

        fireEvent.click(screen.getByText(/id/i));
        expect(setResult).toHaveBeenCalledTimes(1);
        expect(setResult).toHaveReturned();

        fireEvent.click(screen.getByText(/name/i));
        expect(setResult).toHaveBeenCalledTimes(2);
        expect(setResult).toHaveReturned();

        expect(setPageNumber).toHaveBeenCalledTimes(2);
        expect(setPageNumber).toHaveReturned();
    });
});