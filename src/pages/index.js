import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Screenshot from '../components/Screenshot';
import Screenshots from '../components/Screenshots';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--7', styles.heroTextContainer)}>
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--primary button--lg"
                to="/download">
                Install
              </Link>
            </div>
          </div>

          <div className={clsx('col col--5', styles.heroImageContainer)}>
            <Screenshot
              name="hero"
              width="300"
              height="633.5"
              showCaption={false}
              large={true}
              alt="Screenshot of Droid-ify" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="Droid-ify is a F-Droid client focused on design, user experience, and performance, with a touch of privacy.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
