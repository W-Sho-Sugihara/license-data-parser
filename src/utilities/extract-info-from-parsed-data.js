import { extractFirstAndMiddleNames } from "./extraction-function/first-and-middle-names";
import { extractDateOfBirth } from "./extraction-function/date-of-birth";
import { extractIssueDate } from "./extraction-function/issue-date";
import { extractLicenseNumber } from "./extraction-function/license-number";
import { extractLastName } from "./extraction-function/last-name";
import { extractExpirationDate } from "./extraction-function/expiration-date";
import {
  extractState,
  extractStreet,
  extractCity,
  extractZip,
} from "./extraction-function/address";

export const extractInfoFromParsedData = async (parsedObj, state) => {
  if (!parsedObj) return null;
  if (parsedObj.data.text.replace(/[^0-9a-z]/gi, "").length < 30) {
    alert(
      "Insufficient text was detected. Please retake and submit again. (yeah I know, alert is lame -_-)"
    );
    return;
  }
  const data = await parsedObj.data;
  const result = {};

  result.lastName = extractLastName(data, state);
  result.firstName = extractFirstAndMiddleNames(data, state);
  result.dateOfBirth = extractDateOfBirth(data, state);
  result.issueDate = extractIssueDate(data, state);
  result.licenseNumber = extractLicenseNumber(data, state);
  result.expireDate = extractExpirationDate(data, state);
  result.street = extractStreet(data, state);
  result.state = extractState(data, state);
  result.city = extractCity(data, state);
  result.zip = extractZip(data, state);

  return result;
};
