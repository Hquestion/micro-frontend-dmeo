import React from "react";
import ErrorBoundary from "./MyErrorBoundary";

const RemoteButton = React.lazy(() => import("app2/Button"));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>App 1</h2>
      <ErrorBoundary>
          <React.Suspense fallback="Loading Button" >
              <RemoteButton />
          </React.Suspense>
      </ErrorBoundary>

  </div>
);

export default App;
