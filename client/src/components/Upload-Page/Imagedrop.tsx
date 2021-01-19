import React, { ReactElement } from "react";
import Dropzone, { FileWithPath } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhotoVideo } from "@fortawesome/free-solid-svg-icons";

interface Props {
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export default function Imagedrop({ setImage }: Props): ReactElement {
  const onDrop = (files: FileWithPath[]) => {
    setImage(files[0]);
  };

  return (
    <div className="border-dashed border-blue-200 border-2 w-96 my-8 p-8 bg-gray-200 rounded-md">
      <Dropzone onDrop={onDrop} noClick={true}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <FontAwesomeIcon icon={faPhotoVideo} size="8x" />
              <input {...getInputProps()} />
              <p className="py-4">Drag & drop your image here</p>
            </div>
          </section>
        )}
      </Dropzone>
    </div>
  );
}
