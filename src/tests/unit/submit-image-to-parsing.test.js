import { submitImageToParsing } from "../../utilities/submit-image-to-parsing";
import tesseract from "tesseract.js";

jest.mock("tesseract.js");

describe("submitImageToParsing", () => {
  it("should submit image to parsing and return an object with a data property", async () => {
    const mockRecognize = jest.fn().mockResolvedValue({ data: "mocked data" });
    const mockTerminate = jest.fn().mockResolvedValue();

    const mockWorker = {
      recognize: mockRecognize,
      terminate: mockTerminate,
    };

    tesseract.createWorker.mockResolvedValue(mockWorker);
    const result = await submitImageToParsing("mocked image");

    expect(tesseract.createWorker).toHaveBeenCalledWith(
      "eng",
      1,
      expect.any(Object)
    );
    expect(mockRecognize).toHaveBeenCalledWith("mocked image");
    expect(mockTerminate).toHaveBeenCalled();
    expect(result).toEqual({ data: "mocked data" });
  });

  it("should return null when img is null", async () => {
    const result = await submitImageToParsing(null);
    expect(result).toBeNull();
    expect(tesseract.createWorker).not.toHaveBeenCalled();
  });
});
