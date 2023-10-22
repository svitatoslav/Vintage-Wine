import { useEffect, useRef } from "react";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dhpukux5x",
        uploadPreset: "cloudinaryTutorial",
      },
      function (error, result) {
        // console.log(result);  
      }
    );
    // console.log(cloudinaryRef.current);
  }, [])
  return (
      <button onClick={() => widgetRef.current.open()}>
        Upload
      </button>
  )
};

export default UploadWidget;
