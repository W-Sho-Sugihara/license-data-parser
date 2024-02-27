export const extractExpirationDate = (data, state) => {
  switch (state) {
    case "WA":
      const pattern = /(\d{2}\/\d{2}\/\d{4})/;
      const altPattern = /([0-9/]{10})/;
      const dates = data.lines[11].words.filter(
        (obj) => obj.text.match(pattern) || obj.text.match(altPattern)
      );
      if (dates.length === 0) return "not found";

      const match = dates[0].text.match(pattern);
      const expireDate = match[1];
      return expireDate;

    default:
      return "not found";
  }
};
