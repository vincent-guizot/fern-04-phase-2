//AdminHome.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth";
import UploadWidget from "../components/UploadWidget";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
export default function AdminHome() {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading) {
      console.log(user, "user");
      if (!user) {
        navigate("/login");
      }
    }
  }, [navigate, loading]);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  const { images } = useContext(AuthContext);

  // Get image cloudinary
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dxiktixum",
    },
  });
  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image("qeboihktgbruufgajt9a");

  // Resize to 250 x 250 pixels using the 'fill' crop mode.
  myImage.resize(fill().width(250).height(250));
  // ----------------------------------------------------------------

  return (
    <>
      <h1>Admin</h1>
      <div>
        {images.map((image) => {
          return (
            <AdvancedImage
              cldImg={cld
                .image(image.public_id)
                .resize(fill().width(250).height(250))}
            />
          );
        })}
      </div>
      <UploadWidget />
    </>
  );
}
