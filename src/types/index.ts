export type UserProps = {
  avatar_url: string;
  bio: string;
  blog: string;
  company: null
  followers: number;
  following: number;
  created_at: string;
  location: string;
  login: string;
  name: string;
  email: null
  id: number;
  public_gists: number;
  public_repos: number;
  updated_at: string;
  url: string;
}

export type RepositoryProps = {
  id: number;
  fork: boolean;
  html_url: string;
  name: string;
  description: string;
  language: string;
  stargazers_count: string;
  forks: string;
  license: Record<string, any>;
  updated_at: string;
}
