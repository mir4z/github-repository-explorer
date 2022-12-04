import { Box } from '@mui/material';
import { useState } from 'react';
import { SearchForm } from '../components/ui/SearchForm';
import { UserAccordionList } from '../features/repositorySearch/UserAccordionList';

export function SearchUsersView() {
  const [searchUser, setSearchUser] = useState('');

  const onSearchUser = (searchedUserPhrase: string) => {
    setSearchUser(searchedUserPhrase);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="1rem"
      sx={{ width: { xs: '80%', sm: '70%', md: '400px' } }}
    >
      <SearchForm onSubmit={onSearchUser} isDisabled={false} />
      <UserAccordionList searchedPhrase={searchUser} />
    </Box>
  );
}
