import styled from "styled-components";
import carta from "../assets/carta.jpg";
import carta2 from "../assets/carta2.jpg";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";

import icono from "../assets/carta_icono.png";

const VerCarta = ({ setMostrarCarta }) => {
  const [ver, setVer] = useState(false);

  return (
    <>
      <Carta style={{ background: ver ? "#242424" : "transparent"}}>
        <IoIosCloseCircle
          className="icon-close"
          onClick={() => {
            setMostrarCarta(false);
          }}
        />
        
        {ver ? (
          <img src={carta2} alt="" />
        ) : (
          <>
            {/* <div className="card">
              <img src={icono} alt="" />
              <button onClick={() => setVer(true)}>Abrir Carta</button>
            </div> */}

            <div className="card">
              <img src={icono} alt="" />
              <button onClick={() => setVer(true)}>Abrir Carta</button>
            </div>
          </>
          
        )}
      </Carta>

      
    </>
  );
};

export default VerCarta;

const Carta = styled.div`
  width: 100%;
  position: fixed;
  height: 100vh;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
  }

  .icon-close {
    font-size: 3pc;
    position: absolute;
    top: 2px;
    right: 2px;
    color: red;
    cursor: pointer;
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 20px;
    // width: 100%;
    align-items: center;
    justify-content: center;
    // background: red;
    img {
      width: 100px;
      height: auto;
    }

    button {
        background: #EFB0FF;
        font-size: 12px;
        color: #fff;
    }
  }
`;
