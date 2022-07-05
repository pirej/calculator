import React from 'react';
import styled from 'styled-components';

const MyNav = styled.div`
  background-color: #0e415e;
  height: 30vh;
  text-align: center;
  h1 {
    color: white;
    font-size: 4rem;
    margin-top: 0;
    padding-top: 2rem;
    letter-spacing: 0.3rem;
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
