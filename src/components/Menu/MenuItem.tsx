import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MenuItemsProps {
  children: ReactNode;
  href: string;
}
const MenuItem: React.FC<MenuItemsProps> = ({ children, href }) => (
  <Link href={href} passHref>
    <Button variant="ghost">{children}</Button>
  </Link>
);

export default MenuItem;
