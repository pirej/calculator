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
      margin-bottom: 0.2rem;
    }
    input {
      width: 40%;
      border: none;
      border-radius: 5px;
      height: 2rem;
      font-size: 1.2rem;
      background-color: #c2ced6;
      color: #082f45;
    }
  }

  p {
    font-size: 1.2rem;
    margin-top: 0;
  }
  .potrosuvacka {
    display: flex;
    justify-content: space-evenly;
    .kwh {
      display: flex;
      flex-direction: column;
      width: 35%;

      label {
        margin-bottom: 0.2rem;
      }
      input {
        width: 100%;
        border-radius: 5px;
        height: 2rem;
        font-size: 1.2rem;
        background-color: #c2ced6;
        color: #082f45;
      }
      .evt {
        color: #5cd6b1;
        color: #70c2a9;
        font-weight: 600;
      }
      .skp {
        /* color: #fc787d; */
        color: #d77578;
        font-weight: 600;
      }
    }
  }
`;

const Sostojba = ({ title }) => {
  return (
    <Stanje>
      <h3>{title}</h3>
      <p className="oneField">
        <label>Датум на читање</label>
        <input type="date" name="date" required />
      </p>
      <div className="potrosuvacka">
        <div className="kwh">
          <p>
            <label className="evt">Евтина kw/h</label>
            <input type="text" name="evtina" required />
          </p>
        </div>
        <div className="kwh">
          <p>
            <label className="skp">Скапа kw/h</label>
            <input type="text" name="skapa" required />
          </p>
        </div>
      </div>
    </Stanje>
  );
};

export default Sostojba;
