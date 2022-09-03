import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Header } from 'components/Header';

import { getInitDataSaga, saveRndData } from 'store/reducers/main';

import { rndDataSelect } from 'selectors/main';

import styles from './styles.module.css';

// only for example of lazy import))
const LazyButton = React.lazy(() => import('components/ui/Button'));

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const rndData: number = useSelector(rndDataSelect);

  useEffect(() => {
    dispatch(getInitDataSaga());
  }, [dispatch]);

  const onButtonClick = () => {
    const randomNum = Math.random();
    dispatch(saveRndData(randomNum));
  };

  return (
    <main className={styles.app}>
      <Header />

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
