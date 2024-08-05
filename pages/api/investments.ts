import type { NextApiRequest, NextApiResponse } from 'next';

interface Investment {
  id: string;
  projectName: string;
  amountInvested: number;
  date: string;
  returnStatus: string;
}

// Replace with actual data fetching logic
const fetchInvestments = async (): Promise<Investment[]> => {
  // Dummy data for demonstration
  return [
    { id: '1', projectName: 'Tech Startup A', amountInvested: 1000, date: '2024-08-01', returnStatus: 'Pending' },
    { id: '2', projectName: 'Health Initiative B', amountInvested: 5000, date: '2024-08-02', returnStatus: 'Successful' },
  ];
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const investments = await fetchInvestments();
    res.status(200).json(investments);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
