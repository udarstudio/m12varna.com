export function useStructuredData() {
  const appConfig = useAppConfig();
  const siteConfig = useSiteConfig();
  const siteUrl = siteConfig.url || 'https://remonti-varna.bg';
  const logoUrl = `${siteUrl}/apple-touch-icon.png`;
  const ids = {
    website: `${siteUrl}/#website`,
    organization: `${siteUrl}/#localbusiness`,
    homepage: `${siteUrl}/#webpage`,
    homepageService: `${siteUrl}/#service`,
    contactPage: `${siteUrl}/kontakti#webpage`,
    partnersPage: `${siteUrl}/partnyori#webpage`,
  };

  const organizationName = appConfig.legalName || appConfig.siteName;
  const address = {
    '@type': 'PostalAddress',
    streetAddress: appConfig.address.streetAddress,
    addressLocality: appConfig.address.addressLocality,
    postalCode: appConfig.address.postalCode,
    addressCountry: appConfig.address.addressCountry,
  };

  const localBusiness = {
    '@type': 'LocalBusiness',
    '@id': ids.organization,
    name: organizationName,
    alternateName: appConfig.siteName,
    url: siteUrl,
    telephone: appConfig.phoneNumberRaw,
    email: appConfig.email,
    image: logoUrl,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
    },
    address,
    areaServed: {
      '@type': 'City',
      name: appConfig.serviceArea.city,
      containedInPlace: {
        '@type': 'Country',
        name: appConfig.serviceArea.country,
      },
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: appConfig.phoneNumberRaw,
        email: appConfig.email,
        contactType: 'customer service',
        areaServed: 'BG',
        availableLanguage: ['bg'],
      },
    ],
    knowsAbout: appConfig.services,
  };

  const website = {
    '@type': 'WebSite',
    '@id': ids.website,
    name: appConfig.siteName,
    url: siteUrl,
    publisher: {
      '@id': ids.organization,
    },
  };

  function createSchemaGraph(nodes: object[]) {
    return {
      '@context': 'https://schema.org',
      '@graph': nodes,
    };
  }

  return {
    ids,
    localBusiness,
    website,
    createSchemaGraph,
  };
}
