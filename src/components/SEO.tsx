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
}

const SEO = ({
  title = 'Sportify - Вашият Фитнес Партньор',
  description = 'Открийте перфектната фитнес платформа за вашия път към по-добро здраве. Тренировки, упражнения, планиране и още повече.',
  keywords = 'фитнес, тренировки, упражнения, здраве, спорт, фитнес класове, фитнес график, калории, фитнес приложение',
  image = '/og-image.jpg',
  url = 'https://sportify-bulgaria.bg',
  lang = 'bg',
  author = 'Sportify',
  structuredData = {}
}: SEOProps) => {
  const structuredDataString = JSON.stringify(structuredData);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Bulgarian" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="bg_BG" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {structuredDataString}
      </script>
    </Helmet>
  );
};

export default SEO; 