import React from 'react';
import styles from './Footer.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.list}>
        <h5>Flu Near You</h5>
        <ul>
          <li>
            <a href="mailto:flunearyou@healthmap.org">flunearyou@healthmap.org</a>
          </li>
        </ul>
      </div>
      <div className={styles.list}>
        <h5>ABOUT US</h5>
        <ul></ul>
      </div>
      <div className={styles.list}>
        <h5>SUPPORT</h5>
        <ul></ul>
      </div>
      <div className={styles.list}>
        <h5>LEGAL</h5>
        <ul></ul>
      </div>
    </div>
  </footer>
);

export default Footer;
