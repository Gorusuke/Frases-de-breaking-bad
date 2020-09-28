import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  margin: 5rem 0;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 5px;
  transition: background-size .5s ease;
  
  &:hover{
    cursor: pointer;
    background-size: 400px;
  }
  &:focus{
    outline:none;
  }
`;


function App() {

  // State de frase
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const resultado = await fetch(`https://breaking-bad-quotes.herokuapp.com/v1/quotes`);
    const frase = await resultado.json();
    setFrase(frase[0]);
  }

  // Cargar una frase
  useEffect(() => {
    consultarAPI()
  }, []);
 
  return (
    <Contenedor>
      <Frase
        frase={frase}
      />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
