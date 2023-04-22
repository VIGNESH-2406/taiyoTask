import "./App.css";
import React, { ReactElement } from "react";

import Home from "./components/Home";
import "react-toastify/dist/ReactToastify.css";
// import Mychart from "./components/charts";

// interface MyJSXElements extends JSX.IntrinsicElements {
//   myCustomElement: React.DetailedHTMLProps<
//     React.HTMLAttributes<HTMLElement>,
//     HTMLElement
//   >;
// }
function App(): ReactElement {
  return (
    <div>
      {/* <Mychart /> */}
      <Home />
      {/* <Map /> */}
      {/* <Map /> */}
    </div>
  );
}

export default App;
