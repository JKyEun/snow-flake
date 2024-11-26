'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './styles/SnowOverlay.module.scss';

interface SnowflakeStyle {
  left: string;
  opacity: number;
  fontSize: string;
  animationDuration: string;
}

interface Snowflake {
  id: number;
  style: SnowflakeStyle;
}

interface SnowOverlayProps {
  frequency?: number; // 눈송이 생성 주기 (ms)
  minSize?: number; // 최소 크기 (px)
  maxSize?: number; // 최대 크기 (px)
  minDuration?: number; // 최소 애니메이션 시간 (s)
  maxDuration?: number; // 최대 애니메이션 시간 (s)
  zIndex?: number; // z-index 값
  snowflakeChar?: string; // 눈송이 문자
}

interface SnowflakeProps {
  style: SnowflakeStyle;
  char?: string;
}

function Snowflake({ style, char = '❅' }: SnowflakeProps) {
  return (
    <div className={styles.snowflake} style={style}>
      {char}
    </div>
  );
}

export default function SnowOverlay({
  frequency = 150,
  minSize = 10,
  maxSize = 20,
  minDuration = 5,
  maxDuration = 10,
  zIndex = 1000001,
  snowflakeChar = '❅',
}: SnowOverlayProps) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  const createSnowflake = useCallback(() => {
    const style = {
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.7 + 0.3,
      fontSize: `${Math.random() * (maxSize - minSize) + minSize}px`,
      animationDuration: `${Math.random() * (maxDuration - minDuration) + minDuration}s`,
    };

    const id = Date.now() + Math.random();

    setSnowflakes((prev) => [...prev, { id, style }]);

    setTimeout(
      () => {
        setSnowflakes((prev) => prev.filter((snowflake) => snowflake.id !== id));
      },
      parseFloat(style.animationDuration) * 1000,
    );
  }, [maxSize, minSize, maxDuration, minDuration]);

  useEffect(() => {
    const interval = setInterval(createSnowflake, frequency);

    return () => clearInterval(interval);
  }, [frequency, createSnowflake]);

  return (
    <div className={styles.snowOverlay} style={{ zIndex }}>
      {snowflakes.map((snowflake) => (
        <Snowflake key={snowflake.id} style={snowflake.style} char={snowflakeChar} />
      ))}
    </div>
  );
}
