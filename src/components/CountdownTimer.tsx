import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const pad = (n: number) => String(n).padStart(2, "0");

const TimeUnit: React.FC<{ value: number; label: string }> = React.memo(({ value, label }) => (
  <div className="flex flex-col items-center">
    <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 min-w-[80px] sm:min-w-[100px] shadow-[var(--shadow-soft)]">
      <div className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">
        {pad(value)}
      </div>
    </div>
    <div className="text-sm sm:text-base text-muted-foreground mt-2 font-medium">{label}</div>
  </div>
));
TimeUnit.displayName = "TimeUnit";

export const CountdownTimer: React.FC = () => {
  const launchDateStr = (import.meta.env.VITE_LAUNCH_DATE as string) ?? "";
  const targetTs = useMemo(() => {
    const t = Number(new Date(launchDateStr || 0));
    return Number.isFinite(t) && t > 0 ? t : 0;
  }, [launchDateStr]);

  const calc = useCallback((): TimeLeft => {
    const now = Date.now();
    const diff = Math.max(0, targetTs - now);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds };
  }, [targetTs]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calc());

  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    // If no valid target, keep zeros and do nothing
    if (!targetTs) return;

    // Align first tick to next full second to avoid drift
    const now = Date.now();
    const delay = 1000 - (now % 1000);

    // single-shot to align to next second
    timeoutRef.current = window.setTimeout(() => {
      // Update immediately on alignment
      const newVal = calc();
      // Only update state if changed
      setTimeLeft(prev => {
        if (
          prev.days === newVal.days &&
          prev.hours === newVal.hours &&
          prev.minutes === newVal.minutes &&
          prev.seconds === newVal.seconds
        ) {
          return prev;
        }
        return newVal;
      });

      // then set interval every 1000ms
      intervalRef.current = window.setInterval(() => {
        setTimeLeft(prev => {
          const next = calc();
          if (
            prev.days === next.days &&
            prev.hours === next.hours &&
            prev.minutes === next.minutes &&
            prev.seconds === next.seconds
          ) {
            return prev;
          }
          return next;
        });
      }, 1000);
    }, delay);

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [targetTs, calc]);

  return (
    <div
      aria-live="polite"
      role="timer"
      className="flex gap-3 sm:gap-4 justify-center animate-fade-in"
      style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
    >
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};
