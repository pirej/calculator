import React from 'react';
import styled from 'styled-components';

const Stanje = styled.div`
  width: 45%;
  @media (max-width: 480px) {
    width: 80%;
  }
  h3 {
    font-size: 1.4rem;
    margin-top: 0rem;
    margin-bottom: 0.5rem;
    @media (max-width: 1600px) {
      font-size: 1.3rem;
    }
    @media (max-width: 1400px) {
      font-size: 1.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
  .oneField {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      margin-bottom: 0.3rem;
    }
    @media (max-width: 1600px) {
      margin-bottom: 0.5rem;
    }
  }

  /* ---------------------------- */
  p {
    font-size: 1.2rem;
    @media (max-width: 1600px) {
      font-size: 1.1rem;
    }
    @media (max-width: 1400px) {
      font-size: 1.05rem;
    }
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
    margin-top: 0;

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
      -webkit-text-fill-color: #082f45;
      transition: background-color 5000s ease-in-out 0s;
    }

    label {
      font-weight: 500;
    }

    input {
      width: 40%;
      height: 2rem;
      color: #082f45;
      background-color: #c2ced6;
      border-radius: 5px;
      border: solid 1px #1f3947;
      letter-spacing: 0.04rem;
      font-size: 1rem;
      @media (max-width: 480px) {
        width: 50%;
      }

      :focus {
        outline: none !important;
        border: 1px solid #082f45;
        box-shadow: 0px 4px 7px -2px rgba(46, 65, 76, 0.9);
        -webkit-box-shadow: 0px 4px 7px -2px rgba(46, 65, 76, 0.9);
        -moz-box-shadow: 0px 4px 7px -2px rgba(46, 65, 76, 0.9);
      }
    }
  }
  /* ---------------------------- */
  .potrosuvacka {
    display: flex;
    justify-content: space-evenly;

    .kwh {
      display: flex;
      flex-direction: column;
      width: 45%;
      @media (max-width: 480px) {
        width: 50%;
      }

      input {
        width: 100%;
        border-radius: 5px;
        height: 2rem;
        font-size: 1.2rem;
        background-color: #c2ced6;
        color: #082f45;
        margin-top: 0.3rem;
        @media (max-width: 1600px) {
          font-size: 1.1rem;
        }
        @media (max-width: 1400px) {
          font-size: 1.05rem;
        }
      }
      .evt {
        color: #39bd96;
        font-weight: 500;
      }
      .skp {
        color: #d77578;
        font-weight: 500;
      }
    }
  }
`;

const Sostojba = ({ title, myDate, starDatum, novDatum }) => {
  const manageOldDate = e => {
    starDatum(e.target.value);
  };

  const manageNewDate = e => {
    novDatum(e.target.value);
  };

  return (
    <Stanje>
      <h3>{title}</h3>
      <p className="oneField">
        <label>Датум на читање</label>
        <input
          type="date"
          name="date"
          required
          onChange={e => (myDate === 1 ? manageOldDate(e) : manageNewDate(e))}
        />
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
