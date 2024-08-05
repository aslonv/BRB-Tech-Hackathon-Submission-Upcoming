interface Project {
    id: string;
    title: string;
    description: string;
    fundingGoal: number;
    progress: number;
    timeRemaining: string;
    numberOfBackers: number;
  }
  
  interface ProjectCardProps {
    project: Project;
  }
  
  const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm mb-4">
        <h2 className="text-lg font-bold">{project.title}</h2>
        <p className="text-sm text-gray-600">{project.description}</p>
        <div className="mt-2">
          <p>Funding Goal: ${project.fundingGoal}</p>
          <p>Progress: {project.progress}%</p>
          <p>Time Remaining: {project.timeRemaining}</p>
          <p>Number of Backers: {project.numberOfBackers}</p>
        </div>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Invest Now</button>
      </div>
    );
  };
  
  export default ProjectCard;
  