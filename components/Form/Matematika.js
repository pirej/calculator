import React from 'react';
import styled from 'styled-components';
import { useLanguageContext } from '../../state/langContext';
import Blokovi from '../Blokovi';

const StyledComp = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    span {
      color: #e57c7f;
    }
    @media (max-width: 1600px) {
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
    @media (max-width: 1400px) {
      font-size: 1.2rem;
      margin-top: 0.5rem;
      margin-bottom: 0.2rem;
    }
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }
  p {
    font-size: 1.2rem;
    margin-top: 0;
    @media (max-width: 1600px) {
      font-size: 1.1rem;
    }
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    .btn {
      margin-top: 0.5rem;
      @media (max-width: 1400px) {
        margin-top: 0.6rem;
      }
      button {
        background-color: #39bd96;
        color: #354c59;
        padding: 0.3rem 1rem;
        font-size: 1.2rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        letter-spacing: 0.04rem;
        font-weight: bolder;
        @media (max-width: 1600px) {
          font-size: 1.1rem;
        }
        @media (max-width: 1400px) {
          font-size: 1.05rem;
        }
        @media (max-width: 480px) {
          font-size: 1.2rem;
        }
        :hover {
          background-color: #29a680;
        }
      }
    }
    .clear {
      button {
        /* background-color: #e57c7f; */
        background-color: #354c59;
        background-color: rgba(191, 61, 66, 0.2);
        color: #b8d5e5;
        :hover {
          background-color: #d9575b;
          color: #ccecff;
        }

        border: solid 1px #d9575b;
        border-radius: 5px;
        /* width: 16rem; */
        margin: auto;
        padding: 0.4rem 1rem 0.3rem 1rem;
      }
    }
  }
  .potrosuvacka {
    display: flex;
    justify-content: space-evenly;
    .kwh {
      display: flex;
      flex-direction: column;
      width: 20%;
      @media (max-width: 1600px) {
        width: 30%;
      }

      .topP {
        margin-bottom: 0;
        font-weight: 600;
      }
      .botP {
        font-weight: 600;
      }
      .evt {
        color: #39bd96;
      }
      .skp {
        color: #e57c7f;
      }
    }
  }
  .hrr {
    margin-top: 0.2rem;
    margin-bottom: 0.8rem;
    @media (max-width: 1400px) {
      margin-top: 0rem;
      margin-bottom: 0.3rem;
    }
  }
  .hrr2 {
    margin-top: 1.2rem;
    /* margin-bottom: 0.5rem; */
    @media (max-width: 1400px) {
      margin-top: 0.9rem;
      margin-bottom: 0.7rem;
    }
  }
  .blokovi {
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 420px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 15%;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
    }
    @media (max-width: 400px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 23%;
      margin-left: 2rem;
      margin-right: 2rem;
    }
    .one {
      color: #39bd96;
      @media (max-width: 360px) {
        margin-bottom: 0.5rem;
      }
    }
    .two {
      color: #d7b140;
      @media (max-width: 360px) {
        margin-bottom: 0.5rem;
      }
    }
    .three {
      color: #d78a54;
    }
    .four {
      color: #e57c7f;
    }
  }
  .total {
    p {
      font-weight: 600;
      margin-bottom: 0.2rem;
    }
    .cheap {
      color: #39bd96;
    }
    .skapa {
      color: #e57c7f;
    }
    .taksa {
      color: #63abff;
    }
  }
  .hrr3 {
    margin-top: 1.3rem;
    margin-bottom: 1.4rem;
    @media (max-width: 1400px) {
      margin-top: 1rem;
      margin-bottom: 1.05rem;
    }
  }
  .vkupno {
    /* border: solid 3px #406780; */
    border: solid 1px #39bd96;
    /* border-radius: 5px; */
    /* width: 16rem; */
    margin: auto;
    padding: 0.5rem 1rem 0.7rem 1rem;
    background-color: rgba(36, 102, 85, 0.3);
    letter-spacing: 0.05rem;
  }
