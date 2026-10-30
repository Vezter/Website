export type HousingType = {
  size: number;
  homes: number;
  price: string;
  rent: string;
};

export const siteContent = {
  name: 'V\u00c6NGET',
  location: 'Havk\u00e6rv\u00e6nget, Tilst',
  contactEmail: 'webmaster8381@gmail.com',
  navigation: [
    { label: 'Forside', href: '/' },
    { label: 'Om V\u00c6NGET', href: '/about' },
    { label: 'Boliger', href: '/homes' },
    { label: 'F\u00e6llesskab', href: '/community' },
  ],
  housing: [
    { size: 65, homes: 3, price: 'kr. 330.789,-', rent: 'kr. 4.239,-' },
    { size: 75, homes: 3, price: 'kr. 381.680,-', rent: 'kr. 4.738,-' },
    { size: 86, homes: 9, price: 'kr. 437.593,-', rent: 'kr. 5.288,-' },
    { size: 103, homes: 6, price: 'kr. 524.172,-', rent: 'kr. 6.139,-' },
  ] satisfies HousingType[],
  facts: [
    '21 r\u00e6kkehuse med private haver og f\u00e6lleshus.',
    'Trygge rammer for f\u00e6llesskab og hverdag.',
    'Godkendte rammer for vedligehold og forbedringer.',
  ],
} as const;

export type SiteContent = typeof siteContent;
