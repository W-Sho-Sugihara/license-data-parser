#License Data Parser App

This app is designed to take an image of a drivers license and extract individual pieces of information from the image and store them as properties of an object that can then be used at a later time.

This app is was created using Javascript & React.js as the language and frontend library. TailwindCSS was used for styling and layout. The OCR (Optical Character Recognition) library Tesseract.js was for used extracting data from images. No outside API's were used in the creating of this app and everything runs in the browser.

The greatest challenges for this project was maximizing Tesseract while working with its limitations, as Tesseract proved to be very inaccurate and having to accurately extract data from 50 different layouts of drivers licenses, as each state has a unique license. I ultimately had to accept that Tesseract was not perfect and that whomever was submitting an image to parsing would have to manually check the extracted data and fix what was wrong or missing. I did this by having the extracted informatiod displayed in input elements that could then be changed by the user. Dealing with 50 unique licenses is an issue that I was not able to elegantly overcome as I simply went with a brute force approach and envisioned 50 different extraction templates and patterns for each state. I envisioned a user selecting their state, taking a picture of there license and when submitted it to parsing the corresponding extraction template and patterns for their state would be used to extract the data. Thought this is extremely time consuming to initially create I felt that this approach would produce the most accurate results in the long run. Though I only was able to create the template for Washington state, where I reside, I hope you will be able to see the direction I wanted to take this.

From a users perspective I felt like having the option to upload a file would be nice to have so I have included that as well. However, Tesseract has proven to have a harder time parsing uploaded images more than images taken by the webcam so it may not have been a positive, lol. This app is far from completed, but I feel like this showcases my current skill and though process and would still like to submit it. I hope you enjoy looking though this and I look forward to any and all feedback.

Thank you,

W. Sho Sugihara


Here are some missing/unfinished key components of the app I would have liked to complete:
 - error handling for when a user does not allow webcam use
 - cleaner error handling when data extraction encounters an error
 - error handling logic for submitted an image not containing a license is extremely brittle. 
 - Should not use alert but a custom modal.
 - templates for each state's license data extraction necessary as each state license has a unique format and was unable to create a universal template for data extraction.
 - due to data extraction taking some time, a loading bar to notify the user that parsing in progress is needed.
 - the app is uninstructive as to what to do after license image is parsed, there are no next steps instructions, might have been nive to have a copy to clipboad button.
 - no end-to-end feature testing was finished, only extensive unit testing from TDD
 - the OCR is very inaccurate, more research is needed.
