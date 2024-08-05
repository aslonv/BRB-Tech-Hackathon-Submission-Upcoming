interface WatchlistProps {
    watchlist: { id: string; title: string }[];
    onRemove: (id: string) => void;
  }
  
  const Watchlist: React.FC<WatchlistProps> = ({ watchlist, onRemove }) => {
    return (
      <ul className="divide-y divide-gray-200">
        {watchlist.map((project) => (
          <li key={project.id} className="flex items-center justify-between p-4">
            <span>{project.title}</span>
            <button
              className="text-red-600 hover:underline"
              onClick={() => onRemove(project.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Watchlist;
  