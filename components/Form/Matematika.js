import React from 'react';
import styled from 'styled-components';

const StyledComp = styled.div`
  h3 {
    font-size: 1.4rem;
    margin-top: 1rem;
    margin-bottom: 0rem;
    span {
      color: #d77578;
    }
  }
  p {
    font-size: 1.2rem;
    margin-top: 0;
  }
  .btn {
    button {
      background-color: #28bd91;
      color: #435f70;
      color: #354c59;
      padding: 0.3rem 1rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      letter-spacing: 0.04rem;
      font-weight: bolder;
      :hover {
        background-color: #179972;
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
        margin-bottom: 0.2rem;
        font-weight: 600;
      }
      .botP {
        font-weight: 600;
      }
      .evt {
        color: #70c2a9;
      }
      .skp {
        color: #fc787d;
        color: #d77578;
      }
    }
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
    </StyledComp>
  );
};

export default Matematika;
