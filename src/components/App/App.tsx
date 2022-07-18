import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getInitDataSaga, saveRndData } from '../../store/main/duck';

import { selectRndData } from '../../store/main/selectors/selectors';

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
      <header className={styles.appHeader}>
        React - Redux - Redux-saga - Redux-toolkit - Axios
      </header>

      <div>
        <button type="button" onClick={onButtonClick}>
          Save RND data
        </button>
      </div>

      <div className={styles.appHeader}>
        <span>Random number from the store: </span>
        <span>{randomData}</span>
      </div>
    </div>
  );
};

export default App;
