import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { DisplayVideoFeed } from "../../components/display-video-feed";
import React from "react";
import sampleImage from "../../images/sample-license.jpeg";

describe("when rendering component", () => {
  it("should not render img on initial rendering", () => {
    render(<DisplayVideoFeed />, { wrapper: BrowserRouter });

    const image = screen.queryByRole("img");
    expect(image).toBeNull();
  });

  it("should render video feed on initial rendering", () => {
    render(<DisplayVideoFeed />, { wrapper: BrowserRouter });

    const videoFeed = screen.getByTestId("webcam-video");
    expect(videoFeed).toBeInTheDocument();
  });
});

describe("when given image", () => {
  it("should render image tag", () => {
    render(<DisplayVideoFeed img={sampleImage} />, { wrapper: BrowserRouter });
    const capturedImage = screen.getByRole("img");

    expect(capturedImage).toBeInTheDocument();
  });

  it("should not render video feed", () => {
    render(<DisplayVideoFeed img={sampleImage} />, { wrapper: BrowserRouter });
    const videoFeed = screen.queryByRole("video");

    expect(videoFeed).toBeNull();
  });

  it("should display the given image", () => {
    render(<DisplayVideoFeed img={sampleImage} />, { wrapper: BrowserRouter });
    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", sampleImage);
  });
});
