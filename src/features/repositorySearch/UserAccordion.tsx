import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useId, useState } from 'react';
import { useSearchRepositories } from '../../api/useSearchRepositories';
import { GithubUser } from '../../models/github';
import { RepositoryCard } from './RepositoryCard';

interface Props {
  user: GithubUser;
}

function RepositoryLoader() {
  return <Typography sx={{ margin: '1rem 0' }}>Loading...</Typography>;
}

export function UserAccordion({ user }: Props) {
  const [expanded, setExpanded] = useState(false);
  const accordionId = useId();

  const {
    refetch,
    data: repositories,
    isFetching,
  } = useSearchRepositories(user.login);

  const hasNoRepositories = !repositories || repositories?.length === 0;

  const onToggleAccordion = () => {
    const toggledAccordionState = !expanded;
    if (toggledAccordionState) refetch();
    setExpanded(toggledAccordionState);
  };

  const displayRepositories = () => {
    if (hasNoRepositories)
      return (
        <Typography sx={{ margin: '1rem 0' }}>
          <strong>{user.login}</strong> has no repositories
        </Typography>
      );
    return repositories?.map((repo) => (
      <RepositoryCard key={repo.id} repository={repo} />
    ));
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={onToggleAccordion}
      sx={{ boxShadow: 'none' }}
    >
      <AccordionSummary
        onMouseEnter={() => refetch()}
        sx={{ backgroundColor: '#add8e6' }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${accordionId}`}
        id={`${accordionId}`}
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {user.login}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ margin: 0, padding: 0, boxShadow: 'none' }}>
        {isFetching ? <RepositoryLoader /> : displayRepositories()}
      </AccordionDetails>
    </Accordion>
  );
}
