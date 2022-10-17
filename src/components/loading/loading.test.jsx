import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Loading from "./loading";

describe("loading", () => {
    it("renders properly", () => {
        render(<Loading/>);

        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
});