import React from 'react';
import styled from 'styled-components';
import Blokovi from '../Blokovi';

const StyledComp = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    span {
      color: #d77578;
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
      margin-top: 1.5rem;
      @media (max-width: 1400px) {
        margin-top: 1rem;
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
        box-shadow: 0px 4px 7px -2px rgba(36, 102, 85, 0.5);
        -webkit-box-shadow: 0px 4px 7px -2px rgba(36, 102, 85, 0.5);
        -moz-box-shadow: 0px 4px 7px -2px rgba(36, 102, 85, 0.5);
      }
    }
    .clear {
      button {
        background-color: #d77578;
        :hover {
          background-color: #e55c61;
        }
        box-shadow: 0px 4px 7px -2px rgba(191, 61, 66, 0.5);
        -webkit-box-shadow: 0px 4px 7px -2px rgba(191, 61, 66, 0.5);
        -moz-box-shadow: 0px 4px 7px -2px rgba(191, 61, 66, 0.5);
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
        color: #d77578;
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
      color: #d77578;
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
      color: #d77578;
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
    border-radius: 5px;
    width: 16rem;
    margin: auto;
    padding: 0.5rem 1rem 0.7rem 1rem;
  }
`;

const Matematika = ({ days, evtinaStruja, skapaStruja, clearData }) => {
  const clear = () => {
    clearData(true);
  };

  let block1;
  let block2;
  let block3;
  let block4;

  if (skapaStruja <= 210) {
    block1 = skapaStruja;
  }
  if (skapaStruja > 210 && skapaStruja <= 630) {
    block1 = 210;
    block2 = skapaStruja - 210;
  }
  if (skapaStruja > 630 && skapaStruja <= 1050) {
    block1 = 210;
    block2 = 630;
    block3 = skapaStruja - 840;
  }
  if (skapaStruja > 1050) {
    block1 = 210;
    block2 = 630;
    block3 = 1050;
    block4 = skapaStruja - 1050;
  }

  // console.log('block1', block1);
  // console.log('block2', block2);
  // console.log('block3', block3);
  // console.log('block4', block4);
  return (
    <StyledComp>
      <div className="buttons">
        {/* <div className="btn">
          <button>Пресметај</button>
        </div> */}
        <div className="btn clear">
          <button onClick={() => clear()}>Бриши</button>
        </div>
      </div>
      <h3>
        Потрошено за <span>{days ? days : 0}</span> дена
      </h3>
      <div className="potrosuvacka">
        <div className="kwh">
          <p className="topP evt">Евтина</p>
          <p className="botP ">{evtinaStruja} kw/h</p>
        </div>
        <div className="kwh">
          <p className="topP skp">Скапа</p>
          <p className="botP ">{skapaStruja} kw/h</p>
        </div>
      </div>
      <hr className="hrr" />
      <div className="blokovi">
        <Blokovi block={1} kilovati={block1} />
        <Blokovi block={2} kilovati={block2} />
        <Blokovi block={3} kilovati={block3} />
        <Blokovi block={4} kilovati={block4} />
      </div>
      <hr className="hrr2" />
      <div className="total">
        <p className="cheap">Евтина струја 255 денари</p>
        <p className="skapa">Скапа струја 255 денари</p>
        <p className="taksa">Комунална такса 184 денари</p>
        <hr className="hrr3" />
        <h3 className="vkupno">
          Вкупно <span>255 денари</span>
        </h3>
      </div>
    </StyledComp>
  );
};

export default Matematika;

// ВТ1 = -> 210 KW/h
// ВТ2 = 210 - 630
// ВТ3 = 630 - 1050
// ВТ4 = 1050 ->
