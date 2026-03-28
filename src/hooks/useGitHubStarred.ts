import { useState, useEffect } from "react";
import axios from "axios";

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  fork: boolean;
  visibility: string;
}

interface UseGitHubStarredReturn {
  starred: GitHubRepo[];
  ownRepos: GitHubRepo[];
  loading: boolean;
  error: string | null;
}

const GITHUB_USERNAME = "Prakhar4749";

export function useGitHubStarred(): UseGitHubStarredReturn {
  const [starred, setStarred] = useState<GitHubRepo[]>([]);
  const [ownRepos, setOwnRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [starredRes, reposRes] = await Promise.all([
          axios.get<GitHubRepo[]>(
            `https://api.github.com/users/${GITHUB_USERNAME}/starred?per_page=30&sort=created`,
            { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
          ),
          axios.get<GitHubRepo[]>(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=30&sort=updated&type=owner`,
            { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
          ),
        ]);
        setStarred(starredRes.data);
        setOwnRepos(reposRes.data.filter((r) => !r.fork));
      } catch (err: any) {
        setError(err.message || "Failed to fetch GitHub data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { starred, ownRepos, loading, error };
}
