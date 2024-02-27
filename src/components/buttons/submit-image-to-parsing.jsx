import React from "react";
import { submitImageToParsing } from "../../utilities/submit-image-to-parsing.js";
import { extractInfoFromParsedData } from "../../utilities/extract-info-from-parsed-data.js";

export const ButtonSubmitImageToBeParsed = ({
  img = null,
  setLicenseData,
  state,
}) => {
  const callback = React.useCallback(async () => {
    if (!state) {
      alert(
        "Please select your state and resubmit. (yeah I know, alert is lame -_-)"
      );
      return;
    }
    try {
      const parsedObj = await submitImageToParsing(img);
      const result = await extractInfoFromParsedData(parsedObj, state);
      setLicenseData(result);
    } catch (error) {
      console.error(error);
      alert(
        "An error occured during parsing or data extraction. Please retake photo and try again."
      );
    }
  }, [img, setLicenseData, state]);

  return (
    <button
      className="font-semibold font-lg text-slate-200 m-4 p-2 border-2 bg-blue-600 border-blue-600 hover:bg-blue-300 hover:border-blue-300 hover:text-slate-600 active:translate-y-1 shadow shadow-slate-500 disabled:bg-gray-500 disabled:border-gray-500 disabled:hover:bg-gray-500 disabled:hover:border-gray-500 disabled:active:translate-y-0 disabled:hover:text-slate-200"
      onClick={callback}
      disabled={img === null}
    >
      Submit
    </button>
  );
};
