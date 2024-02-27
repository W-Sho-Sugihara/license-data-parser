export const extractFirstAndMiddleNames = (data, state) => {
  switch (state) {
    case 'WA':
      const firstName = data.lines[4].words[1].text.replace(/[^A-Z]/g, "");
      let middleName;
      if (data.lines[4].words[2]) {
        middleName = data.lines[4].words[2].text.replace(/[^A-Z]/g, "");
      }
      return [firstName, middleName].join(" ");
  
    default:
      return 'not found'
  }
};
