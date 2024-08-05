import type { NextApiRequest, NextApiResponse } from 'next';

interface FinancialReport {
  id: string;
  projectName: string;
  reportDate: string;
  revenue: number;
  expenses: number;
  netProfit: number;
}

const reports: FinancialReport[] = [
  // Dummy data
  { id: '1', projectName: 'Project A', reportDate: '2024-08-01', revenue: 100000, expenses: 50000, netProfit: 50000 },
  { id: '2', projectName: 'Project B', reportDate: '2024-08-02', revenue: 200000, expenses: 100000, netProfit: 100000 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(reports);
}
