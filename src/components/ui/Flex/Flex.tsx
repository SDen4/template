import React, { FC, HTMLAttributes, memo, PropsWithChildren } from 'react';

import classes from './styles.module.css';

export const Flex: FC<PropsWithChildren<HTMLAttributes<HTMLDivElement>>> = memo(
  ({ children, className, style, ...props }) => {
    return (
      <div className={`${classes.flex} ${className}`} style={style} {...props}>
        {children}
      </div>
    );
  },
);
