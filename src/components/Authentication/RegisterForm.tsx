import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  useToast,
  InputGroup,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import ComparePassword from '../Password/ComparePassword';

const RegisterForm = () => {
  const toast = useToast();
  const [state, setState] = useState({
    email: '',
    password: '',
    password_repeat: '',
  });

  const arePasswordsEqual = () => {
    const { password, password_repeat } = state;
    return password === password_repeat;
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password, password_repeat } = state;
    if (arePasswordsEqual()) {
      console.log(
        'Email: ',
        email,
        ' Password: ',
        password,
        ' Password_Repeat: ',
        password_repeat
      );
      console.log('Register! Send Request to API!');
    } else {
      toast({
        title: 'Passwords are not equal.',
        description: 'Please check that your password fields are equal.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Box my={4} textAlign="left">
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
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
        <ComparePassword handleChange={handleChange} />
        <Button width="full" mt={4} type="submit">
          Sign Up
        </Button>
      </form>
    </Box>
  );
};

export default RegisterForm;
