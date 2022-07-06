import React from 'react';
import styled from 'styled-components';
import Matematika from './Matematika';
import Sostojba from './Sostojba';

const MyForm = styled.div`
  background-color: #435f70;
  background-color: #314b59;
  width: 40vw;
  height: 80vh;
  margin: -7rem auto 0 auto;
  border-radius: 3%;
  text-align: center;
  h2 {
    margin: 0;
    padding: 2.2rem 0 2rem 0;
    font-size: 1.8rem;
  }
  .sostojba {
    display: flex;
    justify-content: space-evenly;
  }
  hr {
    border: 0;
    height: 1px;
    background: #4d7b99;
    background: #406780;
    width: 80%;
    margin-bottom: 1.8rem;
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
