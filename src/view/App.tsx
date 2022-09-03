import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getInitDataSaga, saveRndData } from '../store/reducers/main';

import { selectRndData } from '../selectors/main';

import styles from './styles.module.css';

const LazyButton = React.lazy(() => import('../components/ui/Button'));
const LazyHeader = React.lazy(() => import('../components/Header'));

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
      <Suspense fallback={<p>Loading...</p>}>
        <LazyHeader />
      </Suspense>

      <section className={styles.section}>
        <Suspense fallback={<p>Loading...</p>}>
          <LazyButton
            type="button"
            title="Button text"
            onBtnClick={onButtonClick}
          />
        </Suspense>
      </section>

      <section
        className={`${styles.section} ${
          randomData > 0.5 ? styles.redText : ''
        }`}
      >
        <span>Random number from the store:&nbsp;</span>
        <span>{randomData}</span>
      </section>
    </main>
  );
};

export default App;
