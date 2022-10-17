import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Filter from "./filter";

describe("filter", () => {
    it("renders properly", () => {
        render(<Filter/>);

        expect(screen.getByText("Filters")).toBeInTheDocument();
        expect(screen.getByText(/clear filters/i)).toBeInTheDocument();
        expect(screen.getByText("Gender")).toBeInTheDocument();
        expect(screen.getByText(/species/i)).toBeInTheDocument();
    });

    it("calls the onClick function when user click on clear filters", () => {
        const setGender = jest.fn();
        const setSpecies = jest.fn();
        const setPageNumber = jest.fn();
        
        render(<Filter setGender={setGender} setSpecies={setSpecies} setPageNumber={setPageNumber}/>);

        fireEvent.click(screen.getByText(/clear filters/i));
        expect(setGender).toHaveBeenCalledTimes(1);
        expect(setGender).toHaveReturned();

        expect(setSpecies).toHaveBeenCalledTimes(1);
        expect(setSpecies).toHaveReturned();

        expect(setPageNumber).toHaveBeenCalledTimes(1);
        expect(setPageNumber).toHaveReturned();
    });
});