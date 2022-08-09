import React from 'react';

import styles from './styles.module.css';

interface IProps {
  type: 'button' | 'reset' | 'submit';
  onBtnClick: () => void;
  title: string;
}

const Button: React.FC<IProps> = ({ type, onBtnClick, title }) => {
  return (
    <button className={styles.button} type={type} onClick={onBtnClick}>
      {title}
    </button>
  );
};

export default Button;
