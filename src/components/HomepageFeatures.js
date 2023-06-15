import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Fast and Smooth',
    Svg: require('@site/static/img/undraw_fast_loading.svg').default,
    description: (
      <>
        With deep, empirically-proven optimizations throughout the system,
        Droid-ify is faster and smoother.
        <br />
        <Link to="/features#performance">Learn more</Link>
      </>
    ),
  },
  {
    title: 'Clean UI design',
    Svg: require('@site/static/img/undraw_design_components.svg').default,
    description: (
      <>
        Droid-ify's typography, attention to details, and colors picked with
        state-of-the-art color science make for a clean and elegant UI.
        <br />
        <Link to="/features#ui">Learn more</Link>
      </>
    ),
  },
  {
    title: 'Privacy',
    Svg: require('@site/static/img/undraw_private_data.svg').default,
    description: (
      <>
        Droid-ify helps keep your data private ,Open-source software,
        Independent verification, No mandatory user accounts, Enhanced privacy settings, no ads, no tracking.
        <br />
        <Link to="/features#privacy-and-security">Learn more</Link>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
