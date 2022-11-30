import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GithubUser } from '../models/github';
import { get } from './api';
import { SEARCH_URL } from './constants';

const USERS_CACHE_KEY = 'users';

const getUsers = (username: string) => {
  return get<{ items: GithubUser[] }>(
    `${SEARCH_URL}/users?per_page=5&page=1&q=${username}`
  ).then((res) => {
    return res.items;
  });
};

export const useSearchUsers = (username: string) => {
  const clientQuery = useQueryClient();
  return useQuery<GithubUser[], { message: string }>({
    queryFn: () => {
      const cachedData = clientQuery.getQueryData<GithubUser[] | undefined>([
        USERS_CACHE_KEY,
        username,
      ]);
      if (cachedData) return cachedData;
      return getUsers(username);
    },
    onSuccess: (data) =>
      clientQuery.setQueryData([USERS_CACHE_KEY, username], data),
    retry: false,
    staleTime: Infinity,
    enabled: false,
  });
};
