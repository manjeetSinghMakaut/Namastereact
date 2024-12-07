import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";

// group the testcases

describe("constactus page testcases", () => {
  it("should load contact us component", () => {
    render(<ContactUs />);

    // Get the h1 heading
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("should load contact us ", () => {
    render(<ContactUs />);

    // Get the h1 heading
    const Send = screen.getByText("Send");

    // Assertion
    expect(Send).toBeInTheDocument();
  });

  test("should load 2 input boxes", () => {
    render(<ContactUs />);

    const inputboxes = screen.getAllByRole("textbox");

    expect(inputboxes.length).toBe(2);
  });
});
