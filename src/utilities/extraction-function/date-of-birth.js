export const extractDateOfBirth = (data, state) => {
  switch (state) {
    case "WA":
      const pattern = /(\d{2}\/\d{2}\/\d{4})/;
      const dates = data.lines[5].words.filter((obj) =>
        obj.text.match(pattern)
      );
      if (dates.length === 0) return "not found";

      const match = dates[0].text.match(pattern);
      const DOB = match[1];
      return DOB;

    default:
      return "not found";
  }
};
