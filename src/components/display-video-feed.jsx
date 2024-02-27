import Webcam from "react-webcam";
import React from "react";

const CapturedImage = ({ img }) => {
  return (
    <section>
      <img width={1280} height={720} alt="display captured" src={img} />
    </section>
  );
};

export const DisplayVideoFeed = ({ img = null, webcamRef }) => {
  const browserVideoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  // const mobileVideoConstraints = {
  //   width: { min: 480 },
  //   height: { min: 720 },
  //   aspectRatio: 0.6666666667,
  //   facingMode: { exact: "environment" },
  // };

  return (
    <section>
      {img === null ? (
        <Webcam
          className="w-full h-full border-blue-300 rounded "
          audio={false}
          // height={720}
          screenshotFormat="image/jpeg"
          // width={1280}
          ref={webcamRef}
          videoConstraints={browserVideoConstraints}
          imageSmoothing={true}
          mirrored={false}
          data-testid="webcam-video"
        ></Webcam>
      ) : (
        <CapturedImage img={img} />
      )}
    </section>
  );
};
