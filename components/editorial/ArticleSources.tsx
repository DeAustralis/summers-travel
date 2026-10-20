"use client";

import { useEffect, useRef } from "react";
import styles from "./ReviewedArticle.module.css";

type Source = { id: string; title: string; url: string; accessedAt: string };

/** Native disclosure stays keyboard-operable; citation links also reveal and focus their endnote. */
export function ArticleSources({ sources }: { sources: Source[] }) {
  const disclosure = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    let frame = 0;
    const reveal = (hash: string, navigate: boolean) => {
      const details = disclosure.current;
      if (!details || !hash) return false;
      let id: string;
      try { id = decodeURIComponent(hash.slice(1)); } catch { return false; }
      const target = id === details.id
        ? details.querySelector("summary")
        : document.getElementById(id);
      if (!(target instanceof HTMLElement) || !details.contains(target)) return false;
      details.open = true;
      if (navigate && window.location.hash !== hash) window.history.pushState(null, "", hash);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: "start", behavior: "instant" });
      });
      return true;
    };
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(anchor instanceof HTMLAnchorElement) || anchor.target || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || url.search !== window.location.search) return;
      if (reveal(url.hash, true)) event.preventDefault();
    };
    const onHashChange = () => { reveal(window.location.hash, false); };
    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);
    onHashChange();
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  return (
    <details id="sources" className={styles.references} ref={disclosure}>
      <summary id="sources-title">Sources &amp; further reading <span>{sources.length} references</span></summary>
      <div className={styles.referenceBody}>
        <p>Sources support the linked sections. Check current local arrangements before travelling.</p>
        <ul>{sources.map((source) => (
          <li key={source.id} id={`source-${source.id}`} tabIndex={-1}>
            <a href={source.url}>{source.title}</a>
            <span>Accessed {source.accessedAt}</span>
          </li>
        ))}</ul>
      </div>
    </details>
  );
}
