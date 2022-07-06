import React from 'react';
import styled from 'styled-components';
import Matematika from './Matematika';
import Sostojba from './Sostojba';

const MyForm = styled.div`
  background-color: #435f70;
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
`;

const Form = () => {
  return (
    <MyForm>
      <h2>Калкулатор на Сметки за Струја</h2>
      <div className="sostojba">
        <Sostojba title="Последна фактура" />
        <Sostojba title="Моментална состојба" />
      </div>
      <Matematika />
    </MyForm>
  );
};

export default Form;
