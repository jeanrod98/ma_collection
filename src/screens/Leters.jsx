import { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import VerCarta from "../Components/VerCarta";

import tulipan from "../assets/tulipanes.jpg"



const Leters = () => {
  const [nombre, setNombre] = useState("");
  const [mostrarCarta, setMostrarCarta] = useState(false);

  const comprobarIdentidad = () => {
    if (
      nombre.toLowerCase() == "ambar" ||
      nombre.toLowerCase() == "fabiana" ||
      nombre.toLowerCase() == "fabi" ||
      nombre.toLowerCase() == "amber"
    ) {
      // mostrar carta
      console.log("mostrar carta");
      setMostrarCarta(true)
    } else {
      // mostrar alerta
      Swal.fire({
        title: "Nombre incorrecto",
        text: "Lo siento, no eres la persona correcta, no puedes continuar.",
        icon: "error",
      });
    }
  };

  return (
    <>
      <ComponenteCartas tulipan={tulipan}>
        {!mostrarCarta ? (
          <>
            <p>
              Por motivos de seguridad, debemos revisar que seas la persona
              correcta para continuar &#128522;
            </p>

            <input
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              placeholder="INGRESA TU NOMBRE"
            />
            <button onClick={comprobarIdentidad}>Comprobar</button>
          </>
        ) : (
          <VerCarta setMostrarCarta={setMostrarCarta}/>
        )}
      </ComponenteCartas>
    </>
  );
};

export default Leters;

const ComponenteCartas = styled.div`
  h1 {
    color: #ac35ff;
    text-align: center;
  }

  input {
    padding: 12px;
    width: 80%;
    background: #f9f9f9;
    outline: none;
    border: none;
    border: 1px solid #ac35ff;
    color: #000;
  }

  p {
    // color: #6A8BFF;
    color: #FF59F0;
    text-align: center;
    font-size: 1.5rem;
  }

  padding: 0 2%;
  display: flex;
  gap: 20px;
  flex-direction: column;
    // justify-content: center;
  align-items: center;
  background: #f9f9f9;
//   background: red;

background-image: url(${props => tulipan});
// background-size: contain;
background-repeat: no-repeat;

    // width: 100%;

  height: 100vh;

  button{ 
    color: #fff;
    background: #EFB0FF;

  }

  
  
  
`;

