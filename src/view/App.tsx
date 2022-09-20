import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from 'components/Header';
import { Result } from 'components/Result';

import { getInitDataSaga, saveRndData } from 'store/reducers/main';

import styles from './styles.module.css';

// only for example of lazy import ;-)
const LazyButton = React.lazy(() => import('components/ui/Button'));

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitDataSaga());
  }, [dispatch]);

  const onButtonClick = () => {
    const randomNum = Math.random();
    dispatch(saveRndData(randomNum));
  };

  return (
    <main className={styles.main}>
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

      <section className={`${styles.section}`}>
        <Result />
      </section>
    </main>
  );
};
