import React, { useState } from "react";
import Datos from "./Datos";
import "bootstrap/dist/css/bootstrap.min.css";
import AlertMessage from "./AlertMessage";
import SocialButton from "./SocialButton";

const Registro = () => {
  const [alert, setAlert] = useState({
    error: "",
    messagge: "",
    color: "",
  });
  // console.log(alert.error);
  // console.log(alert.color);
  // console.log(alert.messagge);

  return (
    <>
      <h1>CREA UNA CUENTA</h1>
      <SocialButton />
      <p>o registrate gratuitamente ingresando los siguientes datos</p>
      <Datos setAlert={setAlert} />
      <div className="alerta">
        <AlertMessage color={alert.color} messagge={alert.messagge} />
      </div>
    </>
  );
};

export default Registro;
