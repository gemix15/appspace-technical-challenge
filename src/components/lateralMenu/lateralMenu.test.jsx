import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LateralMenu from "./lateralMenu";

describe("lateralMenu", () => {
    it("renders properly", () => {
        render(<LateralMenu/>);
    });
});