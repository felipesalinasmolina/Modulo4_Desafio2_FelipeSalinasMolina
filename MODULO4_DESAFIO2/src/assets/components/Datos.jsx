import { useState } from "react";
import Button from "react-bootstrap/Button";
//import Form from "react-bootstrap/Form";

const Datos = ({setAlert}) => {
  const [formData, setFormData] = useState({
    nombre: "",
    mail: "",
    password: "",
    confirmPassword: "",
  });

  const validarDatos = (e) => {
    e.preventDefault();
    const { nombre, mail, password, confirmPassword } = formData;
    const validarInput = !nombre || !mail || !password || !confirmPassword;
    const validarPassword = (password ==!confirmPassword);

    validarInput
      ? setAlert({
          error: true,
          messagge: "Completa todos los Campos !!!",
          color: "danger",
        })
      : setAlert({
          error: false,
          messagge: "Cuenta creada exitosamente",
          color: "success",
        });

    if (validarPassword) {
      setAlert({
        error: false,
        messagge: "Las contraseñas no coinciden !!",
        color: "success",
      });
    }

    setFormData({
      nombre: "",
      mail: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form className="form" onSubmit={validarDatos}>
      <div className="formulario">
        <input
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre"
          onChange={handleChange}
          value={formData.nombre}
        />
      </div>

      <div className="formulario">
        <input
          type="text"
          name="mail"
          className="form-control"
          placeholder="ejemplo@mail.com"
          onChange={handleChange}
          value={formData.mail}
        />
      </div>
      <div className="formulario">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Contraseña"
          onChange={handleChange}
          value={formData.password}
        />
      </div>
      <div className="formulario">
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          placeholder="Repita contraseña"
          onChange={handleChange}
          value={formData.confirmPassword}
        />
      </div >
      <div className="button" >
      <Button type="submit" className="btn">
        Registrarse
      </Button>
      </div>
    </form>
  );
};

export default Datos;
