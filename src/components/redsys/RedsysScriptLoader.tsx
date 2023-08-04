import React, { useEffect } from "react";

const SANDBOX_URL = "https://sis-t.redsys.es:25443/sis/NC/sandbox/redsysV3.js";
const PRODUCTION_URL = "https://sis.redsys.es/sis/NC/redsysV3.js";

interface Props {
  isSandbox: boolean;
  onLoad: () => void;
}

const RedsysScriptLoader: React.FC<Props> = ({ isSandbox, onLoad }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = isSandbox ? SANDBOX_URL : PRODUCTION_URL;
    script.async = true; // optional: set to false if you want the script to load synchronously
    script.onload = onLoad;
    document.head.appendChild(script);
  }, []);
  return <></>;
};

export default RedsysScriptLoader;
