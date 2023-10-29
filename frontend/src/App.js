import './App.css';
import React, { useEffect } from "react";
import {
  Route,
  useHistory,
  Routes,
} from "react-router-dom";

import Loader from "./components/layouts/Loader.js";

const Login = React.lazy(() => import("./components/Authentication/Login"));
const Signup = React.lazy(() => import("./components/Authentication/Signup"));
const ForgetPassowrd = React.lazy(() =>
import("./components/Authentication/ForgotPassword")
);
const Chatpage = React.lazy(() => import("./Pages/Chatpage"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/forgot/password" element={<ForgetPassowrd/>} />
          <Route exact path="/chats" element={<Chatpage/>} />
        </Routes>
      </React.Suspense>
  </div>
  );
}

export default App;
