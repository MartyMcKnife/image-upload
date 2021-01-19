import React, { ReactElement } from "react";

export default function Loading(): ReactElement {
  return (
    <>
      <h1 className="text-2xl py-4 px-8">Uploading...</h1>
      <div className="progress-line rounded-md w-8"></div>
    </>
  );
}
