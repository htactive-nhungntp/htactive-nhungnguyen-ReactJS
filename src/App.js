import React from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import DemoProps from "./Props/DemoProps";
import DemoClock from "./StatesLifecycle/DemoClock";
import DemoHandlingEvent from "./HandlingEvent/DemoHandlingEvent";
import DemoConditional from "./Conditional/DemoConditional"

function App() {
  const student = { id: 1, name: "nhung", age: 20 };
  const menu = {
    title: "Welcome to React JS",
    name: ["Home", "About", "Contact", "Video", "Language"]
  };
  return (
    <>
      <Header data={menu} />
      <Content />
      <Footer />
      <DemoProps student={student} />
      <DemoClock />
      <DemoHandlingEvent />
      <DemoConditional />

    </>
  );
}

export default App;
