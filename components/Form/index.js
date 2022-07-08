import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Matematika from './Matematika';
import Sostojba from './Sostojba';

const MyForm = styled.div`
  background-color: #314b59;
  width: 40vw;
  height: 91vh;
  margin: -20rem auto 0 auto;
  border-radius: 15px;
  text-align: center;
  @media (max-width: 1920px) {
    width: 40vw;
    height: 99vh;
  }
  @media (max-width: 1600px) {
    width: 45vw;
    height: 91vh;
  }
  @media (max-width: 1400px) {
    width: 55vw;
    height: 80vh;
  }
  @media (max-width: 1024px) {
    width: 65vw;
  }
  @media (max-width: 900px) {
    width: 80vw;
  }
  @media (max-width: 768px) {
    width: 85vw;
  }
  @media (max-width: 640px) {
    width: 95w;
  }
  @media (max-width: 480px) {
    height: 120vh;
  }
  @media (max-width: 400px) {
    width: 100w;
    height: 145vh;
  }

  h2 {
    margin: 0;
    padding: 1rem 0 0.9rem 0;
    font-size: 1.6rem;
    letter-spacing: 0.05rem;
    @media (max-width: 1600px) {
      font-size: 1.4rem;
    }
    @media (max-width: 1400px) {
      font-size: 1.3rem;
    }
    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
    @media (max-width: 400px) {
      padding: 1rem 2rem 0.9rem 2rem;
    }
  }
  .sostojba {
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
    }
  }
  hr {
    border: 0;
    height: 1px;
    background: #406780;
    width: 80%;
    margin-bottom: 1rem;
    @media (max-width: 1400px) {
      margin-bottom: 0.5rem;
      margin-top: 0rem;
    }
  }
`;

const Form = () => {
  //----------data from date picker-------------------
  const [oldDate, setOldDate] = useState('');
  const [newDate, setNewDate] = useState('');

  const starDatum = data => {
    setOldDate(data);
  };
  const novDatum = data => {
    setNewDate(data);
  };

  let firstDate = new Date(oldDate);
  let lastDate = new Date(newDate);
  let difference = lastDate.getTime() - firstDate.getTime();
  let denovi = Math.ceil(difference / (1000 * 3600 * 24));
  //------------data from num input-------------------
  const [oldEvtina, setOldEvtina] = useState('');
  const [oldSkapa, setOldSkapa] = useState('');
  const [newEvtina, setNewEvtina] = useState('');
  const [newSkapa, setNewSkapa] = useState('');

  const oldEvt = data => {
    setOldEvtina(data);
  };
  const newEvt = data => {
    setNewEvtina(data);
  };
  const oldSkp = data => {
    setOldSkapa(data);
  };
  const newSkp = data => {
    setNewSkapa(data);
  };
  //-------- kalk skapa i evtina -------
  const evtinaStruja = newEvtina - oldEvtina;
  const skapaStruja = newSkapa - oldSkapa;
  //------------------clear data---------------------
  const [clearBillData, setClearBillData] = useState(false);

  const clearData = () => {
    setClearBillData(true);
  };

  useEffect(() => {
    if (clearBillData) {
      setOldDate('');
      setNewDate('');
      setOldEvtina('');
      setOldSkapa('');
      setNewEvtina('');
      setNewSkapa('');
    }
    setClearBillData(false);
  }, [clearBillData]);
  //--------------------------------------------------
  return (
    <MyForm>
      <h2>Калкулатор за сметки за струја</h2>
      <hr />
      <div className="sostojba">
        <Sostojba
          title="Последна фактура"
          myDate={1}
          starDatum={starDatum}
          oldEvt={oldEvt}
          oldSkp={oldSkp}
          clearBillData={clearBillData}
        />
        <Sostojba
          title="Моментална состојба"
          myDate={2}
          novDatum={novDatum}
          newEvt={newEvt}
          newSkp={newSkp}
          clearBillData={clearBillData}
        />
      </div>
      <hr />
      <Matematika
        days={denovi}
        evtinaStruja={evtinaStruja}
        skapaStruja={skapaStruja}
        clearData={clearData}
      />
    </MyForm>
  );
};

export default Form;
