import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'WebSite' | 'Organization' | 'LocalBusiness' | 'FitnessCenter';
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'WebSite':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Sportify',
          url: window.location.origin,
          description: 'Вашият персонален фитнес партньор',
          inLanguage: 'bg-BG',
          ...data
        };
      case 'Organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Sportify',
          url: window.location.origin,
          logo: `${window.location.origin}/logo.png`,
          sameAs: [
            'https://www.facebook.com/fashion.dessiree/',
            'https://www.instagram.com/sportify.bulgaria/',
          ],
          ...data
        };
      case 'LocalBusiness':
        return {
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Sportify',
          image: `${window.location.origin}/logo.png`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'бул. Стефан Караджа №14',
            addressLocality: 'Сливен',
            postalCode: '8800',
            addressCountry: 'BG'
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: '42.6977',
            longitude: '23.3219'
          },
          ...data
        };
      case 'FitnessCenter':
        return {
          '@context': 'https://schema.org',
          '@type': 'FitnessCenter',
          name: 'Sportify',
          description: 'Вашият персонален фитнес партньор',
          image: `${window.location.origin}/logo.png`,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'бул. Стефан Караджа №14',
            addressLocality: 'Сливен',
            postalCode: '8800',
            addressCountry: 'BG'
          },
          ...data
        };
      default:
        return data;
    }
  };

  const structuredData = getStructuredData();

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;  