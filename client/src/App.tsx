import React, { useState } from "react";
import Upload from "./components/Upload-Page/Upload";
import Loading from "./components/Loading/Loading";
import Result from "./components/Result/Result";
import ErrorMessage from "./components/ErrorMessage";

export interface Response {
  url: string;
}

export interface Error {
  code: number | undefined;
  message: string;
}

function App() {
  const [data, setData] = useState<Response>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full">
      <div className="bg-gray-50 rounded-lg shadow-md p-6 text-center">
        {loading ? (
          <Loading />
        ) : data ? (
          <Result data={data} />
        ) : (
          <div>
            <Upload
              setData={setData}
              setLoading={setLoading}
              setError={setError}
            />
            <ErrorMessage error={error} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
