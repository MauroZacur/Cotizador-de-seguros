import React, {Fragment , useState}from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import styled from '@emotion/styled';

const Contenedor = styled.div `
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div `
  background-color:white;
  padding: 3rem;
`;


function App() {

  const [resumen,setResumen] = useState ({
    cotizacion:0,
    datos: {
      modelo:'',
      year:'',
      plan:''
    }
    
  });

  const [cargando, setCargando] = useState (false);

  const {cotizacion,datos} = resumen;

  return (

    <Contenedor>
      <Header
        titulo= "Cotizador de Seguros"
      />

      <ContenedorFormulario>
          <Formulario
            setResumen = {setResumen}
            setCargando = {setCargando}

          />
        {cargando ?  <Spinner/> : null}
         

        {!cargando ?
        <Fragment>
          <Resumen
          datos = {datos}
          />

          <Resultado
          cotizacion = {cotizacion}
        />
        </Fragment>
        :null  
      }
        
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
