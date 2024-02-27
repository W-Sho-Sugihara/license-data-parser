import { render, screen } from "@testing-library/react";
import { Heading } from "../../components/heading";
import { BrowserRouter } from "react-router-dom";

test("renders", () => {
  render(<Heading />, { wrapper: BrowserRouter });
  const title = screen.getByText(/License Data Parser/i);
  expect(title).toBeInTheDocument();
});
