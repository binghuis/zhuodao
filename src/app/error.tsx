'use client'; // Error components must be Client Components

import { useEffect } from 'react';

// 同级页面异常捕获
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>页面异常</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        重试
      </button>
    </div>
  );
}
