import React, { useState } from "react";
import {
  Form,
  FormBtn,
  FormDiv,
  ImageTitleChoose,
  ImgInput,
  PwdField,
} from "./FormProfileElements";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import axios from "axios";
const ImageForm = (props) => {
  const [image, setImage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const token = user?.accessToken;
  const onImageUploadHandler = async (event) => {
    event.preventDefault();
    if (image.size > 2097152) {
      console.log(image.size);
      return (
        setError("Size must be less than 2mb"),
        toast.error("Size must be less than 2mb", {
          position: "top-center",
        })
      );
    }
    let data = new FormData();
    data.append("image", image);
    const res = await axios.put(
      user?.type === "member"
        ? `https://deploy-practiwiz.azurewebsites.net/api/member/profile/image/upload/${user?.id}`
        : `https://deploy-practiwiz.azurewebsites.net/api/${user?.type}/profile/image/up/${user?.id}`,
      data,
      {
        headers: { authorization: "Bearer " + token },
      }
    );
    if (res.data.upload) {
      setSuccess(res.data.upload);
      toast.success(res.data.upload, {
        position: "top-center",
      });
    }
    if (res.data.error) {
      setError(res.data.error);
      toast.error(res.data.error, {
        position: "top-center",
      });
    }
    setImage("");
  };
  return (
    <>
      <FormDiv>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <Form onSubmit={onImageUploadHandler} encType="multipart/form-data">
          <ImageTitleChoose>
            Choose Picture from your local storage
          </ImageTitleChoose>
          <PwdField>
            <ImgInput
              data-max-size="2048"
              accept="image/png, image/gif, image/jpeg"
              required
              type="file"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </PwdField>

          <FormBtn>Update</FormBtn>
        </Form>
      </FormDiv>
    </>
  );
};

export default ImageForm;
