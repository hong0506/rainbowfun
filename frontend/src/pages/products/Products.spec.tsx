import { render } from "@testing-library/react";
import { Products } from "./Products";

describe("Products", () => {
  it("render Products component", () => {
    render(<Products />);
  });
});
