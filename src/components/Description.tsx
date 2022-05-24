import React from 'react';

import styles from '../styles/components/Description.module.scss';

export const Description: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h3>EXPERIENCE MORE</h3>
                <h1>
                    The cheapest <br /> tickets on the <br /> internet, period.
                </h1>
                <p>
                    Zeo hidden service fees, price match guarantee, group <br />{' '}
                    discounts, and more. Because it should be this easy
                </p>
            </div>
        </div>
    );
};
