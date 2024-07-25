import type { FC, HTMLAttributes, PropsWithChildren } from 'react';
import React from 'react';

import classes from './styles.module.css';

export const Flex: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = ({
  children,
  className,
  style,
  ...props
}) => (
  <div className={`${classes.flex} ${className}`} style={style} {...props}>
    {children}
  </div>
);
