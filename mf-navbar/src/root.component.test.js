import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";
import "@testing-library/jest-dom/extend-expect";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root />);
    expect(getByText("Home")).toBeInTheDocument();
  });
});
