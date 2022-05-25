import React from 'react';
import { AiFillGithub, AiFillAmazonCircle } from 'react-icons/ai';
import { GiAbstract021 } from 'react-icons/gi';

import styles from '../styles/components/Sponsors.module.scss';

export const Sponsors: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <AiFillAmazonCircle size={64} />
                </div>
                <div className={styles.logo}>
                    <AiFillGithub size={64} />
                </div>
                <div className={styles.logo}>
                    <GiAbstract021 size={64} />
                </div>
            </div>
        </div>
    );
};
