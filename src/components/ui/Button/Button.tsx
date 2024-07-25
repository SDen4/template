import type { FC, HTMLAttributes } from 'react';
import React from 'react';

import styles from './styles.module.css';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'reset' | 'submit';
  text?: string;
}

const Button: FC<IProps> = ({ type, text, ...props }) => (
  <button type={type} {...props} className={styles.button}>
    {text}
  </button>
);

export default Button;
