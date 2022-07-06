import React from 'react';
import styled from 'styled-components';
import Matematika from './Matematika';
import Sostojba from './Sostojba';

const MyForm = styled.div`
  background-color: #314b59;
  width: 40vw;
  height: 91vh;
  margin: -20rem auto 0 auto;
  border-radius: 15px;
  text-align: center;
  @media (max-width: 1600px) {
    height: 108vh;
  }
  @media (max-width: 1200px) {
    width: 55vw;
  }

  h2 {
    margin: 0;
    padding: 1rem 0 0.9rem 0;
    font-size: 1.6rem;
    letter-spacing: 0.05rem;
    @media (max-width: 1600px) {
      font-size: 1.4rem;
    }
    @media (max-width: 1400px) {
      font-size: 1.3rem;
    }
    /* @media (max-width: 1440px) {
      font-size: 1.3rem;
    } */
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
    @media (max-width: 1400px) {
      margin-bottom: 0.5rem;
      margin-top: 0rem;
    }
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
