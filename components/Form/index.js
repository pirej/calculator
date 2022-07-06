import React from 'react';
import styled from 'styled-components';
import Sostojba from './Sostojba';

const MyForm = styled.div`
  background-color: #2b7dab;
  background-color: #2d6586;
  width: 50vw;
  height: 80vh;
  margin: -7rem auto 0 auto;
  border-radius: 3%;
  text-align: center;
  h2 {
    margin: 0;
    padding: 2rem 0;
    font-size: 2rem;
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
    </MyForm>
  );
};

export default Form;
