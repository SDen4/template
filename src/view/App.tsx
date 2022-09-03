import React, { Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getInitDataSaga, saveRndData } from '../store/reducers/main';

import { rndDataSelect } from '../selectors/main';

import styles from './styles.module.css';

const LazyButton = React.lazy(() => import('../components/ui/Button'));
const LazyHeader = React.lazy(() => import('../components/Header'));

const App: React.FC = () => {
  const dispatch = useDispatch();

  const rndData: number = useSelector(rndDataSelect);

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
        className={`${styles.section} ${rndData > 0.5 ? styles.redText : ''}`}
      >
        <span>Random number from the store:&nbsp;</span>
        <span>{rndData}</span>
      </section>
    </main>
  );
};

export default App;
