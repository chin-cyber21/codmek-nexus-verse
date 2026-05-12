import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  canonical?: string;
  ogUrl?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SITE_URL = "https://codmek.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

const SEO = ({
  title,
  description,
  path,
  keywords,
  canonical,
  ogUrl,
  ogImage,
  jsonLd,
}: SEOProps) => {
  const resolvedUrl = canonical ?? (path ? `${SITE_URL}${path}` : SITE_URL);
  const resolvedOgUrl = ogUrl ?? resolvedUrl;
  const resolvedOgImage = ogImage
    ? ogImage.startsWith("http")
      ? ogImage
      : `${SITE_URL}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`
    : DEFAULT_OG_IMAGE;
  const fullTitle =
    path === "/" || canonical === SITE_URL
      ? title
      : `${title} | Codmek Softech`;

  const jsonLdArray = jsonLd
    ? Array.isArray(jsonLd) ? jsonLd : [jsonLd]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={resolvedUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={resolvedOgUrl} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Codmek Softech" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />
      <meta name="twitter:site" content="@CodmekSoftech" />

      {/* JSON-LD Structured Data */}
      {jsonLdArray.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
