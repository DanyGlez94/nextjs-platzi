'use client';
import Image from 'next/image';
import styles from 'app/sass/global-error.module.sass';
import { ErrorPageProps } from '../../types';

export default function GlobalError({ reset }: ErrorPageProps) {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Oops! Something went wrong.</h1>
      <Image src="/images/error.png" alt="Error" width={500} height={500} />
      <p className={styles.Error__message}>
        Sorry, we are unable to process your request at this moment.
      </p>
      <button className={styles.Error__button} onClick={reset}>
        Retry
      </button>
    </main>
  );
}
