import ReactDOM from "react-dom";
import App from "./App";
import "./assets/css/main.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
