import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import styles from "./ProjectDescriptionClamp.module.css";

/**
 * Collapses long description copy with "Read more" / "Read less" so each project
 * can use a consistent vertical slot without hiding short blurbs.
 */
export function ProjectDescriptionClamp({
  children,
  contentClassName = "",
  collapsedHeightPx = 220,
  /** Called after clamp layout (collapse/expand/measure) so the page can resize the artboard. */
  onLayoutStable,
}) {
  const innerRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [needsToggle, setNeedsToggle] = useState(false);

  const measure = useCallback(() => {
    const el = innerRef.current;
    if (!el) return;
    setNeedsToggle(el.scrollHeight > collapsedHeightPx + 2);
  }, [collapsedHeightPx]);

  useLayoutEffect(() => {
    measure();
    const el = innerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    window.addEventListener("resize", measure);
    queueMicrotask(() => {
      onLayoutStable?.();
    });
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, children, expanded, needsToggle, onLayoutStable]);

  const clamped =
    needsToggle && !expanded
      ? { maxHeight: `${collapsedHeightPx}px`, overflow: "hidden" }
      : undefined;

  return (
    <div className={styles.root}>
      <div
        ref={innerRef}
        className={`${styles.inner} ${contentClassName}`.trim()}
        style={clamped}
      >
        {children}
      </div>
      {needsToggle ? (
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
    </div>
  );
}
