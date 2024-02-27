export const extractStreet = (data, state) => {
  switch (state) {
    case "WA":
      const pattern = /(\d+\s[0-9a-z\s]+)/i;
      const joinedWords = data.lines[6].words.map((obj) => obj.text).join(" ");
      if (joinedWords.length === 0) return "not found";

      const streetMatch = joinedWords.match(pattern);

      if (streetMatch[1]) {
        return streetMatch[1];
      }
      return "not found";
    default:
      return "not found";
  }
};

export const extractCity = (data, state) => {
  switch (state) {
    case "WA":
      const pattern = /(\s*[A-Z]+\s)/;
      const city = data.lines[7].text.match(pattern);
      if (!city[1]) {
        return "not found";
      } else {
        return city[1].trim();
      }
    default:
      return "not found";
  }
};

export const extractState = (data, state) => {
  switch (state) {
    case "WA":
      const pattern = /(\s[A-Z]{2}\s)/;
      const state = data.lines[7].text.match(pattern);
      if (!state[1]) {
        return "not found";
      } else {
        return state[1].trim();
      }

    default:
      return "not found";
  }
};

export const extractZip = (data, state) => {
  switch (state) {
    case "WA":
      const pattern = /(\d{5}.+\d{4})/;
      const zip = data.lines[7].text.match(pattern);
      if (!zip[1]) {
        return "not found";
      } else {
        return zip[1];
      }

    default:
      return "not found";
  }
};
