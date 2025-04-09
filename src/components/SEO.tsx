import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  lang?: string;
  author?: string;
  structuredData?: object;
  article?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEO = ({
  title = 'Sportify - Вашият Фитнес Партньор в България | Персонални Тренировки',
  description = 'Sportify е вашият персонален фитнес партньор в България. Персонализирани тренировки, професионални инструктори и модерни съоръжения. Започнете своето фитнес пътуване с нас в Сливен.',
  keywords = 'фитнес, тренировки, упражнения, здраве, спорт, фитнес класове, фитнес график, калории, фитнес приложение, фитнес в Сливен, фитнес тренировки България, персонален треньор',
  image = '/og-image.jpg',
  url = 'https://sportify-bulgaria.com',
  lang = 'bg',
  author = 'Sportify',
  structuredData = {},
  article = false,
  publishedTime = '',
  modifiedTime = '',
  section = '',
  tags = []
}: SEOProps) => {
  const structuredDataString = JSON.stringify(structuredData);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : url;
  const canonicalUrl = url + (typeof window !== 'undefined' ? window.location.pathname : '');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="Bulgarian" />
      <meta name="geo.region" content="BG" />
      <meta name="geo.placename" content="Сливен" />
      <meta name="geo.position" content="42.6977;23.3219" />
      <meta name="ICBM" content="42.6977, 23.3219" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="bg_BG" />
      <meta property="og:site_name" content="Sportify" />
      
      {/* Additional article tags */}
      {article && (
        <>
          <meta property="article:published_time" content={publishedTime} />
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          <meta property="article:section" content={section} />
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image.startsWith('http') ? image : `${url}${image}`} />
      <meta name="twitter:site" content="@sportifybulgaria" />
      <meta name="twitter:creator" content="@sportifybulgaria" />
      
      {/* Security Headers */}
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <meta http-equiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta http-equiv="X-Content-Type-Options" content="nosniff" />
      <meta http-equiv="Referrer-Policy" content="no-referrer-when-downgrade" />
      <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(self)" />
      
      {/* Performance Hints */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#0B1120" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {structuredDataString}
      </script>
    </Helmet>
  );
};

export default SEO; 