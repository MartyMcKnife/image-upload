import React, { ReactElement, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Response } from "./../../App";

interface Props {
  data: Response;
}

export default function Result({ data }: Props): ReactElement {
  const [copied, setCopied] = useState(false);

  const colour = copied ? "bg-green-300" : "bg-blue-300";
  return (
    <div>
      <FontAwesomeIcon icon={faCheck} size="6x" color="green" />
      <h1>Uploaded Successfully!</h1>
      <img
        src={data.url}
        alt="Your uploaded image!"
        className="content-center inline-block h-96 rounded-md m-4"
      ></img>
      <div className="flex items-center border-2 border-gray-200 p-1 rounded-lg">
        <p className=" mx-4">{data.url}</p>
        <CopyToClipboard text={data.url} onCopy={() => setCopied(true)}>
          <button className={`${colour} px-4 py-2 rounded-md`}>
            {!copied ? "Copy Link" : "Link Copied!"}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
