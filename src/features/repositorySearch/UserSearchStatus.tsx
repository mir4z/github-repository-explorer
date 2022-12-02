import { Typography } from '@mui/material';

interface Props {
  isSuccess: boolean;
  isLoading: boolean;
  searchedPhrase: string;
}

export function UserSearchStatus({
  isSuccess,
  isLoading,
  searchedPhrase,
}: Props) {
  if (isSuccess) {
    return (
      <Typography>
        Showing users for <strong>{searchedPhrase}</strong>
      </Typography>
    );
  }
  if (isLoading) {
    return (
      <Typography>
        Searching users for <strong>{searchedPhrase}</strong> phrase
      </Typography>
    );
  }
  return null;
}
