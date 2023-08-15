import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import styles from './layout.module.css';
import Link from 'next/link';
import Footer from "@components/Footer";
import Links from './links';

export const siteTitle = 'iwantmyclickback.com';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name={siteTitle}
                    content="The clickbait antidote"
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/clickfinger.jpeg"
                            className={utilStyles.borderCircle}
                            height={288}
                            width={288}
                            alt="Image by anartelman @ https://www.123rf.com/profile_anartelman"
                        />
                        <h1 className={utilStyles.heading2Xl}>{siteTitle}</h1>
                        <Links />
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <Image
                                priority
                                src="/clickfinger.jpeg"
                                className={utilStyles.borderCircle}
                                height={288}
                                width={288}
                                alt="Image by anartelman @ https://www.123rf.com/profile_anartelman"
                            />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/" className={utilStyles.colorInherit}>
                                {siteTitle}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">← Back to home</Link>
                </div>
            )}
            <Footer />

        </div>
    );
}