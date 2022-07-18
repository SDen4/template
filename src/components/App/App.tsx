import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Header';

import { getInitDataSaga, saveRndData } from '../../store/main/duck';

import { selectRndData } from '../../store/main/selectors';

import styles from './styles.module.css';
import Button from '../Button';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const randomData: number = useSelector(selectRndData);

  useEffect(() => {
    dispatch(getInitDataSaga());
  }, [dispatch]);

  const onButtonClick = () => {
    const randomNum = Math.random();
    console.log(randomNum);
    dispatch(saveRndData(randomNum));
  };

  return (
    <main className={styles.app}>
      <Header />

      <section className={styles.section}>
        <Button type="button" title="Button text" onBtnClick={onButtonClick} />
      </section>

      <section className={styles.section}>
        <span>Random number from the store: </span>
        <span>{randomData}</span>
      </section>
    </main>
  );
};

export default App;
