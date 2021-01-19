import React, { ReactElement } from "react";

export default function Header(): ReactElement {
  return (
    <div className="font-medium mb-12">
      <h1 className="text-2xl">Upload your image</h1>
      <h3 className="text-gray-500">File should be JPEG or a PNG</h3>
    </div>
  );
}
