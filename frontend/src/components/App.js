import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";

function App() {

  // shows if user is authenticated 
  const fetchUser = async () => {
    const response = await axios
      .get("http://localhost:5000/login/isAuth", { withCredentials: true })
      .catch((err) => {
        console.log("Not properly authenicated:", err);
      });

    if (response && response.data) {
      console.log("User:", response.data);
    }
  };
// fetchUser();

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/login/active" element={<Dashboard />} />
        <Route exact path="/login/error">
          Error login in. Please try again!
        </Route>
      </Routes>
    </div>
  );
}

export default App;
