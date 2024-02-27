import React from "react";
import { DisplayVideoFeed } from "../components/display-video-feed";
import { DisplayParsedData } from "../components/display-parsed-data";
import { CaptureButton } from "../components/buttons/capture-image";
import { ButtonRetake } from "../components/buttons/retake-image";
import { ButtonSubmitImageToBeParsed } from "../components/buttons/submit-image-to-parsing";
import { UploadFile } from "../components/upload-file";
import { SelectState } from "../components/select-state";

export const ParsePage = () => {
  const [img, setImg] = React.useState(null);
  const webcamRef = React.useRef(null);
  const [licenseData, setLicenseData] = React.useState(null);
  const [state, setState] = React.useState(null);

  return (
    <section className="flex flex-col h-5/6 flex-1 items-center lg:flex-row lg:items-start">
      <section className="flex flex-col items-center w-3/4 p-4 lg:w-1/2 lg:items-center">
        <SelectState setState={setState} />
        <article
          className="w-full h-auto bg-blue-500 rounded p-2"
          aria-label="Video Feed"
        >
          <DisplayVideoFeed img={img} webcamRef={webcamRef} />
        </article>
        <section aria-label="Capture and Retake Buttons">
          <CaptureButton img={img} setImg={setImg} webcamRef={webcamRef} />
          <ButtonRetake
            img={img}
            setImg={setImg}
            setLicenseData={setLicenseData}
          />
          <ButtonSubmitImageToBeParsed
            img={img}
            setLicenseData={setLicenseData}
            state={state}
          />
          <UploadFile setImg={setImg} />
        </section>
      </section>
      <aside className="w-1/2 p-4" aria-label="Parsed Data">
        {/* <h2 className="font-semibold text-2xl text-gray-800 p-1 pl-3">
          Parsed Data
        </h2> */}
        <DisplayParsedData data={licenseData} setLicenseData={setLicenseData} />
      </aside>
    </section>
  );
};
