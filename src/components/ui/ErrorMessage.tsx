import Typography from '@mui/material/Typography';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { isErrorWithData, isErrorWithMessage } from '../../util/error';

interface Props {
  error: FetchBaseQueryError | SerializedError;
}

export function ErrorMessage({ error }: Props) {
  let message;

  if (isErrorWithMessage(error)) message = error.message;
  else if (isErrorWithData(error)) message = error.data.message;
  else {
    message = 'There was an unexpected error';
  }

  return (
    <div role="alert">
      <Typography>Something went wrong:</Typography>
      <Typography color="red">{message}</Typography>
    </div>
  );
}
