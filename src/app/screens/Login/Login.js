import React, { Component } from "react";
import { Input, ButtonDefault, MainLogo } from "../../components/";
import "./style.css";

class Login extends Component {
  render() {
    return (
      <div>
        <MainLogo />
        <Input size="sm" placeholder="Correo" className="inputLogin" />
        <Input size="sm" placeholder="Contraseña" className="inputLogin" />
        <ButtonDefault name="Ingresar" />
      </div>
    );
  }
}

export default Login;
