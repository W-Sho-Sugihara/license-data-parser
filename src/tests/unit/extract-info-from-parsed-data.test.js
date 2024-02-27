import { extractInfoFromParsedData } from "../../utilities/extract-info-from-parsed-data";
import { washingtonMockData } from "../mock-data/wa-license.js";

describe("given info extraction function and", () => {
  describe("WA liscense parsed data", () => {
    it("should return null if no parsed obj passed into extraction function", async () => {
      const result = await extractInfoFromParsedData();
      expect(result).toBeNull();
    });

    it("should extract last name", async () => {
      const result = await extractInfoFromParsedData(washingtonMockData, "WA");
      expect(result.lastName).toBe("SAMPLE");
    });

    it("should extract first name", async () => {
      const result = await extractInfoFromParsedData(washingtonMockData, "WA");
      expect(result.firstName).toBe("JOHN A");
    });

    it("should extract date of birth", async () => {
      const result = await extractInfoFromParsedData(washingtonMockData, "WA");
      expect(result.dateOfBirth).toBe("01/06/1958");
    });

    it("should extract issue date", async () => {
      const result = await extractInfoFromParsedData(washingtonMockData, "WA");
      expect(result.issueDate).toBe("01/06/2015");
    });

    it("should extract expiration date", async () => {
      const result = await extractInfoFromParsedData(washingtonMockData, "WA");
      expect(result.expireDate).toBe("10/12/2020");
    });

    it("should extract license number", async () => {
      const result = await extractInfoFromParsedData(washingtonMockData, "WA");
      expect(result.licenseNumber).toBe("WDLSAMPL1850");
    });

    it("should extract address", async () => {
      const result = await extractInfoFromParsedData(washingtonMockData, "WA");
      expect(result.street).toBe("123 STREET ADDRESS");
      expect(result.city).toBe("CITY");
      expect(result.state).toBe("WA");
      expect(result.zip).toBe("99999-0000");
    });
  });
});
