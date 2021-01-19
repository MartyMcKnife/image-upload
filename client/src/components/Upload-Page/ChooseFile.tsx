import React, { ReactElement } from "react";
import { ChangeEvent } from "react";

interface Props {
  setImage: React.Dispatch<React.SetStateAction<File | undefined>>;
}

export default function ChooseFile({ setImage }: Props): ReactElement {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage(file);
    }
  };
  return (
    <div>
      <form>
        <input
          type="file"
          id="files"
          className="hidden"
          name="image"
          onChange={handleChange}
          accept="image/*"
        />
      </form>
      <label htmlFor="files" className="bg-blue-400 px-2 py-1 rounded-lg">
        Choose File
      </label>
    </div>
  );
}
