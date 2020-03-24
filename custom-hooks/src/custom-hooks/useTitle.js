import React, { useEffect } from "react";

function useTitle(count) {
  useEffect(() => {
    document.title = `Title - ${count}`;
  }, [count]);
}

export default useTitle;
