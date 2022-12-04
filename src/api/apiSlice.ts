import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GithubRepository, GithubUser } from '../models/github';

const BASE_URL = `https://api.github.com`;

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<GithubUser[], string>({
      query: (username: string) =>
        `/search/users?per_page=5&page=1&q=${username}`,
      transformResponse: (response: { items: GithubUser[] }) => response.items,
    }),
    getRepositories: builder.query<GithubRepository[], string>({
      query: (username) => `/users/${username}/repos?per_page=3&sort=pushed`,
    }),
  }),
});

export const { useGetUsersQuery, useGetRepositoriesQuery } = apiSlice;
