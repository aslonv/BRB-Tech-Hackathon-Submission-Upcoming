import { GetServerSideProps } from 'next';

interface Investment {
  id: string;
  projectName: string;
  amountInvested: number;
  date: string;
  returnStatus: string;
}

interface InvestmentTrackerProps {
  investments: Investment[];
}

const InvestmentTracker: React.FC<InvestmentTrackerProps> = ({ investments }) => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Investment Tracker</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount Invested</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {investments.map((investment) => (
            <tr key={investment.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{investment.projectName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${investment.amountInvested}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{investment.date}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{investment.returnStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('https://your-api-endpoint/investments');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Investment[] = await response.json();
    return { props: { investments: data } };
  } catch (error) {
    console.error('Fetch error:', error);
    return { props: { investments: [] } };
  }
};

export default InvestmentTracker;
