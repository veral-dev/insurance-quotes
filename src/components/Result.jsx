import React from 'react'
import styled from '@emotion/styled'

import PropTypes from 'prop-types'


const Message = styled.p`
background-color: rgb(127,224,237);
margin-top: 2rem;
padding: 1rem;
text-align: center;
`

const QuoteResult = styled.div`
text-align: center;
padding: .5rem;
border: 1px solid #26C6DA;
background-color: rgb(127,224,237);
margin-top: 1rem;
position: relative;
`

const QuoteText = styled.p`
color: #00838F;
padding: 1rem;
text-transform: uppercase;
font-weight: bold;
margin: 0;
`

const Result = ({ quote }) => {

    return (
        (quote === 0 ?
            <Message>Elige marca, año y tipo de seguro</Message>
            : (
                <QuoteResult>
                    <QuoteText>El total es: {quote}€</QuoteText>
                </QuoteResult>
            ))
    );
}

Result.propTypes = {
    quote: PropTypes.number.isRequired
}

export default Result;