import React,{forwardRef, useImperativeHandle} from "react";

const ModelTest = forwardRef((props,ref) => {
    const [display, setDisplay] = React.useState(true);

    useImperativeHandle(ref, ()=>{
        return {
            // testMethod: ()=>console.log("testing modell ref")
            openModal: ()=> open(), close:() => close()
        }
    })
  
    const open = () => {
      setDisplay(true);
    };
  
    const close = () => {
      setDisplay(false);
    };
  
    if (display) {
      return (
        <div className="modal-wrapper">
          <div onClick={close} className="modal-backdrop">
            <div className="modal-box">
                {props.children}
            </div>
          </div>
        </div>
      );
    }
    return null;
  });

export default ModelTest;
