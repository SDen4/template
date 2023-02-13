import React, { FC } from 'react';

import styles from './styles.css';

export const Header: FC = () => {
  return (
    <header>
      <h1 className={styles.appHeader}>
        Typescript - CSS - React - Redux-saga - Redux-toolkit - Jest
      </h1>
    </header>
  );
};
