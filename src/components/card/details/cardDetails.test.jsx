import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter as Router } from "react-router-dom";
import CardDetails from "./cardDetails";

describe("cardDetails", () => {
    it("renders properly", () => {

        render(<Router><CardDetails/></Router>);

        screen.getByText("Loading...");
    });
});
