import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { yearDifference, calculateBrand, obteinPlan } from '../helpers'

const ContainerForm = styled.div`
display: flex;
margin-bottom: 1rem;
align-items: center;
`

const Label = styled.label`
flex: 0 0 100px;
`

const Select = styled.select`
display: block;
width: 100%;
padding: 1rem;
border: 1px solid #e1e1e1;
-webkit-appearance: none;
`

const InputRadio = styled.input`
margin: 0 1rem;
`

const Button = styled.button`
background-color: #00838F;
font-size: 16px;
width: 100%;
padding: 1rem;
color: #fff;
text-transform: uppercase;
border: none;
transition: background-color .3s ease;
margin-top: 2rem;

&:hover {
    background-color: #26c6da;
    cursor: pointer;
}
`

const Error = styled.div`
background-color: red;
color: white;
padding: 1rem;
width: 100%;
text-align: center;
`


const Form = ({ setTotal, setLoading }) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: '',
    })

    const [error, setError] = useState(false)

    //Extraer los valores del state
    const { brand, year, plan } = data
    // Leer los datos del formulario y colocarlos en el state
    const handleChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    //Form submit
    const handleSubmit = e => {
        e.preventDefault()

        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true)
            return
        }

        setError(false)

        let result = 2000

        //obtener la diferencia de años
        const difference = yearDifference(year)


        // por cada año hay que restar el 3%
        result -= ((difference * 3) * result) / 100

        //Americano 15% Asiático 5% Europeo 30%
        result = calculateBrand(brand) * result

        //Básico aumenta 20% Completo 50%
        result = parseFloat(obteinPlan(plan) * result).toFixed(2)

        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            setTotal({
                quote: +result,
                data
            })
        }, 2000)



    }


    return (
        <form onSubmit={handleSubmit}>

            {error ? <Error>Todos los campos son obligarios.</Error> : null}
            <ContainerForm>
                <Label>Marca</Label>
                <Select name="brand" value={brand} onChange={handleChange}>
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiático</option>
                </Select>
            </ContainerForm>

            <ContainerForm>
                <Label>Año</Label>
                <Select name="year" value={year} onChange={handleChange}>
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
            </ContainerForm>
            <ContainerForm>
                <Label>Plan</Label>
                <InputRadio type="radio" name="plan" value="basico" checked={plan === "basico"} onChange={handleChange} />Básico
                <InputRadio type="radio" name="plan" value="completo" checked={plan === "completo"} onChange={handleChange} />Completo
            </ContainerForm>
            <Button type="submit">Cotizar</Button>
        </form>

    );
}

Form.propTypes = {
    setTotal: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Form;