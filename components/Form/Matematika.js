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
