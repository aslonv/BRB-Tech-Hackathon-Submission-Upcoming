interface VotingRightsProps {
    projectId: string;
    rights: string[];
  }
  
  const VotingRights: React.FC<VotingRightsProps> = ({ projectId, rights }) => {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Voting Rights for Project {projectId}</h1>
        <ul className="list-disc pl-5">
          {rights.map((right, index) => (
            <li key={index} className="mb-2">{right}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default VotingRights;
  