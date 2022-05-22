import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/festa.svg';
import styles from '../styles/components/Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src={logo} alt="logo" width="150" height="50" />
        <Link href="/favorites">
          <AiOutlineStar className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};
