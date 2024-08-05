import { useEffect, useState } from 'react';

interface FinancialReport {
  id: string;
  projectName: string;
  reportDate: string;
  revenue: number;
  expenses: number;
  netProfit: number;
}

const FinancialReports: React.FC = () => {
  const [reports, setReports] = useState<FinancialReport[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch('/api/financial-reports');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: FinancialReport[] = await response.json();
        setReports(data);
      } catch (error) {
        setError('Failed to load financial reports.');
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchReports();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Financial Reports</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expenses</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Profit</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.map((report) => (
            <tr key={report.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.projectName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.reportDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${report.revenue}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${report.expenses}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${report.netProfit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FinancialReports;
