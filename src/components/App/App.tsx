import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Header';

import { getInitDataSaga, saveRndData } from '../../store/main/duck';

import { selectRndData } from '../../store/main/selectors';

import styles from './styles.module.css';

const App = () => {
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
    <div className={styles.app}>
      <Header />

      <div>
        <button type="button" onClick={onButtonClick}>
          Save RND data
        </button>
      </div>

      <div>
        <span>Random number from the store: </span>
        <span>{randomData}</span>
      </div>
    </div>
  );
};

export default App;
