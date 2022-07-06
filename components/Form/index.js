import React from 'react';
import styled from 'styled-components';
import Matematika from './Matematika';
import Sostojba from './Sostojba';

const MyForm = styled.div`
  background-color: #435f70;
  background-color: #314b59;
  width: 40vw;
  height: 90vh;
  margin: -7rem auto 0 auto;
  border-radius: 15px;
  text-align: center;
  h2 {
    margin: 0;
    padding: 1rem 0 0.9rem 0;
    font-size: 1.6rem;
  }
  .sostojba {
    display: flex;
    justify-content: space-evenly;
  }
  hr {
    border: 0;
    height: 1px;
    background: #406780;
    width: 80%;
    margin-bottom: 1rem;
  }
`;

const Form = () => {
  return (
    <MyForm>
      <h2>Калкулатор за сметки за струја</h2>
      <hr />
      <div className="sostojba">
        <Sostojba title="Последна фактура" />
        <Sostojba title="Моментална состојба" />
      </div>
      <hr />
      <Matematika />
    </MyForm>
  );
};

export default Form;
