import React from 'react'
import styled from '@emotion/styled'
import { capitalize } from '../helpers'
import PropTypes from 'prop-types'

const TotalContainer = styled.div`
padding: 1rem;
text-align: center;
background-color: #00838F;
color: #fff;
margin-top: 1rem;
`

const Total = ({ data }) => {
    const { brand, year, plan } = data
    return (
        <TotalContainer>
            <h2>Resumen del presupuesto</h2>
            <ul>
                <li>Marca: {capitalize(brand)}</li>
                <li>Año: {year}</li>
                <li>Plan: {capitalize(plan)}</li>
            </ul>
        </TotalContainer>
    );
}

Total.propTypes = {
    data: PropTypes.object.isRequired
}

export default Total;