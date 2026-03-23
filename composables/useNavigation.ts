const navItems = [
  { label: 'За нас', href: '/' },
  { label: 'Партньори', href: '/partnyori' },
  { label: 'Контакти', href: '/kontakti' },
];

export function useNavigation() {
  return {
    navItems,
  };
}
