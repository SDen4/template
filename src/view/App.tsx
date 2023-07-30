import type { FC } from 'react';
import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Header } from 'components/Header';
import { Result } from 'components/Result';

import { useGetUserQuery } from 'store/github/githubApi';
import { reset, rndData } from 'store/main/reducers';

import styles from './styles.module.css';
// only for example of lazy import ;-)
const LazyButton = lazy(() => import('components/ui/Button'));

export const App: FC = () => {
  const dispatch = useDispatch();

  const [path, setPath] = useState('');

  const { data, isLoading } = useGetUserQuery(path);

  useEffect(() => {
    setPath(`users/a${(Math.random() * 10).toFixed()}`);

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
      <section className={styles.section}>
        <Result />
      </section>
      <section className={styles.section}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <img src={data?.avatar_url} alt="todoImage" />
        )}
      </section>

      <section className={styles.section}>
        {import.meta.env.VITE_APP_TEMPLATE_VAR}
      </section>
    </main>
  );
};
