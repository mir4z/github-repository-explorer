import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useSearchUsers } from '../../api/useSearchUsers';
import { UserAccordion } from './UserAccordion';

interface Props {
  searchedPhrase: string;
}

export function UserAccordionList({ searchedPhrase }: Props) {
  const { isFetched, data: users } = useSearchUsers(searchedPhrase);

  const noData = (isFetched && !users) || users?.length === 0;

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
