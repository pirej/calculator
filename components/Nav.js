import React from 'react';
import styled from 'styled-components';
import { useLanguageContext } from '../state/langContext';

const MyNav = styled.div`
  background-color: #1f3947;
  height: 40vh;

  .navLinks {
    padding-top: 1.5rem;
    display: flex;
    justify-content: center;
    gap: 20%;

    .langWrap {
      display: flex;

      .lang {
        border: solid 1px #39bd96;
        border-radius: 5px;
        padding: 0.2rem 0.5rem 0.4rem 0.5rem;
        background-color: rgba(36, 102, 85, 0.3);
        :hover {
          background-color: #29a680;
          cursor: pointer;
        }

        p {
          color: #b8d5e5;
          font-weight: 500;
          font-size: 1.2rem;
          margin: 0;
          :hover {
            color: #ccecff;
          }
        }
      }

      .angliski {
        margin-left: 5px;
      }
    }
    .kontaktVrap {
      /* display: flex;
      flex-direction: column; */
      /* align-items: flex-end; */

      .contact {
        /* position: absolute; */
        border: solid 1px #39bd96;
        border-radius: 5px;
        /* margin-right: 5vw; */
        /* margin-top: 3vh; */
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
  }
`;

const Nav = () => {
  const { lang, jazik } = useLanguageContext();

  return (
    <MyNav>
      <div className="navLinks">
        <div className="langWrap">
          <div
            className="lang"
            onClick={() => {
              jazik('makedonski');
            }}
          >
            <p>мкд</p>
          </div>
          <div
            className="lang angliski"
            onClick={() => {
              jazik('angliski');
            }}
          >
            <p>eng</p>
          </div>
        </div>
        <div className="kontaktVrap">
          <div className="contact">
            <a href="mailto:igorrmkd@outlook.com">
              {lang === 'makedonski' ? 'Контакт' : 'Contact'}
            </a>
          </div>
        </div>
      </div>
    </MyNav>
  );
};

export default Nav;
