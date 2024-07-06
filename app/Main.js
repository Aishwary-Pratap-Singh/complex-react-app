import React from "react";
import ReactDOM from "react-dom";

function ExampleComponent() {
  return (
    <div>
      <h1>This is our app!!!</h1>
      <p>The sky is blue.</p>
      <p>Grass is green!</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<ExampleComponent />);

if (module.hot) {
  module.hot.accept();
}
