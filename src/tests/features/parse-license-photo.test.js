import { render, screen, fireEvent, act } from "@testing-library/react";
import App from "../../App";
import { BrowserRouter } from "react-router-dom";

describe("given app", () => {
  it("should take a picture, parse the data and return the data in a readable format", () => {
    render(<App />, { wrapper: BrowserRouter });
    const sampleLiscense = "file/path/to/sample/liscense/image";

    const startBtn = screen.getByText(/start/i);
    expect(startBtn).toBeInTheDocument();
    fireEvent.click(startBtn);
    const captureBtn = screen.getByText(/capture/i);
    expect(captureBtn).toBeInTheDocument();

    // fireEvent.click(captureBtn);

    // click start button
    // displays webcam video feed
    // click 'take'picture' button
    // should display taken picture
    //
    // click the submit button and send the sample liscense image to be parsed
    // the function called when submit button clicked should receive the sample image
    // the parsing function should parse the sample image and return the data
    // the returned data expected to be the same as the predetermined data
    // the returned data should be displayed correctly
  });
});