`;

const Matematika = ({ days, evtinaStruja, skapaStruja, clearData }) => {
  const { lang, jazik } = useLanguageContext();
  const clear = () => {
    clearData(true);
  };

  let block1 = 0;
  let block2 = 0;
  let block3 = 0;
  let block4 = 0;

  if (skapaStruja <= 210) {
    block1 = (skapaStruja - 0).toFixed(2);
  }
  if (skapaStruja > 210 && skapaStruja <= 630) {
    block1 = 210;
    block2 = (skapaStruja - 210).toFixed(2);
  }
  if (skapaStruja > 630 && skapaStruja <= 1050) {
    block1 = 210;
    block2 = 630;
    block3 = (skapaStruja - 630).toFixed(2);
  }
  if (skapaStruja > 1050) {
    block1 = 210;
    block2 = 630;
    block3 = 1050;
    block4 = (skapaStruja - 1050).toFixed(2);
  }

  const spent1 = (block1 * 8.109).toFixed(2);
  const spent2 = (block2 * 8.48).toFixed(2);
  const spent3 = (block3 * 9.095).toFixed(2);
  const spent4 = (block4 * 18.351).toFixed(2);

  const evtinaSmetka = evtinaStruja * 4.193;
  const evtinaSmetkaFinal = evtinaSmetka.toFixed(2);
  const skapaSmetka =
    block1 * 8.109 + block2 * 8.48 + block3 * 9.095 + block4 * 18.351;
  const skapaSmetkaFinal = skapaSmetka.toFixed(2);
  const komunalnaTaksa = evtinaSmetka ? 184 : 0;

  const vkupnaSmetka = (evtinaSmetka + skapaSmetka + komunalnaTaksa).toFixed(2);

  return (
    <StyledComp>
      <div className="buttons">
        {/* <div className="btn">
          <button>??????????????????</button>
        </div> */}
        <div className="btn clear">
          <button onClick={() => clear()}>
            {lang === 'makedonski' ? '??????????' : 'Clear'}
          </button>
        </div>
      </div>
      {lang === 'makedonski' ? (
        <h3>
          ?????????????????? ???? <span>{days ? days : 0}</span> ????????
        </h3>
      ) : (
        <h3>
          Spent in <span>{days ? days : 0}</span> days
        </h3>
      )}
      <div className="potrosuvacka">
        <div className="kwh">
          <p className="topP evt">{lang === 'makedonski' ? '????????????' : 'Low'}</p>
          <p className="botP ">{evtinaStruja} kw/h</p>
        </div>
        <div className="kwh">
          <p className="topP skp">{lang === 'makedonski' ? '??????????' : 'High'}</p>
          <p className="botP ">{skapaStruja} kw/h</p>
        </div>
      </div>
      <hr className="hrr" />
      <div className="blokovi">
        <Blokovi block={1} kilovati={block1} spent={spent1} />
        <Blokovi block={2} kilovati={block2} spent={spent2} />
        <Blokovi block={3} kilovati={block3} spent={spent3} />
        <Blokovi block={4} kilovati={block4} spent={spent4} />
      </div>
      <hr className="hrr2" />
      <div className="total">
        <p className="cheap">
          {lang === 'makedonski' ? '???????????? ????????????' : 'Low tariff '}{' '}
          <span>{evtinaSmetkaFinal}</span>{' '}
          {lang === 'makedonski' ? '??????.' : 'den.'}
        </p>
        <p className="skapa">
          {lang === 'makedonski' ? '?????????? ????????????' : 'High tariff '}{' '}
          <span>{skapaSmetkaFinal}</span>{' '}
          {lang === 'makedonski' ? '??????.' : 'den.'}
        </p>
        <p className="taksa">
          {lang === 'makedonski' ? '?????????????????? ??????????' : 'Communal tax '}{' '}
          <span>{komunalnaTaksa.toFixed(2)}</span>{' '}
          {lang === 'makedonski' ? '??????.' : 'den.'}
        </p>
        <hr className="hrr3" />
        <h3 className="vkupno">
          {lang === 'makedonski' ? '????????????' : 'Total '} {vkupnaSmetka}{' '}
          {lang === 'makedonski' ? '??????.' : 'den.'}
        </h3>
      </div>
    </StyledComp>
  );
};

export default Matematika;

// ????1 = -> 210 KW/h
// ????2 = 210 - 630
// ????3 = 630 - 1050
// ????4 = 1050 ->
