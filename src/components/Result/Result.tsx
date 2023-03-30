import type { FC } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';

import { Flex } from 'components/ui/Flex';

import { rndDataSelect } from 'selectors/main';

import styles from './styles.css';

export const Result: FC = () => {
  const rndData = useSelector(rndDataSelect);

  return (
    <Flex
      className={`${styles.span} ${
        (rndData as number) > 0.5 ? styles.redText : ''
      }`}
    >
      <span>Random number from the store:&nbsp;</span>
      <span>{rndData}</span>
    </Flex>
  );
};
