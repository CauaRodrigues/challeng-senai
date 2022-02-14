import React from "react";
import "./styles/style.css";

const Form = () => {
  return (
    <section className="form">
      <div className="form-hero">
        <h1>Bem vindo!</h1>
        <h2>Informe o seu e-mail e senha para entrar.</h2>
      </div>

      <div className="fieldset">
        <h3>Login</h3>

        <div className="fields">
          <div className="field">
            <label>E-mail</label>
            <input type="email" />
          </div>

          <div className="field">
            <label>Senha</label>
            <input type="password" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
