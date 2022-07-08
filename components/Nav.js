import React from 'react';
import styled from 'styled-components';

const MyNav = styled.div`
  background-color: #1f3947;

  height: 40vh;
  .kontaktVrap {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .contact {
      position: absolute;
      border: solid 1px #39bd96;
      border-radius: 5px;
      margin-right: 5vw;
      margin-top: 3vh;
      padding: 0.2rem 1rem 0.4rem 1rem;
      background-color: rgba(36, 102, 85, 0.3);
      :hover {
        background-color: #29a680;
      }

      a {
        color: #b8d5e5;
        font-weight: 500;
        font-size: 1.2rem;
        :hover {
          color: #ccecff;
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <MyNav>
      <div className="kontaktVrap">
        <div className="contact">
          <a href="mailto:igorrmkd@outlook.com">Контакт</a>
        </div>
      </div>
    </MyNav>
  );
};

export default Nav;
