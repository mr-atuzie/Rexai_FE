import React, { useRef } from "react";
import { IKContext, IKUpload } from "imagekitio-react";
import { IoMdAttach } from "react-icons/io";

const urlEndpoint = process.env.REACT_APP_IMG_KIT_ENDPOINT;
const publicKey = process.env.REACT_APP_IMG_KIT_PUBLIC_KEY;

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:8000/api/v1/image/upload");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const Upload = ({ setImg }) => {
  const uploadRef = useRef(null);

  const onError = (err) => {
    console.log("Error", err);
  };

  const onSuccess = (res) => {
    console.log("Success", res);
    setImg((prev) => ({
      ...prev,
      isLoading: false,
      dbData: res,
    }));
  };

  const onUploadProgress = (progress) => {
    console.log("Progress", progress);
  };

  const onUploadStart = (evt) => {
    console.log("Start", evt);
    setImg((prev) => ({
      ...prev,
      isLoading: true,
    }));
  };

  return (
    <div>
      <IKContext
        urlEndpoint={urlEndpoint}
        publicKey={publicKey}
        authenticator={authenticator}
      >
        <IKUpload
          fileName="test-upload.png"
          onError={onError}
          onSuccess={onSuccess}
          useUniqueFileName={true}
          onUploadProgress={onUploadProgress}
          onUploadStart={onUploadStart}
          style={{ display: "none" }}
          ref={uploadRef}
        />
        {
          <label
            onClick={() => uploadRef.current.click()}
            className=" bg-[#605e68] border-none flex justify-center items-center p-2 h-9 w-9 rounded-full "
            htmlFor="file"
          >
            <IoMdAttach />
          </label>
        }
      </IKContext>
    </div>
  );
};

export default Upload;
