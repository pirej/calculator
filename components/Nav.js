import React from 'react';
import styled from 'styled-components';

const MyNav = styled.div`
  background-color: #1f3947;
  height: 30vh;
  text-align: center;
  h1 {
    font-size: 4rem;
    margin-top: 0;
    padding-top: 2rem;
    letter-spacing: 0.3rem;
    color: #a3c7d9;
  }
`;

const Nav = () => {
  return (
    <MyNav>
      <h1>ДЕСЕТОК</h1>
    </MyNav>
  );
};

export default Nav;
