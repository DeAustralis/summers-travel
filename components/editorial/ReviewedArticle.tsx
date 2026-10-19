import Image from "next/image";
import { ArticleSources } from "./ArticleSources";
import styles from "./ReviewedArticle.module.css";

type Photo = {
  src: string; width: number; height: number; alt: string; caption: string;
  credit: string; source: string; license: string; licenseUrl: string;
  changes: string; placement: string;
};
type Edition = {
  reviewedOn: string;
  draft: { title: string; standfirst: string; sections: { heading: string; paragraphs: string[]; sourceIds: string[] }[] };
  sources: { id: string; title: string; url: string; accessedAt: string }[];
  images: Photo[];
};
function Photograph({ photo, hero = false }: { photo: Photo; hero?: boolean }) {
  return (
    <figure className={hero ? styles.hero : styles.photo}>
      <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt}
        sizes={hero ? "(max-width: 1200px) 100vw, 1200px" : "(max-width: 760px) 100vw, 760px"}
        preload={hero} />
      <figcaption>
        <span>{photo.caption}</span>
        <span>Photo: <a href={photo.source}>{photo.credit}</a> · <a href={photo.licenseUrl}>{photo.license}</a> · {photo.changes}.</span>
      </figcaption>
    </figure>
  );
}
export function ReviewedArticle({ edition }: { edition: Edition }) {
  const { draft, images, sources } = edition;
  const hero = images.find((image) => image.placement === "hero");
  const sourceMap = new Map(sources.map((source) => [source.id, source]));
  return (
    <article className={styles.story} aria-labelledby="review-title">
      <div className={styles.notice}>
        <strong>Protected staging preview</strong>
        <span>Human review pending · Not published · No author byline</span>
      </div>
      <header className={styles.heading}>
        <p className={styles.kicker}>Tuscany / A seven-day framework</p>
        <h1 id="review-title">{draft.title}</h1>
        <p className={styles.standfirst} data-reviewed-standfirst>{draft.standfirst}</p>
        <p className={styles.edition}>Assisted editorial revision · Review edition 18 October 2026</p>
      </header>
      {hero ? <Photograph photo={hero} hero /> : null}
      <div className={styles.reading}>
        <nav className={styles.contents} aria-label="Article contents">
          <p>In this story</p>
          <ol>{draft.sections.map((section, index) => (
            <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>
          ))}</ol>
          <a href="#sources" className={styles.sourcesLink}>Sources</a>
        </nav>
        <div className={styles.body}>
          {draft.sections.map((section, index) => (
            <section key={section.heading} id={`section-${index + 1}`} className={styles.section} data-reviewed-section>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph} data-reviewed-paragraph>{paragraph}</p>)}
              <div className={styles.citations} aria-label={`Sources for ${section.heading}`}>
                <span>Sources</span>
                <ul>{section.sourceIds.map((id) => {
                  const source = sourceMap.get(id);
                  return source ? <li key={id}><a href={`#source-${id}`}>{source.title}</a></li> : null;
                })}</ul>
              </div>
              {images.filter((image) => image.placement === section.heading).map((photo) => <Photograph key={photo.src} photo={photo} />)}
            </section>
          ))}
          <ArticleSources sources={sources} />
          <footer className={styles.endnote}>End of staging review edition · Human approval pending</footer>
        </div>
      </div>
    </article>
  );
}
