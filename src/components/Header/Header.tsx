import type { FC } from 'react';
import React from 'react';

import styles from './styles.module.css';

export const Header: FC = () => {
  return (
    <header>
      <h1 className={styles.appHeader}>
        Typescript - CSS - React - Redux-saga - Redux-toolkit - Jest
      </h1>
    </header>
  );
};
