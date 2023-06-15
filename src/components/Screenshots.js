import React from 'react';
import clsx from 'clsx';
import styles from './Screenshots.module.css';

export default function Screenshots(props) {
  return (
    <div className={clsx(styles.screenshotsContainer)}>
      {props.children}
    </div>
  );
}
