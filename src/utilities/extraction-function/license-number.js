export const extractLicenseNumber = (data, state) => {
  switch (state) {
    case "WA":
      const pattern = /(WDL[0-9a-zA-Z]{9})/;
      const matches = data.lines[2].words.filter((obj) =>
        obj.text.match(pattern)
      );
      if (matches.length === 0) return "not found";

      const match = matches[0].text.match(pattern);
      const licenseNumber = match[1];
      return licenseNumber;

    default:
      return "not found";
  }
};
