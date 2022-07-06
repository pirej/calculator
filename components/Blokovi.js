import React from 'react';
import styled from 'styled-components';

const Blocks = styled.div`
  h4 {
    margin: 0.5rem;
    font-size: 1.2rem;
  }
`;

const Blokovi = ({ block, spent }) => {
  return (
    <Blocks
      className={` ${
        block === 1
          ? 'one'
          : block === 2
          ? 'two'
          : block === 3
          ? 'three'
          : 'four'
      }`}
    >
      <h4>BT{block}</h4>
      <h4>255 kw/h</h4>
    </Blocks>
  );
};

export default Blokovi;
