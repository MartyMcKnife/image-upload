import React, { ReactElement } from "react";

import { Error } from "./../App";

interface Props {
  error: Error | undefined;
}

export default function ErrorMessage({ error }: Props): ReactElement {
  return (
    <div>
      {error && (
        <div className="absolute bottom-6 right-6 bg-red-300 p-4 rounded-lg shadow-md bounce-in-bottom">
          <h2>Looks like there was a problem uploading your file</h2>
          <h3>Error code: {error.code}</h3>
          <h3>Message: {error.message}</h3>
        </div>
      )}
    </div>
  );
}
