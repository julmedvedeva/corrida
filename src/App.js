import React from 'react';
import './App.css';
import styled from 'styled-components';
import { Counter, Gratings, } from './Crating';
import BootstrapTest from './BootstrapTest';
import { Form } from './Form';

const Wrapper = styled.div`
  width: auto;
  margin: 80px auto 0 auto;
`



function App() {
  return (
    <>
      <Wrapper>
        <Form />
      </Wrapper>

      <BootstrapTest
        left={<Gratings color={'alert'}>
          <h1>World!</h1>
          <h1>World!</h1>
        </Gratings>}
        right={<Gratings color={'primary'}>
          <h1>Hello!</h1>
        </Gratings>} />
    </>
  );
}

export default App;
