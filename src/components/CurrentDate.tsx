'use client';

import { useEffect, useState } from 'react';

export default function CurrentDate() {
  const [date, setDate] = useState('');

  useEffect(() => {
    const formatted = new Intl.DateTimeFormat('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).format(new Date());
    setDate(formatted);
  }, []);

  return <>{date}</>;
}