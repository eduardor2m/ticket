import React from 'react';

import styles from '../styles/components/Informations.module.scss';

export const Informations: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.location}>
          <h4>Location</h4>
          <p>Junqueiro, AL</p>
        </div>
        <div className={styles.location}>
          <h4>Price</h4>
          <p>R$ 69,90</p>
        </div>
        <div className={styles.location}>
          <h4>Date</h4>
          <p>24/06/2022</p>
        </div>
        <div className={styles.location}>
          <h4>Type</h4>
          <p>Front</p>
        </div>

        <button>Buy</button>
      </div>
    </div>
  );
};
