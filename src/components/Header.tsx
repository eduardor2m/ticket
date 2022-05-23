import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/logo.svg';
import styles from '../styles/components/Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.links}>
          <Image src={logo} alt="logo" width="80" height="80" />
          <Link href="/home">
            <a>Home</a>
          </Link>
          <Link href="/aboutus">
            <a>About Us</a>
          </Link>
          <Link href="/ambassadors">
            <a>Ambassadors</a>
          </Link>
        </div>
        <div className={styles.users}>
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Link href="/signup">
            <a className={styles.signup}>Sign Up</a>
          </Link>
        </div>
      </div>
    </div>
  );
};
