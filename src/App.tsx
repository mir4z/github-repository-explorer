import { useState } from 'react';
import { useSearchUsers } from './api/useSearchUsers';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const {
    isLoading,
    isStale,
    error,
    data: githubUsers,
    refetch,
  } = useSearchUsers(search);

  if (!isStale && isLoading) return <>Loading...</>;

  if (error) return <>`An error has occurred: ${error.message}`</>;

  const onSearchUser = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearch(value);
  };
  return (
    <div className="App">
      <div>
        <input type="text" value={search} onChange={onSearchUser} />
        <button onClick={() => refetch()}>search</button>
        {githubUsers?.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user?.login}</h1>
              <p>{user?.repos_url}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
