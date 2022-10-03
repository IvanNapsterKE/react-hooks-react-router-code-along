import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import App from "./app";

// function Home() {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// }

// function App() {
//   return <Home />;
// }


ReactDOM.render(<Router>
  <App />
</Router>, document.getElementById("root"));
