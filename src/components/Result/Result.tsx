import React from 'react';
import { useSelector } from 'react-redux';

import { Flex } from 'components/ui/Flex';

import { rndDataSelect } from 'selectors/main';

import styles from './styles.module.css';

export const Result: React.FC = () => {
  const rndData = useSelector(rndDataSelect);

  return (
    <Flex className={`${styles.span} ${rndData > 0.5 ? styles.redText : ''}`}>
      <span>Random number from the store:&nbsp;</span>
      <span>{rndData}</span>
    </Flex>
  );
};
