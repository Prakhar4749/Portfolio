import { Helmet } from "react-helmet-async";

interface PageSEOProps {
  title?: string;
  description?: string;
  path?: string;
}

const BASE_URL = "https://prakhar4749.vercel.app"; // Update with actual domain
const DEFAULT_TITLE = "Prakhar | Full Stack Developer";
const DEFAULT_DESC = "Full Stack Developer specializing in React, TypeScript, and modern web technologies. View my projects, skills, and get in touch.";
const OG_IMAGE = `${BASE_URL}/og-image.png`; // Add og-image.png to public/ folder

export function PageSEO({ title, description, path = "/" }: PageSEOProps) {
  const fullTitle = title ? `${title} | Prakhar` : DEFAULT_TITLE;
  const desc = description || DEFAULT_DESC;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* OpenGraph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {/* Extra */}
      <meta name="theme-color" content="#00F5FF" />
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
}
