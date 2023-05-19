import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
export const Nav = () => (
  <div>
    <Link to="/" style={{ marginleft: 5 }}>
      {" "}
      Home
    </Link>
    &nbsp;
    <Link to="Apple" style={{ marginleft: 5 }}>
      {" "}
      Apple
    </Link>
    <Link to="*" style={{ marginleft: 5 }}>
      {" "}
      Applet
    </Link>
  </div>
);
