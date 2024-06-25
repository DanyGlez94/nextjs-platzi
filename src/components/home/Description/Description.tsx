'use client';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Description.module.sass';

const PLACEHOLDER_IMAGE =
  'data:image/jpeg;base64,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0GtTUANAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF0AAAAAAAAAANNAAADTQNDQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAUAAAMADDEAMMADDAADAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAABQDFwEFATDFFExcADADFBcMBBcMBBcEEFMBBcTAAAAAxMMUREFAQMEAAAAAAAAAA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';

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => setHasBorder(!hasBorder);

  const cx = classNames.bind(styles);

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  });

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            // width={500}
            // height={300}
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
            // priority={false}
            // quality={30}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow´s Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
