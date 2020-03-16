import React, { ReactNode, SFC } from 'react';
import styles from './Title.scss';

const Title: SFC<{ children: ReactNode; level: number }> = ({ children, level = 1 }) => {
  const types: { [key: number]: any } = {
    1: <h1 className={styles.title1}>{children}</h1>,
    2: <h2 className={styles.title2}>{children}</h2>,
    3: <h3 className={styles.title3}>{children}</h3>,
  };

  return types[level];
};

export default Title;
