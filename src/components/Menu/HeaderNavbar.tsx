import React, { useEffect } from 'react';
import { Box, Heading, Flex, Button, IconButton } from '@chakra-ui/react';
import Link from 'next/link';
import ProfileMenu from './ProfileMenu';
import Search from '../Search/Search';
import MenuItem from './MenuItem';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

interface HeaderNavbarProps {
  isLoggedIn?: boolean;
}
const HeaderNavbar: React.FC<HeaderNavbarProps> = (props) => {
  const { isLoggedIn = true } = props;
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [show]);

  return (
    <>
      {show && (
        <Box
          position="fixed"
          top="0"
          left="0"
          zIndex="1"
          width="100vw"
          height="100vh"
          opacity="0.5"
          background="gray.500"
        ></Box>
      )}
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        paddingX="1.5rem"
        paddingY="0.5rem"
        color="gray.600"
        borderBottom="2px solid"
        borderTop="2px solid"
        position="sticky"
        top="0"
        zIndex="3"
        borderColor="gray.200"
        background="white"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg">
            <Link href="/" passHref>
              <Button variant="ghost">Neso</Button>
            </Link>
          </Heading>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
          <IconButton
            icon={show ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={`${show ? 'Close menu' : 'Open menu'}`}
          />
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'flex' }}
          width={{ sm: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
        >
          {isLoggedIn && (
            <>
              <Box marginRight="0.1em">
                <MenuItem href="/">Dashboard</MenuItem>
                <MenuItem href="/projects">Projects</MenuItem>
                <MenuItem href="/people">People</MenuItem>
              </Box>
              <Search />
            </>
          )}
        </Box>

        <Box
          display={{ sm: show ? 'block' : 'none', md: 'block' }}
          mt={{ base: 4, md: 0 }}
        >
          <Flex alignItems="center">
            <MenuItem href="/register">Sign Up</MenuItem>
            <MenuItem href="/login">Sign In</MenuItem>
            {isLoggedIn && <ProfileMenu />}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default HeaderNavbar;
