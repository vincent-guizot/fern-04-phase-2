import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/Auth";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const { images, setImages } = useContext(AuthContext);

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dxiktixum",
        uploadPreset: "preset1",
      },
      function (error, result) {
        console.log(result.info.public_id);
        // console.log(error, "< errors");
        // Handle the result or error here
        console.log([
          ...images,
          {
            public_id: result.info.public_id,
          },
        ]);
      }
    );
  }, []);
  const widgetRef = useRef();
  return (
    <>
      <button onClick={() => widgetRef.current.open()}>Upload</button>
    </>
  );
};

export default UploadWidget;
