import {
  Menu,
  MenuButton,
  MenuGroup,
  MenuDivider,
  MenuList,
  Avatar,
  Box,
  MenuItem,
} from '@chakra-ui/react';
import Link from 'next/link';

const ProfileMenu = () => {
  return (
    <Box marginLeft="1em">
      <Menu>
        <MenuButton>
          <Avatar name="Benjamin Meier" size="sm" />
        </MenuButton>
        <MenuList color="gray.600">
          <MenuGroup title="Profile">
            <Link href="/people/me" passHref>
              <MenuItem>My Account</MenuItem>
            </Link>
            <Link href="/settings" passHref>
              <MenuItem>Settings </MenuItem>
            </Link>
          </MenuGroup>
          <MenuDivider />
          <Link href="/logout" passHref>
            <MenuItem>Log Out</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
