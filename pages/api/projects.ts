import type { NextApiRequest, NextApiResponse } from 'next';

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

// Replace with actual data fetching logic
const fetchProjects = async (): Promise<Project[]> => {
  // Dummy data for demonstration
  return [
    { id: '1', name: 'Innovative Product X', description: 'A revolutionary new product in tech.', fundingGoal: 50000, amountRaised: 30000, fundingProgress: 60, timeRemaining: '30 days', numberOfBackers: 150 },
    { id: '2', name: 'Green Energy Y', description: 'Sustainable energy solution.', fundingGoal: 100000, amountRaised: 50000, fundingProgress: 50, timeRemaining: '60 days', numberOfBackers: 200 },
  ];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const projects = await fetchProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
