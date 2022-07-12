import React from 'react';
import styled from 'styled-components';
import { useLanguageContext } from '../state/langContext';

const Blocks = styled.div`
  h4 {
    margin: 0.2rem;
    font-size: 1.2rem;
    @media (max-width: 1600px) {
      font-size: 1.1rem;
    }
    @media (max-width: 1400px) {
      font-size: 1.05rem;
    }
  }
`;

const Blokovi = ({ block, spent, kilovati }) => {
  const { lang, jazik } = useLanguageContext();
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
      <h4>
        {lang === 'makedonski' ? 'ВТ' : 'HighT'}
        {block}
      </h4>
      {block === 1 && <h4>{kilovati} kw/h</h4>}
      {block === 2 && <h4>{kilovati} kw/h</h4>}
      {block === 3 && <h4>{kilovati} kw/h</h4>}
      {block === 4 && <h4>{kilovati} kw/h</h4>}
      {block === 1 && (
        <h4>
          {spent} {lang === 'makedonski' ? 'ден.' : 'den.'}
        </h4>
      )}
      {block === 2 && (
        <h4>
          {spent} {lang === 'makedonski' ? 'ден.' : 'den.'}
        </h4>
      )}
      {block === 3 && (
        <h4>
          {spent} {lang === 'makedonski' ? 'ден.' : 'den.'}
        </h4>
      )}
      {block === 4 && (
        <h4>
          {spent} {lang === 'makedonski' ? 'ден.' : 'den.'}
        </h4>
      )}
    </Blocks>
  );
};

export default Blokovi;
