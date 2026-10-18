import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ReviewedArticle } from "@/components/editorial/ReviewedArticle";
import edition from "@/data/staging/tuscany-reviewed.json";

// Request-time gate: this test edition must never become a production article.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: `${edition.draft.title} — staging review`,
  description: edition.draft.standfirst,
  alternates: { canonical: null },
  robots: { index: false, follow: false, noarchive: true },
  openGraph: { title: edition.draft.title, type: "website" },
};

export default function Page() {
  if (process.env.VERCEL_ENV !== "preview" && process.env.NODE_ENV !== "development") {
    notFound();
  }
  return <ReviewedArticle edition={edition} />;
}
