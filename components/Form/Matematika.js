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
  }
  p {
    font-size: 1.2rem;
    margin-top: 0;
  }
  .btn {
    margin-top: 1.5rem;
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
      :hover {
        background-color: #29a680;
      }
      box-shadow: 0px 4px 7px -2px rgba(36, 102, 85, 0.9);
      -webkit-box-shadow: 0px 4px 7px -2px rgba(36, 102, 85, 0.9);
      -moz-box-shadow: 0px 4px 7px -2px rgba(36, 102, 85, 0.9);
    }
  }
  .potrosuvacka {
    display: flex;
    justify-content: space-evenly;
    .kwh {
      display: flex;
      flex-direction: column;
      width: 16%;
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
    margin-bottom: 0.5rem;
  }
  .hrr2 {
    margin-top: 1rem;
    /* margin-bottom: 0.5rem; */
  }
  .blokovi {
    display: flex;
    justify-content: space-evenly;
    .one {
      color: #39bd96;
    }
    .two {
      color: #d7b140;
    }
    .three {
      color: #d78a54;
    }
    .four {
      color: #d77578;
    }
  }
  .total {
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

const Matematika = () => {
  return (
    <StyledComp>
      <div className="btn">
        <button>Пресметај</button>
      </div>
      <h3>
        Потрошено за <span>26</span> дена
      </h3>
      <div className="potrosuvacka">
        <div className="kwh">
          <p className="topP evt">Евтина</p>
          <p className="botP ">356565 kw/h</p>
        </div>
        <div className="kwh">
          <p className="topP skp">Скапа</p>
          <p className="botP ">356565 kw/h</p>
        </div>
      </div>
      <hr className="hrr" />
      <div className="blokovi">
        <Blokovi block={1} spent="122" />
        <Blokovi block={2} spent="122" />
        <Blokovi block={3} spent="122" />
        <Blokovi block={4} spent="122" />
      </div>
      <hr className="hrr2" />
      <div className="total">
        <p>
          Евтина струја <span>255 денари</span>
        </p>
        <p>
          Скапа струја <span>255 денари</span>
        </p>
        <p>
          Комунална такса <span>255 денари</span>
        </p>
        <hr className="hrr3" />
        <h3 className="vkupno">
          Вкупно <span>255 денари</span>
        </h3>
      </div>
    </StyledComp>
  );
};

export default Matematika;
