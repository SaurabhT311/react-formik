import { useState } from "react";
import "./App.css";
import { NormalForm } from "./NormalForm";
import { FormByFormik } from "./FormByFormik";

function App() {
  return (
    <>
      <div className="app">
        {/* <NormalForm /> */}
        <FormByFormik />
      </div>
    </>
  );
}

export default App;
