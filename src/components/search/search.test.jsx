import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import Search from "./search";

describe("search", () => {
    it("renders properly", () => {

        render(<Search/>);
    });
    
    it("renders an input with its placeholder", () => {

        render(<Search/>);

        expect(screen.getByPlaceholderText("Search characters")).toBeInTheDocument();
    });

    it("calls the onChange function when the user type something", () => {
        const testText = "something";
        const setSearch = jest.fn();
        const setPageNumber = jest.fn();

        render(<Search setSearch={setSearch} setPageNumber={setPageNumber}/>);

        const input = screen.getByRole("textbox");
		userEvent.type(input, testText);
        
		expect(setSearch).toHaveBeenCalledTimes(testText.length);
		expect(setPageNumber).toHaveBeenCalledTimes(testText.length);
    });
});
