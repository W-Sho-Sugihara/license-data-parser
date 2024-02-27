import { render, screen, act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { DisplayParsedData } from "../../components/display-parsed-data";
import userEvent from "@testing-library/user-event";

describe("when rendering component", () => {
  // it("should render plain format heading", () => {
  //   render(<DisplayParsedData />, { wrapper: BrowserRouter });

  //   const plainText = screen.getByText(/Plain text/i);
  //   expect(plainText).toBeInTheDocument();
  // });

  // it("should render JSON format heading", () => {
  //   render(<DisplayParsedData />, { wrapper: BrowserRouter });

  //   const jsonText = screen.getByText(/JSON/i);
  //   expect(jsonText).toBeInTheDocument();
  // });

  it("should render plain text article", () => {
    render(<DisplayParsedData />, { wrapper: BrowserRouter });
    const plainTextArticle = screen.getByTestId(
      "parsed-data-plain-text-article"
    );
    expect(plainTextArticle).toBeInTheDocument();
  });

  // it("should render JSON data article", () => {
  //   render(<DisplayParsedData />, { wrapper: BrowserRouter });
  //   const jsonDataArticle = screen.getByTestId("parsed-data-json-article");
  //   expect(jsonDataArticle).toBeInTheDocument();
  // });

  it("should render license data labels", () => {
    render(<DisplayParsedData data={null} />, { wrapper: BrowserRouter });

    const lastName = screen.getByText(/last name:/i);
    const FirstName = screen.getByText(/first name:/i);
    const dateOfBirth = screen.getByText(/date of birth:/i);
    const licenseNumber = screen.getByText(/license Number:/i);
    const issueDate = screen.getByText(/Issue Date:/i);
    const expireDate = screen.getByText(/Expiration Date:/i);

    expect(lastName).toBeInTheDocument();
    expect(FirstName).toBeInTheDocument();
    expect(dateOfBirth).toBeInTheDocument();
    expect(licenseNumber).toBeInTheDocument();
    expect(issueDate).toBeInTheDocument();
    expect(expireDate).toBeInTheDocument();
  });

  it("should render input values as empty when data is null", () => {
    render(<DisplayParsedData data={null} />, { wrapper: BrowserRouter });
    const lastNameInput = screen.getByRole("textbox", {
      name: "Last Name:",
    });
    const firstNameInput = screen.getByRole("textbox", {
      name: "First Name:",
    });
    const dateOfBirthInput = screen.getByRole("textbox", {
      name: "Date of Birth:",
    });
    const licenseNumberInput = screen.getByRole("textbox", {
      name: "License Number:",
    });
    const issueDateInput = screen.getByRole("textbox", {
      name: "Issue Date:",
    });
    const expireDateInput = screen.getByRole("textbox", {
      name: "Expiration Date:",
    });
    expect(lastNameInput).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(dateOfBirthInput).toBeInTheDocument();
    expect(licenseNumberInput).toBeInTheDocument();
    expect(issueDateInput).toBeInTheDocument();
    expect(expireDateInput).toBeInTheDocument();
    expect(lastNameInput.value).toBe("");
    expect(firstNameInput.value).toBe("");
    expect(dateOfBirthInput.value).toBe("");
    expect(licenseNumberInput.value).toBe("");
    expect(issueDateInput.value).toBe("");
    expect(expireDateInput.value).toBe("");
  });

  it("should render license data as input values when given parsed data", () => {
    const mockData = {
      lastName: "Sample",
      firstName: "Andrew Jason",
      dateOfBirth: "01/07/1973",
      licenseNumber: "99 999 9999",
      issueDate: "01/07/2022",
      expireDate: "01/08/2026",
      issuingState: "Pennsylvania",
    };

    render(<DisplayParsedData data={mockData} />, { wrapper: BrowserRouter });
    const lastNameInput = screen.getByRole("textbox", {
      name: "Last Name:",
    });
    const firstNameInput = screen.getByRole("textbox", {
      name: "First Name:",
    });
    const dateOfBirthInput = screen.getByRole("textbox", {
      name: "Date of Birth:",
    });
    const licenseNumberInput = screen.getByRole("textbox", {
      name: "License Number:",
    });
    const issueDateInput = screen.getByRole("textbox", {
      name: "Issue Date:",
    });
    const expireDateInput = screen.getByRole("textbox", {
      name: "Expiration Date:",
    });

    expect(lastNameInput.value).toBe("Sample");
    expect(firstNameInput.value).toBe("Andrew Jason");
    expect(dateOfBirthInput.value).toBe("01/07/1973");
    expect(licenseNumberInput.value).toBe("99 999 9999");
    expect(issueDateInput.value).toBe("01/07/2022");
    expect(expireDateInput.value).toBe("01/08/2026");
  });
});

describe("given license data inputs", () => {
  it("should update lastName value when input is changed", () => {
    let mockData = { lastName: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const lastNameInput = screen.getByRole("textbox", {
      name: "Last Name:",
    });
    act(() => {
      userEvent.type(lastNameInput, "foo");
    });
    expect(lastNameInput.value).toBe("foo");
  });

  it("should update firstName value when input is changed", () => {
    let mockData = { firstName: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const firstNameInput = screen.getByRole("textbox", {
      name: "First Name:",
    });
    act(() => {
      userEvent.type(firstNameInput, "foo");
    });
    expect(firstNameInput.value).toBe("foo");
  });

  it("should update dateOfBirth value when input is changed", () => {
    let mockData = { dateOfBirth: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const dateOfBirthInput = screen.getByRole("textbox", {
      name: "Date of Birth:",
    });
    act(() => {
      userEvent.type(dateOfBirthInput, "01/2/2012");
    });
    expect(dateOfBirthInput.value).toBe("01/2/2012");
  });

  it("should update licenseNumber value when input is changed", () => {
    let mockData = { licenseNumber: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const licenseNumberInput = screen.getByRole("textbox", {
      name: "License Number:",
    });
    act(() => {
      userEvent.type(licenseNumberInput, "99 999 9999");
    });
    expect(licenseNumberInput.value).toBe("99 999 9999");
  });

  it("should update issueDateInput value when input is changed", () => {
    let mockData = { issueDate: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const issueDateInput = screen.getByRole("textbox", {
      name: "Issue Date:",
    });
    act(() => {
      userEvent.type(issueDateInput, "01/17/2020");
    });
    expect(issueDateInput.value).toBe("01/17/2020");
  });

  it("should update expireDateInput value when input is changed", () => {
    let mockData = { expireDate: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const expireDateInput = screen.getByRole("textbox", {
      name: "Expiration Date:",
    });
    act(() => {
      userEvent.type(expireDateInput, "01/17/2026");
    });
    expect(expireDateInput.value).toBe("01/17/2026");
  });
  it("should update streetInput value when input is changed", () => {
    let mockData = { street: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const expireDateInput = screen.getByRole("textbox", {
      name: "Street Address:",
    });
    act(() => {
      userEvent.type(expireDateInput, "123 STREET AVE");
    });
    expect(expireDateInput.value).toBe("123 STREET AVE");
  });
  it("should update cityInput value when input is changed", () => {
    let mockData = { city: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const expireDateInput = screen.getByRole("textbox", {
      name: "City:",
    });
    act(() => {
      userEvent.type(expireDateInput, "CITY");
    });
    expect(expireDateInput.value).toBe("CITY");
  });
  it("should update stateInput value when input is changed", () => {
    let mockData = { state: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const expireDateInput = screen.getByRole("textbox", {
      name: "State:",
    });
    act(() => {
      userEvent.type(expireDateInput, "WA");
    });
    expect(expireDateInput.value).toBe("WA");
  });
  it("should update zipInput value when input is changed", () => {
    let mockData = { zip: "" };
    const setLicenseDataMock = (newMockData) => (mockData = newMockData);
    render(
      <DisplayParsedData data={mockData} setLicenseData={setLicenseDataMock} />,
      { wrapper: BrowserRouter }
    );
    const expireDateInput = screen.getByRole("textbox", {
      name: "Zip Code:",
    });
    act(() => {
      userEvent.type(expireDateInput, "99999-0000");
    });
    expect(expireDateInput.value).toBe("99999-0000");
  });
});
