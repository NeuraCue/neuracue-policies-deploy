'use client';

import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const ZONE = 'America/Los_Angeles';

    const parts = (d: Date) =>
      new Intl.DateTimeFormat('en-US', {
        timeZone: ZONE,
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZoneName: 'short',
      })
        .formatToParts(d)
        .reduce((o: Record<string, string>, p) => {
          o[p.type] = p.value;
          return o;
        }, {});

    const fmt = (d: Date) => {
      const p = parts(d);
      return `${p.day} ${p.month.toUpperCase()} ${p.year}  ${p.hour}:${p.minute}:${p.second} ${p.timeZoneName}`;
    };

    // Set year
    const currentYear = new Intl.DateTimeFormat('en-US', {
      timeZone: ZONE,
      year: 'numeric',
    }).format(new Date());
    setYear(currentYear);

    // Update clock
    const tick = () => {
      setTime('  ' + fmt(new Date()));
    };
    tick();
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="text-center"
      style={{
        fontSize: '0.8em',
        marginTop: '3rem',
        marginBottom: '3rem',
        color: '#FF7A1A',
      }}
    >
      <p style={{ fontVariantNumeric: 'tabular-nums' }}>
        © <span id="year">{year}</span> NeuraCue™ All rights reserved
        <span id="clock" className="ts">
          {time}
        </span>
      </p>
      <style jsx>{`
        #clock.ts::before {
          content: '';
          display: inline-block;
          width: 0.35em;
          height: 0.35em;
          margin: 0 0.5ch 0 0.7ch;
          background: currentColor;
          border-radius: 50%;
          vertical-align: middle;
          transform: translateY(-0.06em);
        }
      `}</style>
    </footer>
  );
}