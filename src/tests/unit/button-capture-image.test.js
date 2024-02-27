import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import sampleImage from "../../images/sample-license.jpeg";
import { CaptureButton } from "../../components/buttons/capture-image";
import userEvent from "@testing-library/user-event";

describe("given capture button", () => {
  it("should call getScreenshotMock and setImgMock functions on button click", () => {
    const getScreenshotMock = jest.fn();
    const webcamRefMock = {
      current: {
        getScreenshot: getScreenshotMock,
      },
    };
    const setImgMock = jest.fn();
    render(
      <CaptureButton img={null} setImg={setImgMock} webcamRef={webcamRefMock} />
    );
    const captureBtn = screen.getByText(/capture/i);
    userEvent.click(captureBtn);

    expect(getScreenshotMock).toHaveBeenCalled();
    expect(setImgMock).toHaveBeenCalled();
  });

  it("should be enabled when no image captured yet", () => {
    render(<CaptureButton img={null} />, { wrapper: BrowserRouter });
    const captureBtn = screen.getByText(/capture/i);

    expect(captureBtn).toBeEnabled();
  });

  it("should be disabled when image captured and saved to img variable", () => {
    render(<CaptureButton img={sampleImage} />, { wrapper: BrowserRouter });
    const captureBtn = screen.getByText(/capture/i);

    expect(captureBtn).toBeDisabled();
  });
});
