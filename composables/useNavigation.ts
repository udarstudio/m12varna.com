const navItems = [
  { label: 'За нас', href: '/' },
  { label: 'Галерия', href: '/galeria' },
  { label: 'Партньори', href: '/partnyori' },
  { label: 'Контакти', href: '/kontakti' },
];

export function useNavigation() {
  return {
    navItems,
  };
}
