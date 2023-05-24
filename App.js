// import logo from './logo.svg';
// import './App.css';
import React from "react";
import router from "./routes/router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
}
