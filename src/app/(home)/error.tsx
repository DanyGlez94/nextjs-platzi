'use client';

import { useEffect } from 'react';
import styles from './error.module.sass';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.Error}>
      <h1>Oops! Something went wrong.</h1>
      <p>Try refreshing the page or going back to the previous page.</p>
      <button onClick={reset}>Go back</button>
    </div>
  );
}
