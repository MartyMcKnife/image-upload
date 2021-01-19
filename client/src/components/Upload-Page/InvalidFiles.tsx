import React, { ReactElement } from "react";

export default function InvalidFiles(): ReactElement {
  return (
    <div className="mt-4 text-red-700">
      <h1>Only images are allowed!</h1>
    </div>
  );
}
