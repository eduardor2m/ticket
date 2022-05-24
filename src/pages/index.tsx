import type { NextPage } from 'next';
import Head from 'next/head';

import { Description } from '../components/Description';
import { Header } from '../components/Header';
import { Informations } from '../components/Informations';
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
                <Description />
                <Informations />
            </main>
        </div>
    );
};

export default Home;
