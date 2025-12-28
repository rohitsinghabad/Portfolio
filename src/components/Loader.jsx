import React, { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      count += 1;
      setProgress(count);

      if (count >= 100) {
        clearInterval(interval);

        // SAFETY: check if function exists
        setTimeout(() => {
          if (typeof onFinish === "function") {
            onFinish();
          }
        }, 400);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader">
      <h1>{progress}%</h1>
    </div>
  );
}
