export const extractIssueDate = (data, state) => {
  switch (state) {
    case 'WA':
      const pattern = /(\d{2}\/\d{2}\/\d{4})/;
      const dates = data.lines[5].words.filter((obj) => obj.text.match(pattern));
      if (dates.length === 0) return "not found";
      let match;
      let issueDate;
      if (dates.length === 2) {
        match = dates[1].text.match(pattern);
        issueDate = match[1];
      } else {
        match = dates[0].text.match(pattern);
        issueDate = match[1];
      }
      return issueDate;
  
    default:
      return 'not found'
  }
};
