import React, { useState, Suspense } from "react";
import NormalLoading from "./NormalLoading";
// import LazyLoading from "./LazyLoading";

const LazyLoading = React.lazy(() => import("./LazyLoading"));
function ParentComp() {
  const [show, setShow] = useState(false);
  const [lazyLoad, setLazyLoad] = useState(false);
  return (
    <div>
      {show ? <NormalLoading /> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Click
      </button>
      {lazyLoad ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <LazyLoading />
        </Suspense>
      ) : null}
      <button
        onClick={() => {
          setLazyLoad(!lazyLoad);
        }}
      >
        Lazy Loading
      </button>
    </div>
  );
}

export default ParentComp;
