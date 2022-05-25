import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Description } from '../components/Description';
import { Header } from '../components/Header';
import { Informations } from '../components/Informations';
import { Sponsors } from '../components/Sponsors';
import styles from '../styles/pages/Home.module.scss';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ticket</title>
                <meta name="description" content="Ticket Junino" />
                <link rel="icon" href="/assets/logo.svg" />
            </Head>

            <main className={styles.main}>
                <Header />
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        <Description />
                        <Informations />
                        <Sponsors />
                    </div>
                    <div className={styles.img}>
                        <Image
                            src="/assets/party.svg"
                            alt="Party"
                            layout="fill"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
