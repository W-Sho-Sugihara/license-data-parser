import { ButtonSubmitImageToBeParsed } from "../../components/buttons/submit-image-to-parsing";
import { render, screen } from "@testing-library/react";
import sampleImage from "../../images/sample-license.jpeg";
import userEvent from "@testing-library/user-event";
import { submitImageToParsing } from "../../utilities/submit-image-to-parsing";
import { extractInfoFromParsedData } from "../../utilities/extract-info-from-parsed-data";

jest.mock("../../utilities/submit-image-to-parsing");
jest.mock("../../utilities/extract-info-from-parsed-data");

describe("when given button to submit image to parsing", () => {
  it("should render submit button", () => {
    render(<ButtonSubmitImageToBeParsed img={null} />);
    const submitBtn = screen.getByText(/submit/i);

    expect(submitBtn).toBeInTheDocument();
  });

  it("should render disabled when image is null", () => {
    render(<ButtonSubmitImageToBeParsed img={null} />);
    const submitBtn = screen.getByText(/submit/i);

    expect(submitBtn).toBeDisabled();
  });

  it("should render enabled when an image is given", () => {
    render(<ButtonSubmitImageToBeParsed img={sampleImage} />);
    const submitBtn = screen.getByText(/submit/i);

    expect(submitBtn).toBeEnabled();
  });

  it("should take image and send it to be parsed", async () => {
    const mockFn = jest.fn();
    render(
      <ButtonSubmitImageToBeParsed
        img={sampleImage}
        setLicenseData={mockFn}
        state={"WA"}
      />
    );
    const submitBtn = screen.getByText(/submit/i);
    submitImageToParsing.mockImplementation(() => {
      return { data: [] };
    });
    await userEvent.click(submitBtn);

    expect(submitImageToParsing).toHaveBeenCalled();
  });

  it("should take returned parsed data and send to extraction", async () => {
    const mockFn = jest.fn();
    render(
      <ButtonSubmitImageToBeParsed
        img={sampleImage}
        setLicenseData={mockFn}
        state={"WA"}
      />
    );
    const submitBtn = screen.getByText(/submit/i);
    extractInfoFromParsedData.mockImplementation(() => {
      return { lastName: "SAMPLE", firstName: "John A" };
    });
    await userEvent.click(submitBtn);

    expect(extractInfoFromParsedData).toHaveBeenCalled();
    const expectedExtractedData = { lastName: "SAMPLE", firstName: "John A" };
    expect(extractInfoFromParsedData()).toEqual(expectedExtractedData);
  });
});
