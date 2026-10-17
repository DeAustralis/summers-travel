import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/content";
import { tuscany } from "@/data/tuscany";
import { tuscanyPhotography } from "@/data/tuscany-photography";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import s from "./TuscanyArticle.module.css";

const stops = [
  { title: "Chianti", nights: "Nights 1–2", days: "Days 1 & 2", note: "Greve, Panzano, Radda & Castellina", href: "#day-1" },
  { title: "Montalcino", nights: "Nights 3–4", days: "Days 3 & 4", note: "Hill-town streets & Sant’Antimo", href: "#day-3" },
  { title: "Pienza", nights: "Nights 5–6", days: "Days 5 & 6", note: "San Quirico, Bagno Vignoni & Monticchiello", href: "#day-5" },
  { title: "Montepulciano", nights: "The finish", days: "Day 7", note: "A final walk along the ridge", href: "#day-7" },
];

function ItineraryPhotograph({ day }: { day: number }) {
  const photo = tuscanyPhotography[day];
  if (!photo) return null;
  return <figure className={s.supportingPhoto}>
    <Image src={photo.src} width={photo.width} height={photo.height} alt={photo.alt}
      sizes="(max-width: 540px) calc(100vw - 48px), (max-width: 800px) calc(100vw - 48px), 770px"
      loading="lazy"/>
    <figcaption><span>{photo.caption}</span><span>{photo.credit} / {photo.licenseUrl ? <a href={photo.licenseUrl}>{photo.license}</a> : photo.license} (via <a href={photo.source}>Wikimedia Commons</a>) · resized &amp; converted to WebP</span></figcaption>
  </figure>;
}

