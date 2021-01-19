import React, { ReactElement, useState, useEffect } from "react";
import axios, { AxiosError } from "axios";

import Header from "./Header";
import ChooseFile from "./ChooseFile";
import Imagedrop from "./Imagedrop";
import InvalidFiles from "./InvalidFiles";

import { Response, Error } from "./../../App";

interface Props {
  setData: React.Dispatch<React.SetStateAction<Response | undefined>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<Error | undefined>>;
}

export default function Upload({
  setData,
  setLoading,
  setError,
}: Props): ReactElement {
  const [image, setImage] = useState<File | undefined>();
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    async function sendData(form: FormData) {
      try {
        setLoading(true);
        const resp = await axios({
          method: "POST",
          url: "/api/upload",
          data: form,
          headers: { "Content-Type": "multipart/form-data" },
        });
        console.log(resp);

        setData(resp.data);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        if (e.response) {
          const err: AxiosError = e;
          setError({
            code: err.response?.status,
            message: err.response?.data,
          });
        } else {
          setError({
            code: 0o0,
            message: "Unknown",
          });
        }
      }
    }

    if (image) {
      if (/image\//gi.test(image.type)) {
        setInvalid(false);

        const formData = new FormData();
        formData.append("image", image);
        sendData(formData);
      } else setInvalid(true);
    }
    //eslint-disable-next-line
  }, [image]);

  return (
    <div className="font-poppins mx-4 my-2 w-auto">
      <Header />
      <Imagedrop setImage={setImage} />
      <p className="mb-4">or</p>
      <ChooseFile setImage={setImage} />
      {invalid && (
        <div>
          <InvalidFiles />
        </div>
      )}
    </div>
  );
}
