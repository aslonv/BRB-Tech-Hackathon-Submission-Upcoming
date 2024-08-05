import { ChangeEvent } from 'react';

interface SortingOptionsProps {
  onSort: (option: string) => void;
}

const SortingOptions: React.FC<SortingOptionsProps> = ({ onSort }) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onSort(e.target.value);
  };

  return (
    <div className="mb-4">
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        onChange={handleChange}
      >
        <option value="">Sort By</option>
        <option value="fundingProgress">Funding Progress</option>
        <option value="timeLeft">Time Left</option>
        <option value="amountRaised">Amount Raised</option>
        <option value="numberOfBackers">Number of Backers</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
};

export default SortingOptions;
