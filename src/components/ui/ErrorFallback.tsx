import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface Props {
  error: { message: string };
  resetErrorBoundary: (...args: any) => void | undefined;
}

export function ErrorFallback({ error, resetErrorBoundary }: Props) {
  const resetHandler = resetErrorBoundary ? (
    <Button type="button" onClick={resetErrorBoundary}>
      Try again
    </Button>
  ) : null;

  return (
    <div role="alert">
      <Typography>Something went wrong:</Typography>
      <pre>{error.message}</pre>
      {resetHandler}
    </div>
  );
}
