import { Box, Button, TextField } from '@mui/material';
import { useState } from 'react';

interface Props {
  onSubmit: (args: string) => void;
  isDisabled: boolean;
}

export function SearchForm({ onSubmit, isDisabled }: Props) {
  const [search, setSearch] = useState('');
  const onSearchUser = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.currentTarget;
    setSearch(value);
  };

  const isButtonDisabled = isDisabled || search.trim().length === 0;

  return (
    <Box display="flex" flexDirection="column" gap="1rem">
      <TextField
        value={search}
        onChange={onSearchUser}
        id="outlined-search"
        label="Search users"
        type="search"
      />
      <Button
        disabled={isButtonDisabled}
        onClick={() => onSubmit(search)}
        variant="contained"
      >
        Search Users
      </Button>
    </Box>
  );
}
