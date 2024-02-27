import React from "react";

export const CaptureButton = ({ img, setImg, webcamRef }) => {
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImg(imageSrc);
  }, [setImg, webcamRef]);

  return (
    <button
      className="font-semibold font-lg text-slate-200 m-4 p-2 border-2 bg-blue-600 border-blue-600 hover:bg-blue-300 hover:border-blue-300 hover:text-slate-600 active:translate-y-0.5 shadow shadow-slate-500 disabled:bg-gray-500 disabled:border-gray-500 disabled:hover:bg-gray-500 disabled:hover:border-gray-500 disabled:active:translate-y-0 disabled:hover:text-slate-200"
      onClick={capture}
      disabled={img !== null}
    >
      Capture
    </button>
  );
};
