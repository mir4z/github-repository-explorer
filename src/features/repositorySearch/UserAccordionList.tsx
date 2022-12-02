import { GithubUser } from '../../models/github';
import { UserAccordion } from './UserAccordion';

interface Props {
  users: GithubUser[];
}

export function UserAccordionList({ users }: Props) {
  return (
    <div>
      {users.map((user) => (
        <UserAccordion key={user.id} user={user} />
      ))}
    </div>
  );
}
