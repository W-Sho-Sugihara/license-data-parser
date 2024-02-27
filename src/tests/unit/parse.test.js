import { render, screen } from "@testing-library/react";
import { ParsePage } from "../../pages/parse";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("when rendering component", () => {
  // it("should render title", () => {
  //   render(<ParsePage />, { wrapper: BrowserRouter });

  //   const title = screen.getByText(/Video feed/i);
  //   expect(title).toBeInTheDocument();
  // });

  it("should render capture button", () => {
    render(<ParsePage />, { wrapper: BrowserRouter });

    const button = screen.getByText(/Capture/i);
    expect(button).toBeInTheDocument();
  });

  it("should render a disabled retake button", () => {
    render(<ParsePage />, { wrapper: BrowserRouter });
    const retakeBtn = screen.getByText(/retake/i);
    expect(retakeBtn).toBeInTheDocument();
    expect(retakeBtn).toBeDisabled();
  });

  it("should render a video display", () => {
    render(<ParsePage />, { wrapper: BrowserRouter });
    const videoElement = screen.getByTestId("webcam-video");
    expect(videoElement).toBeInTheDocument();
  });
});
