interface ConvertibleNotesProps {
    notes: {
      id: string;
      projectName: string;
      amount: number;
      conversionRate: number;
      maturityDate: string;
    }[];
  }
  
  const ConvertibleNotes: React.FC<ConvertibleNotesProps> = ({ notes }) => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Convertible Notes</h1>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Project</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Maturity Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {notes.map((note) => (
              <tr key={note.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{note.projectName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${note.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{note.conversionRate}%</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{note.maturityDate}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded">Invest</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ConvertibleNotes;
  