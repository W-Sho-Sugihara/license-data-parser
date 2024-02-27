import { render, screen } from "@testing-library/react";
import { Landing } from "../../pages/landing";
import { BrowserRouter } from "react-router-dom";

describe("when rendering landing", () => {
  it("should render app description", () => {
    render(<Landing />, { wrapper: BrowserRouter });

    const description = screen.getByText(
      "This app takes a picture of your driver's liscense (don't worry, it's not stored anywhere!) and will examine the information on your liscense and display that information in an accessible format. Say Cheese!"
    );
    expect(description).toBeInTheDocument();
  });

  it("should render welcome", () => {
    render(<Landing />, { wrapper: BrowserRouter });

    const welcome = screen.getByText("Welcome!");
    expect(welcome).toBeInTheDocument();
  });

  it("should render get started button", () => {
    render(<Landing />, { wrapper: BrowserRouter });
    const startButton = screen.getByText(/get started/i);

    expect(startButton).toBeInTheDocument();
  });
});
