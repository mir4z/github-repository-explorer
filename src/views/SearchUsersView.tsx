import { Box, Typography } from '@mui/material';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '../components/ui/ErrorFallback';
import { SearchForm } from '../components/ui/SearchForm';
import { UserAccordionList } from '../features/repositorySearch/UserAccordionList';

export function SearchUsersView() {
  const [searchUser, setSearchUser] = useState('');

  const onSearchUser = (searchedUserPhrase: string) => {
    setSearchUser(searchedUserPhrase);
  };

  return (
    <Box display="flex" flexDirection="column" gap="1rem" minWidth="400px">
      <SearchForm onSubmit={onSearchUser} isDisabled={false} />

      <Suspense fallback={<Typography>Loading...</Typography>}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <UserAccordionList searchedPhrase={searchUser} />
        </ErrorBoundary>
      </Suspense>
    </Box>
  );
}
