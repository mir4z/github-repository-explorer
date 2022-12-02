import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GithubRepository } from '../models/github';
import { get } from './api';
import {  USERS_URL } from './constants';

export const REPOSITORY_CACHE_KEY = 'repositories';

const getRepositories = (username: string) => {
  return get<GithubRepository[]>(
    `${USERS_URL}/${username}/repos?per_page=3&sort=pushed`
    // `${MOCK_REPOSITORIES_ENDPOINT}/?owner.login=${username}`
  );
};

export const useSearchRepositories = (username: string) => {
  const clientQuery = useQueryClient();
  return useQuery<GithubRepository[], { message: string }>({
    queryKey: [REPOSITORY_CACHE_KEY, username],
    queryFn: () => {
      const cachedData = clientQuery.getQueryData<
        GithubRepository[] | undefined
      >([REPOSITORY_CACHE_KEY, username]);
      if (cachedData) return cachedData;
      return getRepositories(username);
    },
    retry: false,
    enabled: false,
    staleTime: Infinity,
  });
};
