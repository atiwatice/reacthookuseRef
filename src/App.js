import logo from "./logo.svg";
import "./App.css";
import ModalTest from "./ModelTest";
import "antd/dist/antd.min.css";
import React ,{ useState, useRef } from "react";
function App() {
  const modalRef = useRef();

  const openModal = () => {
    // modalRef.current.testMethod()

    modalRef.current.openModal()
  };

  // const valueChild = { test1: "hello1", test2: "hello2" };
  // const [parentNa, setParentNa] = useState("None");

  // const handleParentChange = (value) => {
  //   setParentNa(value);
  // };

  return (
    <div className="App">

      
      <button onClick={openModal}>Open Modal</button>
      <ModalTest ref={modalRef}>
        <h1>Modal Header</h1>
        <p>
          lor
        </p>
        <button onClick={()=>modalRef.current.close()}>Close modal</button>
      </ModalTest>
    </div>
  );
}

export default App;
