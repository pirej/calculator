import React from 'react';
import styled from 'styled-components';

const Stanje = styled.div`
  width: 45%;
  h3 {
    font-size: 1.4rem;
    margin-top: 0rem;
    margin-bottom: 0.5rem;
  }
  .oneField {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      margin-bottom: 0.5rem;
    }
    input {
      width: 40%;
      border-radius: 5px;
      height: 2rem;
      font-size: 1.2rem;
      background-color: #a3b6c2;
      color: #082f45;
    }
  }

  p {
    font-size: 1.2rem;
    margin-top: 0;
  }
`;

const Sostojba = ({ title }) => {
  return (
    <Stanje>
      <h3>{title}</h3>
      <p className="oneField">
        <label>Датум на мерење</label>
        <input type="date" name="date" required />
      </p>
    </Stanje>
  );
};

export default Sostojba;
