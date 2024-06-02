import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

import fotoZoe from "../assets/zoe_dia_del_ninio.jpg";
import Confetti from "react-confetti";

const Desafios = ({ setMostrarDesafios }) => {
  const [pelicula, setPelicula] = useState("");
  const [next, setNext] = useState(1);
  const [sorpresa, setSorpresa] = useState(false);
  const [verZoe, setVerZoe] = useState(false);
  const [iniciar, setIniciar] = useState(false);

  const mostrarSorpresa = () => {
    setSorpresa(true);
  };

  return (
    <>
      <DesafioContenedor>
        <Card>
          <IoIosCloseCircle
            className="icon-close"
            onClick={() => {
              setMostrarDesafios(false);
              setNext(1);
              setPelicula("");
              setVerZoe(false);
              setIniciar(false);
            }}
          />
          {!iniciar ? (
            <>
              <h2>Vamos a responder algunas preguntas, te parece?</h2>
              <button onClick={() => setIniciar(true)}>Iniciar</button>
            </>
          ) : (
            <>
              {!sorpresa ? (
                <>
                  <div className="primera-pregunta">
                    {next === 1 && (
                      <>
                        <b>1. ¿Cuál de las dos es una princesa?</b>
                        <div className="opciones">
                          <button onClick={() => setNext(2)}>Amber</button>
                          <button onClick={() => setNext(2)}>Rapunzel</button>
                        </div>
                      </>
                    )}

                    {next === 2 && (
                      <>
                        <b>
                          2. Si tuvieras una máquina del tiempo, ¿viajarías al
                          pasado o al futuro?
                        </b>
                        <div className="opciones">
                          <button onClick={() => setNext(3)}>Pasado</button>
                          <button onClick={() => setNext(3)}>Futuro</button>
                        </div>
                      </>
                    )}

                    {next === 3 && (
                      <>
                        <b>3. ¿Cuál es tu pelicula favorita de Disney?</b>
                        <div className="opciones">
                          <input
                            placeholder="ESCRIBE EL NOMBRE DE LA PELICULA"
                            type="text"
                            value={pelicula}
                            onChange={(e) => setPelicula(e.target.value)}
                          />
                        </div>
                        <button onClick={() => setNext(4)}>Siguiente</button>
                      </>
                    )}

                    {next === 4 && (
                      <>
                        <b>
                          4. Si solo te pudieses quedar con uno solo para el
                          resto de tu vida, ¿elegirías pastel o helado?
                        </b>
                        <div className="opciones">
                          <button onClick={() => setNext(5)}>Helado</button>
                          <button onClick={() => setNext(5)}>Pastel</button>
                        </div>
                      </>
                    )}
                    {next === 5 && (
                      <>
                        <b>
                          5. Si pudieras elegir uno de estos tres superpoderes,
                          ¿cuál escogerías?
                        </b>
                        <div className="opciones">
                          <button onClick={() => mostrarSorpresa()}>
                            Volar
                          </button>
                          <button onClick={() => mostrarSorpresa()}>
                            Leer la mente
                          </button>
                          <button onClick={() => mostrarSorpresa()}>
                            Hablar con los animales
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <Sorpresa>
                  <Confetti
                    style={{
                      magin: 0,
                      padding: 0,
                      width: "99%",
                      height: "100vh",
                    }}
                  />

                  {verZoe ? (
                    <img src={fotoZoe} alt="" />
                  ) : (
                    <>
                      <h1>¡FELICITACIONES!</h1>
                      <h2>
                        HAS DEMOSTRADO SER UN NIÑO O NIÑA CON EL CORAZÓN MÁS
                        NOBLE.
                      </h2>
                      <h3>
                        POR ESO LA NIÑA MÁS ALEGRE TE QUIERE DECIR ALGO....
                      </h3>
                      <button onClick={() => setVerZoe(true)}>VER</button>
                    </>
                  )}
                </Sorpresa>
              )}
            </>
          )}
        </Card>
      </DesafioContenedor>
    </>
  );
};
//
export default Desafios;

const DesafioContenedor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #6a8bff;
    text-align: center;
  }
`;

const Card = styled.div`
  padding: 20px;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  //   background: red;

  position: relative;

  .icon-close {
    font-size: 3pc;
    position: absolute;
    top: 25px;
    right: 20px;
    color: red;
    cursor: pointer;
  }

  .primera-pregunta {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    // background: red;

    gap: 50px;

    b {
      color: #ac35ff;
      text-align: center;
      margin: 0;
      font-size: 1.2pc;
    }
    input {
      padding: 12px;
      width: 100%;
    }
  }

  .opciones {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

    gap: 20px;

    button {
      width: 90%;
    }
  }
`;

const Sorpresa = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  gap: 10px;
  // background: red;

  // width: 100%;

  h1 {
    color: #ac35ff;
    //   width: 100px;
    font-size: 2.2rem;
    text-align: center;
  }
  h2 {
    margin: 0;
    color: #6a8bff;
    //   width: 100px;
    font-size: 1.2rem;
    text-align: center;
  }
  h3 {
    color: #b0c2ff;
    //   width: 100px;
    font-size: 1rem;

    text-align: center;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
