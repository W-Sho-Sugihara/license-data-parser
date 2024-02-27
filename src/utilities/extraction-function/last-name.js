export const extractLastName = (data, state) => {
  switch (state) {
    case "WA":
      const lastName = data.lines[3].text.replace(/[^A-Z]/g, "");

      return lastName;
    default:
      return "not found";
  }
};
