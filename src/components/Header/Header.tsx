import React from 'react';

import styles from './styles.module.css';

export const Header: React.FC = () => {
  return (
    <header>
      <h1 className={styles.appHeader}>
        Typescript - CSS - React - Redux - Redux-saga - Redux-toolkit - Axios -
        Jest
      </h1>
    </header>
  );
};
