import React, { useState } from 'react';
import Header from './components/Header'
import Form from './components/Form'
import Total from './components/Total'
import Result from './components/Result'
import Spinner from './components/Spinner'



import styled from '@emotion/styled'

const Container = styled.div`
max-width: 600px;
margin: 0 auto;
`;

const FormContainer = styled.div`
background-color: #FFFFFF;
padding: 3rem;
`

function App() {
  const [total, setTotal] = useState({
    quote: 0,
  })
  const { quote, data } = total

  const [loading, setLoading] = useState(false)

  return (

    <Container>
      <Header title="Cotizador de seguros" />

      <FormContainer>
        <Form setTotal={setTotal} setLoading={setLoading} />

        {loading ? <Spinner /> : null}

        {data ? <Total data={data} /> : null}

        {!loading ? <Result quote={quote} /> : null}


      </FormContainer>
    </Container>

  );
}

export default App;
