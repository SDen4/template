import React from 'react';

import { ButtonType } from './types';

import styles from './styles.module.css';

const Button: React.FC<ButtonType> = ({ type, onBtnClick, title }) => {
  return (
    <button className={styles.button} type={type} onClick={onBtnClick}>
      {title}
    </button>
  );
};

export default Button;
