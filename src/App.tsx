import { Box } from '@mui/material';
import { useState } from 'react';
import { useSearchUsers } from './api/useSearchUsers';
import './App.css';
import { SearchForm } from './components/ui/SearchForm';
import { NoUserDataMessage } from './features/repositorySearch/NoUserDataMessage';
import { UserSearchStatus } from './features/repositorySearch/UserSearchStatus';
import { UserAccordionList } from './features/repositorySearch/UserAccordionList';

export function App() {
  const [search, setSearch] = useState('');
  const {
    isSuccess,
    isFetching: isLoadingData,
    isFetched,
    error,
    data: users,
  } = useSearchUsers(search);

  const onSearchUser = (searchedUserPhrase: string) => {
    setSearch(searchedUserPhrase);
  };

  const foundUsers = isFetched && !!users && !!users.length;

  const noDataMessage = (
    <NoUserDataMessage
      error={error}
      isLoading={isLoadingData}
      isFetched={isFetched}
      data={users}
      searchedPhrase={search}
    />
  );

  return (
    <div className="App">
      <Box display="flex" flexDirection="column" gap="1rem" minWidth="400px">
        <SearchForm onSubmit={onSearchUser} isDisabled={isLoadingData} />
        <UserSearchStatus
          isLoading={isLoadingData}
          isSuccess={isSuccess}
          searchedPhrase={search}
        />
        <Box>
          {foundUsers ? <UserAccordionList users={users} /> : noDataMessage}
        </Box>
      </Box>
    </div>
  );
}
