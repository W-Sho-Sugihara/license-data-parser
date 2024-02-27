import React, { useEffect } from "react";

export const DisplayParsedData = ({ data = null, setLicenseData }) => {
  const [lastName, setLastName] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [licenseNumber, setLicenseNumber] = React.useState("");
  const [expireDate, setExpireDate] = React.useState("");
  const [issueDate, setIssueDate] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("");

  useEffect(() => {
    if (data !== null) {
      setLastName(data.lastName);
      setFirstName(data.firstName);
      setDateOfBirth(data.dateOfBirth);
      setLicenseNumber(data.licenseNumber);
      setExpireDate(data.expireDate);
      setIssueDate(data.issueDate);
      setStreet(data.street);
      setCity(data.city);
      setState(data.state);
      setZip(data.zip);
    }
  }, [data]);

  return (
    <section className="flex flex-col h-full ">
      <section className="h-fit border-slate-600 border-2 rounded p-2">
        {
          <form
            data-testid="parsed-data-plain-text-article"
            className="flex flex-col gap-1"
          >
            <label htmlFor="license-number">
              License Number:
              <input
                id="license-number"
                type="text"
                name="licenseNumber"
                value={licenseNumber}
                onChange={(e) => {
                  data.licenseNumber = e.target.value;
                  setLicenseData(data);
                  setLicenseNumber(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
            <label htmlFor="last-name">
              Last Name:
              <input
                id="last-name"
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => {
                  data.lastName = e.target.value;
                  setLicenseData(data);
                  setLastName(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
            <label htmlFor="first-name">
              First Name:
              <input
                id="first-name"
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  data.firstName = e.target.value;
                  setLicenseData(data);
                  setFirstName(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
            <label htmlFor="date-of-birth">
              Date of Birth:
              <input
                id="date-of-birth"
                type="text"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => {
                  data.dateOfBirth = e.target.value;
                  setLicenseData(data);
                  setDateOfBirth(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
            <label htmlFor="issue-date">
              Issue Date:
              <input
                id="issue-date"
                type="text"
                name="issueDate"
                value={issueDate}
                onChange={(e) => {
                  data.issueDate = e.target.value;
                  setLicenseData(data);
                  setIssueDate(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
            <label htmlFor="street">
              Street Address:
              <input
                id="street"
                type="text"
                name="street"
                value={street}
                onChange={(e) => {
                  data.street = e.target.value;
                  setLicenseData(data);
                  setStreet(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
            <label htmlFor="city">
              City:
              <input
                id="city"
                type="text"
                name="city"
                value={city}
                onChange={(e) => {
                  data.city = e.target.value;
                  setLicenseData(data);
                  setCity(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
            <label htmlFor="state">
              State:
              <input
                id="state"
                type="text"
                name="state"
                value={state}
                onChange={(e) => {
                  data.state = e.target.value;
                  setLicenseData(data);
                  setState(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
            <label htmlFor="zipcode">
              Zip Code:
              <input
                id="zipcode"
                type="text"
                name="zipcode"
                value={zip}
                onChange={(e) => {
                  data.zip = e.target.value;
                  setLicenseData(data);
                  setZip(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
            <label htmlFor="expire-date">
              Expiration Date:
              <input
                id="expire-date"
                type="text"
                name="expireDate"
                value={expireDate}
                onChange={(e) => {
                  data.expireDate = e.target.value;
                  setLicenseData(data);
                  setExpireDate(e.target.value);
                }}
                disabled={data === null}
              />
            </label>
          </form>
        }
      </section>
    </section>
  );
};
