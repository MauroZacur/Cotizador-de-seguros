import React from 'react';
import {primerMayuscula} from '../helper';
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    border: 1px solid black;
    border-radius:7px;
    color:black;
    margin-top: 1rem;
`;
const Resumen = ({datos}) => {

    const {modelo,year,plan} = datos;

    if (modelo === ''|| year === '' || plan === '') return null;
    return ( 
        <ContenedorResumen>

            <h2>Resumen de cotizacion</h2>
            <ul>
                <li>Modelo:{primerMayuscula(modelo)} </li>
                <li>Año: {primerMayuscula(year)}</li>
                <li>Plan: {primerMayuscula(plan)}</li>
            </ul>
        

        </ContenedorResumen>
       
     );
}
 
export default Resumen;