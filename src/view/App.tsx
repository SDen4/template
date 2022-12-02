import React, { FC, lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from 'components/Header';
import { Result } from 'components/Result';

import { getInitDataSaga } from 'store/main/actions';
import { reset, rndData } from 'store/main/reducers';

import styles from './styles.module.css';

// only for example of lazy import ;-)
const LazyButton = lazy(() => import('components/ui/Button'));

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitDataSaga());

    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  const onButtonClick = () => {
    const randomNum = Math.random();
    dispatch(rndData(randomNum));
  };

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.section}>
        <Suspense fallback={<p>Loading...</p>}>
          <LazyButton
            type="button"
            text="Button text"
            title="Default hint text"
            onClick={onButtonClick}
            style={{ backgroundColor: 'red' }}
            hidden={false}
            accessKey="c"
          />
        </Suspense>
      </section>

      <section className={`${styles.section}`}>
        <Result />
      </section>
    </main>
  );
};
