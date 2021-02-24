import { Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Search = () => {
  return (
    <InputGroup width="200px" outline="none">
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.400" />}
      />
      <Input placeholder="Search" />
    </InputGroup>
  );
};

export default Search;
