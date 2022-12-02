import Typography from '@mui/material/Typography';
import { GithubUser } from '../../models/github';

interface Props {
  error: { message: string } | null;
  isLoading: boolean;
  isFetched: boolean;
  data: GithubUser[] | undefined;
  searchedPhrase: string;
}

export function NoUserDataMessage({
  data,
  searchedPhrase,
  isLoading,
  isFetched,
  error,
}: Props) {
  const noData = !data || data?.length === 0;

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error)
    return <Typography>An error has occurred: {error.message}</Typography>;
  if (isFetched && noData)
    return (
      <Typography>
        There were no users found matching <strong>{searchedPhrase}</strong>{' '}
        phrase.
      </Typography>
    );
  return null;
}
