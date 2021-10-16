import React , {useState} from 'react';
import styled from '@emotion/styled';
import {obtenerDiferenciaYear,calcularModelo,obtenerPlan} from '../helper';


const Campo = styled.div `
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label `
    flex: 0 0 100px;
`;

const Select = styled.select `
    display: block;
    padding: 10px;
    width: 100%;
    border: 1px solid #b1b0b0;
    -webkit-appearance:none;
`;

const InputRadio = styled.input `
    margin:0 1rem;
    &:hover{
        cursor: pointer;
    }
`;

const Boton = styled.button `
    background-color: #00838F;
    font-size:16px;
    padding:1rem;
    color: white;
    font-weight: bold;
    border:none;
    border-radius: 4px;
    width: 100%;
    transition: background-color .3s ease;
    margin-top: 2rem;
    
    &:hover{
        cursor: pointer;
        background-color: #78e8f0;
        color: #000000;
    }

`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Formulario = ( {setResumen, setCargando}) => {

    const [ datos,setDatos ]= useState ({
        modelo:'',
        year:'',
        plan:'basico'
    });

    const [error,setError] = useState (false);
    const {modelo , year ,plan} = datos;

    const informacionFormulario = e=>{
        setDatos ({
            ...datos,
            [e.target.name] : e.target.value


        });  
    };


    const cotizar = e=>{
        e.preventDefault();

        if (modelo.trim() ==='' || year.trim()==='' || plan.trim()===''){
            setError(true);
            return;
        }

        setError (false);

        let total = 2000;
        //diferencia de años
        const diferencia = obtenerDiferenciaYear(year);
        //por cada año se resta el 3% del valor base

        total -= ((diferencia * 3) * total) / 100;

        

        //utilitario vale 5% mas
        //Gama Media vale 15% mas
        //Gama Alta vale 30% mas

        total = Math.round(calcularModelo(modelo) * total);

        


        //Basico 20%
        //Completo 50%
        const planIncremento = obtenerPlan(plan);
        total = Math.round (planIncremento*total);

    
        //Total

        setCargando (true);

        setTimeout( ()=>{
            setCargando(false);
            setResumen ({
                cotizacion :total,
                datos
            });

        },3000);
        

    }

    return (  
        <form
            onSubmit = {cotizar}
        >
            {error? <Error>*Todos los campos son obligatorios</Error>:null}
            <Campo>
                <Label>Modelo</Label>
                <Select
                    value = {modelo}
                    name="modelo"
                    onChange = {informacionFormulario}
                >
                    <option value="">Seleccione Modelo</option>
                    <option value="utilitario">Utilitario</option>
                    <option value="alta">Gama Alta</option>
                    <option value="media">Gama Media</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                   value = {year}
                   name="year"
                   onChange = {informacionFormulario}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Plan</Label>
                <InputRadio
                    type='radio'
                    name='plan'
                    value='basico'
                    checked = {plan === "basico"}
                    onChange = {informacionFormulario}
                /> Basico

                <InputRadio
                    type='radio'
                    name='plan'
                    value='completo'
                    checked = {plan === "completo"}
                    onChange = {informacionFormulario}
                /> Completo
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>

    );
}
 
export default Formulario;