import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useGetUsersQuery } from '../../api/apiSlice';
import { ErrorMessage } from '../../components/ui/ErrorMessage';
import { UserAccordion } from './UserAccordion';

interface Props {
  searchedPhrase: string;
}

export function UserAccordionList({ searchedPhrase }: Props) {
  const {
    error,
    isError,
    data: users,
    isSuccess,
    isFetching,
  } = useGetUsersQuery(searchedPhrase, {
    skip: !searchedPhrase || searchedPhrase.length === 0,
  });

  const noData = (isSuccess && !users) || users?.length === 0;

  if (isError) return <ErrorMessage error={error} />;

  if (isFetching) return <Typography>Loading...</Typography>;

  if (noData)
    return (
      <Typography>
        There were no users found matching <strong>{searchedPhrase}</strong>{' '}
        phrase.
      </Typography>
    );
  return (
    <Box>
      {users?.map((user) => (
        <UserAccordion key={user.id} user={user} />
      ))}
    </Box>
  );
}
