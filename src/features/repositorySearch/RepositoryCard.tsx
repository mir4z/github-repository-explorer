import { Box, Card, CardContent, Typography } from '@mui/material';
import StarSharpIcon from '@mui/icons-material/StarSharp';
import { GithubRepository } from '../../models/github';

interface Props {
  repository: GithubRepository;
}

export function RepositoryCard({ repository }: Props) {
  return (
    <Card
      onClick={() => {
        window.open(repository.html_url, '_blank');
      }}
      sx={{ minWidth: 275, maxWidth: 400, margin: '1rem 0', cursor: 'pointer' }}
    >
      <Box>
        <CardContent>
          <Box display="flex" justifyContent="space-between">
            <Typography>{repository.name}</Typography>
            <Box display="flex" gap="1rem">
              <Typography sx={{ mb: 1.5 }}>
                {repository.stargazers_count}
              </Typography>
              <StarSharpIcon />
            </Box>
          </Box>
          <Box display="flex" justifyContent="flex-start">
            <Typography
              sx={{ mb: 1.5 }}
              color="text.secondary"
              textAlign="start"
            >
              {repository.description}
            </Typography>
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
}
