import { useState, useEffect } from 'react';

interface Project {
  id: string;
  name: string;
  description: string;
  fundingGoal: number;
  amountRaised: number;
  fundingProgress: number;
  timeRemaining: string;
  numberOfBackers: number;
}

const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Project[] = await response.json();
        setProjects(data);
      } catch (error) {
        setError('Failed to fetch projects.');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useProjects;
