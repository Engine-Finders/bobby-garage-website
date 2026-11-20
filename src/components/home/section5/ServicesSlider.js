"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "../../ui/Icon";
import ServiceCard from "./ServiceCard";

const AUTO_MS = 4500;

export default function ServicesSlider({ services }) {
  const count = services.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef(null);
  const touchRef = useRef({ x: 0, y: 0 });

  const pauseTemporarily = useCallback(() => {
    setPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setPaused(false), AUTO_MS);
  }, []);

  const goTo = useCallback(
    (next) => {
      if (!count) return;
      setIndex((((next % count) + count) % count));
    },
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [paused, count]);

  useEffect(() => {
    return () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, []);

  const onTouchStart = (e) => {
    touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchRef.current.x;
    const dy = e.changedTouches[0].clientY - touchRef.current.y;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      goTo(index + (dx < 0 ? 1 : -1));
    }
    pauseTemporarily();
  };

  if (!count) return null;

  return (
    <div
      className="mt-0 md:hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="relative overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        aria-roledescription="carousel"
        aria-label="Specialist services"
      >
        <ul
          className="flex transition-transform duration-500 ease-out"
          style={{
            width: `${count * 100}%`,
            transform: `translateX(-${(index * 100) / count}%)`,
          }}
        >
          {services.map((service, i) => (
            <li
              key={service.title}
              className="box-border shrink-0"
              style={{ width: `${100 / count}%` }}
              aria-hidden={i !== index}
              aria-label={`Service ${i + 1} of ${count}`}
            >
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex items-center justify-between gap-4 px-1">
        <button
          type="button"
          onClick={() => {
            goTo(index - 1);
            pauseTemporarily();
          }}
          aria-label="Previous service"
          className="flex size-11 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-[0_6px_16px_rgba(13,15,18,0.08)] transition"
        >
          <Icon name="chevronLeft" className="size-5" strokeWidth={2.2} />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Service slides">
          {services.map((service, i) => (
            <button
              key={service.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to ${service.title}`}
              onClick={() => {
                goTo(i);
                pauseTemporarily();
              }}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index ? "bg-brand" : "bg-[#d7d2cc]"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            goTo(index + 1);
            pauseTemporarily();
          }}
          aria-label="Next service"
          className="flex size-11 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_18px_rgba(232,93,38,0.35)] transition hover:bg-brand-hover"
        >
          <Icon name="chevronRight" className="size-5" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}
