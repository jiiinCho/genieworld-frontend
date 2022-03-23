import React, { useState, useEffect } from "react";
import Spinner from "../spinner/spinner";
import { PageLoaderProps } from "../../interface";
import Main from "../../page/main/main";

const PageLoader = ({ genieService }: PageLoaderProps) => {
  const [compnent, setComponent] = useState<undefined | JSX.Element>(undefined);
  useEffect(() => {
    setTimeout(() => {
      setComponent(<Main />);
      //[todo] not sure about settimeout delay, is 2s enough or too long?
    }, 2000);
  }, [genieService]);

  return <>{compnent ? compnent : <Spinner />}</>;
};

export default PageLoader;
