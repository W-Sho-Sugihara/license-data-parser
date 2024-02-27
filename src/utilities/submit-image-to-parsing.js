import { createWorker } from "tesseract.js";

export const submitImageToParsing = async (img = null) => {
  if (!img) return null;
  const worker = await createWorker("eng", 1, {
    logger: (m) => {
      console.log(m);
    },
  });

  const result = await worker.recognize(img);
  await worker.terminate();
  console.log(result);
  return result;
};
