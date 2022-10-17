import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Category from "./category";

describe("category", () => {
    it("renders properly", () => {
        render(<Category/>);

        expect(screen.getByText("title")).toBeInTheDocument();
    });

    it("should contains a button with defined text", () => {
        const title = "testing title";
        
        render(<Category title={title}/>);

        expect(screen.getByRole("button").innerHTML).toBe(title);
    });

    it("should contains all categories", () => {
        const categories = ["A", "B", "C"];

        render(<Category categories={categories}/>);

        categories.forEach(category => expect(screen.getByText(category)).toBeInTheDocument());
    });
});