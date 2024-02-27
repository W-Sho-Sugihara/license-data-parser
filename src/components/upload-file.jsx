export const UploadFile = ({ setImg }) => {
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUri = reader.result;
      console.log({ imageDataUri });
      setImg(imageDataUri);
      e.target.value = null;
    };
    reader.readAsDataURL(file);
  }

  return (
    <section>
      <p>Choose an Image</p>
      <input
        type="file"
        name=""
        id=""
        onChange={handleImageChange}
        accept="image/*"
      />
    </section>
  );
};
