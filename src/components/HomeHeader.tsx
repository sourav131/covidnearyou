import React from 'react';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import styles from '../styles/HomeHeader.scss';
import harvardImage from '../images/harvard-logo1.png';
import Logo from './Logo';
import Title from './Title';

const HomeHeader = () => (
  <div className={styles.container}>
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <Logo /> COVID-19
      </div>
      <div className={styles.navRight}>
        <img src={harvardImage} alt="Harvard logo" />
      </div>
    </nav>
    <div className={styles.textContainer}>
      <Title level={3}>Help track and stop the spread of COVID-19</Title>
      <Title level={1}>How are you feeling?</Title>
      <div className={styles.btnGroup}>
        <button className={styles.btnGood}>
          <MdThumbUp />
          Great, thanks!
        </button>
        <button className={styles.btnBad}>
          <MdThumbDown />
          Not feeling well
        </button>
      </div>
    </div>
    <div className={styles.backgroundImg} />
  </div>
);

export default HomeHeader;
