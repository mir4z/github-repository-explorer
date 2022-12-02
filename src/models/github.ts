export interface GithubUser {
  id: number;
  login: string;
  avatar_url: string;
  repos_url: string;
}

export interface GithubRepository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
}
