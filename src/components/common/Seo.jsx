/**
 * React 19 supports rendering document metadata directly in components — it
 * automatically hoists <title>, <meta>, <link> to <head>. No external library needed.
 */
export default function Seo({ title, description, path = '/' }) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://srirajaganapathilogistics.example.com';
  const fullTitle = title
    ? `${title} · Sri Rajaganapathi Logistics`
    : 'Sri Rajaganapathi Logistics';
  const url = `${siteUrl}${path}`;

  return (
    <>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={url} />
    </>
  );
}
