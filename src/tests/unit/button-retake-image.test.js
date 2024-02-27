import { render, screen } from "@testing-library/react";
import { ButtonRetake } from "../../components/buttons/retake-image";
import sampleImage from "../../images/sample-license.jpeg";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("given retake button", () => {
  it("should render disabled when image is null", () => {
    render(<ButtonRetake img={null} />);
    const retakeBtn = screen.getByText(/retake/i);

    expect(retakeBtn).toBeInTheDocument();
    expect(retakeBtn).toBeDisabled();
  });

  it("should render enabled when image is not null", () => {
    render(<ButtonRetake img={sampleImage} />);
    const retakeBtn = screen.getByText(/retake/i);

    expect(retakeBtn).toBeInTheDocument();
    expect(retakeBtn).toBeEnabled();
  });

  it("should reset the image to null when clicked", () => {
    let imgMock = sampleImage;
    const setImgMock = () => (imgMock = null);
    const mockfn = jest.fn();

    render(
      <ButtonRetake img={imgMock} setImg={setImgMock} setLicenseData={mockfn} />
    );
    let retakeBtn = screen.getByText(/retake/i);
    userEvent.click(retakeBtn);

    expect(imgMock).toBe(null);
  });
});
