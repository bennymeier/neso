import { Button, Flex, Box } from '@chakra-ui/react';
import GitHub from '../SVG/GitHub';
import GitLab from '../SVG/GitLab';
import Google from '../SVG/Google';

const SocialLogins = () => {
  return (
    <>
      <Box mt="5">
        <Flex justifyContent="space-between">
          <Button color="#24292e" leftIcon={<GitHub />}>
            GitHub
          </Button>
          <Button color="#4285F4" leftIcon={<Google />}>
            Google
          </Button>
          <Button color="#fc6d26" leftIcon={<GitLab />}>
            GitLab
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default SocialLogins;
