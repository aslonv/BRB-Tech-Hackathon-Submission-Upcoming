import { ChangeEvent } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        placeholder="Search Projects"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
