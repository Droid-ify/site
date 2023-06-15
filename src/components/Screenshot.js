import React from 'react';
import clsx from 'clsx';
import styles from './Screenshots.module.css';

export default function Screenshot({name, alt, width, height, showCaption, large}) {
  return (
    <div className={clsx(styles.screenshotContainer)}>
      <picture>
        <source type="image/webp" srcSet={require(`@site/static/img/screenshots/${name}.webp`).default} />
        <source type="image/png" srcSet={require(`@site/static/img/screenshots/${name}.png`).default} />
        <img
          className={clsx(styles.screenshot, large ? styles.screenshotLarge : "")}
          width={width}
          height={height}
          src={require(`@site/static/img/screenshots/${name}.png`).default} alt={alt} />
      </picture>

      {showCaption &&
        <>
          <br />
          <span className={clsx(styles.screenshotCaption)}>{alt}</span>
        </>
      }
    </div>
  );
}

Screenshot.defaultProps = {
  width: 205,
  height: 433,
  showCaption: true,
  large: false,
};
