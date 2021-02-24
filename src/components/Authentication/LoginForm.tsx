import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import Password from '../Password/Password';

const LoginForm = () => {
  const [state, setState] = useState({ email: '', password: '' });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = state;
    console.log('Email: ', email, ' Password: ', password);
    console.log('Login! Send Request to API!');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Box my={4} textAlign="left" width="full">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired width="full">
          <FormLabel>Email</FormLabel>
          <InputGroup>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="test@test.com"
              onChange={handleChange}
            />
          </InputGroup>
        </FormControl>
        <Password handleChange={handleChange} />
        <Button width="full" mt={4} type="submit">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
