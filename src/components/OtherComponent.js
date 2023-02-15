import React from "react";

const AsyncComponent = React.lazy(() => import('../components/AsyncComponent.js'));

export default function OtherComponent() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <AsyncComponent />
    </React.Suspense>
  );
}