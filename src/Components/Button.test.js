import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders its label text", () => {
    render(<Button>Ask Aliens</Button>);

    expect(
      screen.getByRole("button", { name: "Ask Aliens" })
    ).toBeInTheDocument();
  });

  it("uses button as the default type", () => {
    render(<Button>Default Button</Button>);

    expect(screen.getByRole("button", { name: "Default Button" })).toHaveAttribute(
      "type",
      "button"
    );
  });

  it("calls onClick when pressed", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Press Me</Button>);

    fireEvent.click(screen.getByRole("button", { name: "Press Me" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("accepts a custom button type", () => {
    render(<Button type="submit">Submit</Button>);

    expect(screen.getByRole("button", { name: "Submit" })).toHaveAttribute(
      "type",
      "submit"
    );
  });
});
