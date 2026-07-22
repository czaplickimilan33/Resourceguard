import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, ExternalLink } from "lucide-react";
import clsx from "clsx";
import { articles, getArticle } from "@/lib/articles";
import { siteName, siteUrl } from "@/lib/site";
import Badge from "@/components/ui/Badge";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/baza-wiedzy/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      locale: "pl_PL",
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const index = articles.findIndex((a) => a.slug === article.slug);
  const next = articles[(index + 1) % articles.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    inLanguage: "pl-PL",
    author: { "@type": "Organization", name: siteName },
    publisher: { "@type": "Organization", name: siteName, url: siteUrl },
    mainEntityOfPage: `${siteUrl}/baza-wiedzy/${article.slug}`,
  };

  return (
    <article className="mx-auto max-w-3xl px-4 pt-36 pb-20 sm:px-6 sm:pt-44 sm:pb-24">
      <Link
        href="/baza-wiedzy"
        className="inline-flex items-center gap-2 text-sm text-mut transition-colors hover:text-ink"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Baza wiedzy
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <Badge>{article.category}</Badge>
          <span className="inline-flex items-center gap-1.5 text-xs text-mut">
            <Clock className="h-3.5 w-3.5" aria-hidden />
            {article.readingTime} czytania · aktualizacja: {article.updated}
          </span>
        </div>
        <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-mut">{article.intro}</p>
      </header>

      <div className="mt-10 space-y-10">
        {article.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 leading-relaxed text-mut">
                {paragraph}
              </p>
            ))}
            {section.list && (
              <ul className="mt-4 space-y-2.5">
                {section.list.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/8 bg-card p-4 text-sm leading-relaxed text-ink/90"
                  >
                    <span
                      className={clsx(
                        "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent"
                      )}
                    >
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      {/* Źródła */}
      <section className="mt-12 rounded-2xl border border-white/8 bg-card/60 p-6">
        <h2 className="text-sm font-semibold text-ink">Źródła i materiały oficjalne</h2>
        <ul className="mt-3 space-y-2">
          {article.sources.map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mut underline decoration-white/20 underline-offset-2 transition-colors hover:text-accent"
              >
                <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {source.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-6 rounded-2xl border border-warn/20 bg-warn/5 p-5 text-xs leading-relaxed text-mut">
        Ten materiał ma charakter edukacyjny i nie zastępuje porady lekarza,
        psychologa ani służb ratunkowych. W sytuacji bezpośredniego zagrożenia
        zadzwoń pod numer alarmowy 112. Całodobowe telefony wsparcia znajdziesz
        na stronie{" "}
        <Link href="/pomoc-teraz" className="text-ink underline underline-offset-2 hover:text-accent">
          Pomoc teraz
        </Link>
        .
      </p>

      {/* Następny artykuł */}
      <Link
        href={`/baza-wiedzy/${next.slug}`}
        className="group mt-10 flex items-center justify-between gap-4 rounded-2xl border border-white/8 bg-card p-6 transition-colors hover:border-accent/30"
      >
        <div>
          <p className="text-xs text-mut">Czytaj dalej</p>
          <p className="mt-1 font-display text-base font-semibold text-ink">{next.title}</p>
        </div>
        <ArrowRight
          className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      </Link>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </article>
  );
}