export function TuscanyArticle({ article: a }: { article: Article }) {
  return <div className={s.story}>
    <header className={s.heading}>
      <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Italy",href:"/destinations/italy"},{label:"Tuscany road trip"}]}/>
      <div className={s.kicker}>The Summers itinerary <span>Italy / Tuscany</span></div>
      <h1>The Perfect Tuscany <em>Road Trip</em></h1>
      <p className={s.standfirst}>{a.standfirst}</p>
      <div className={s.meta}><span>7 days · 6 nights · 3 bases</span><span>{a.readingTime} min read</span><span>Updated <time dateTime={a.updatedAt}>17 October 2026</time></span></div>
    </header>
    <figure className={s.hero}>
      <Image src={a.heroImage} alt="Morning mist and soft sunlight across the cultivated hills and cypress trees of Val d’Orcia, Tuscany" width={1798} height={1200} sizes="(max-width: 1400px) 100vw, 1400px" preload/>
      <figcaption><span>First light in Val d’Orcia</span><span>Giuseppe Paris / <a href="https://commons.wikimedia.org/wiki/File:Val_D_Orcia_Sunrise_(151505625).jpeg">Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a> · cropped to fit</span></figcaption>
    </figure>
    <section id="route" className={s.route} aria-labelledby="route-title">
      <div className={s.routeIntro}><span className={s.label}>The week at a glance</span><h2 id="route-title">Three bases.<br/><em>Room to linger.</em></h2><p>Begin on the Florence side of Chianti. Travel south, then finish in Montepulciano.</p><a href="#day-1" className={s.routeLink}>Begin the itinerary <span aria-hidden="true">↓</span></a></div>
      <div className={s.routeDiagram}><p className={s.diagramLabel}>Florence side <span aria-hidden="true">↓</span></p><ol>{stops.map((stop,i)=><li key={stop.title}><a href={stop.href}><span className={s.stopNumber} aria-hidden="true">0{i+1}</span><span><span className={s.stopDays}>{stop.days} · {stop.nights}</span><strong>{stop.title}</strong><span className={s.stopNote}>{stop.note}</span></span></a></li>)}</ol><p className={s.diagramFoot}>Original schematic · not to scale or for navigation.<br/>Onward travel and any return to Florence are additional arrangements.</p></div>
    </section>
    <div className={s.readingLayout}>
      <nav className={s.contents} aria-label="In this article"><span className={s.label}>In this story</span><a href="#introduction">A slower week</a><a href="#route">Route & overnight bases</a>{tuscany.days.map((d,i)=><a key={d.title} href={`#day-${i+1}`}><span>0{i+1}</span>{["Chianti","Radda & Castellina","Montalcino","Sant’Antimo","Gardens & thermal water","Pienza","Montepulciano"][i]}</a>)}<a href="#practical">Practical details</a><a href="#references">Sources & planning</a></nav>
      <article className={s.body} aria-label={a.title}>
        <div id="introduction" className={s.intro}>{tuscany.intro.map(p=><p key={p}>{p}</p>)}</div>
        {tuscany.days.map((day,i)=><section id={`day-${i+1}`} key={day.title} className={s.day}>
          <div className={s.dayTop}><span className={s.dayNumber}>0{i+1}</span><span className={s.label}>Day {i+1}<span className={s.places}>{day.places}</span></span></div>
          <h2>{day.title}</h2>{day.paragraphs.map((p,index)=><div key={p}><p>{p}</p>{index===0 ? <ItineraryPhotograph day={i+1}/> : null}</div>)}<p className={s.base}><span aria-hidden="true">↳</span> {day.base}</p>
        </section>)}
        <section id="practical" className={s.practical}><span className={s.label}>Before you go</span><h2>{tuscany.practicalTitle}</h2>{tuscany.practical.map(p=><p key={p}>{p}</p>)}</section>
        <section id="references" className={s.references}><span className={s.label}>Sources & planning</span><h2>Keep the details current</h2><p>This proposed itinerary draws on Visit Tuscany and UNESCO references checked on 17 October 2026. Check current opening hours, access, road conditions and appointments before travelling. “Quieter roads” describes the aim of the journey; traffic varies.</p><ul>
          <li><a href="https://www.visittuscany.com/en/itineraries/a-car-tour-along-the-chiantigiana-road/">The Chiantigiana route</a> · <a href="https://www.visittuscany.com/en/towns-and-villages/montalcino/">Montalcino</a> · <a href="https://www.visittuscany.com/en/towns-and-villages/montepulciano/">Montepulciano</a></li>
          <li><a href="https://whc.unesco.org/en/list/1026/">UNESCO: Val d’Orcia</a> · <a href="https://whc.unesco.org/en/list/789/">UNESCO: Pienza</a> · <a href="https://www.visittuscany.com/en/towns-and-villages/pienza/">Pienza food & culture</a></li>
          <li><a href="https://www.visittuscany.com/en/attractions/abbey-of-santantimo/">Sant’Antimo architecture</a> · <a href="https://www.antimo.it/">Abbey visitor information</a></li>
          <li><a href="https://www.visittuscany.com/it/attrazioni/gli-horti-leonini-di-san-quirico-dorcia/">Horti Leonini</a> · <a href="https://www.visittuscany.com/en/ideas/bagno-vignoni-hot-springs-in-val-dorcia/">Bagno Vignoni</a> · <a href="https://www.visittuscany.com/en/towns-and-villages/monticchiello/">Monticchiello</a></li>
          <li><a href="https://www.visittuscany.com/en/ideas/moving-around-tuscany-by-car/">Driving in Tuscany</a> · <a href="https://static-www.comune.pienza.si.it/wp-content/uploads/2025/03/26136_DISCIPLINARE_DEFINITIVO_1744023287.pdf">Pienza ZTL rules (PDF, Italian)</a></li>
          <li><a href="https://www.visittuscany.com/en/ideas/whats-the-best-time-of-the-year-to-visit-tuscany/">When to visit</a> · <a href="https://www.visittuscany.com/en/ideas/the-best-landscapes-for-your-autumn-in-tuscany/">Tuscany in autumn</a></li>
        </ul></section>
        <div className={s.endmark} aria-hidden="true">S.</div><div className={s.endLinks}><Link href="/road-trips">Explore more road trips →</Link><a href="#route">Back to the route ↑</a></div>
      </article>
    </div>
    <JsonLd data={{"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.seoDescription,image:`https://www.summers.travel${a.heroImage}`,dateModified:a.updatedAt,publisher:{"@type":"Organization",name:"Summers Travel",url:"https://www.summers.travel"},mainEntityOfPage:a.canonicalUrl,articleSection:"Road Trips",inLanguage:"en",wordCount:1275}}/>
  </div>;
}
