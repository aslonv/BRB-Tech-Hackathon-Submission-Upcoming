import React from 'react';
import useProjects from '../hooks/useProjects';

const ProjectList: React.FC = () => {
  const { projects, loading, error } = useProjects();

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-4 p-4 border rounded">
            <h2 className="text-lg font-semibold">{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Funding Goal:</strong> ${project.fundingGoal}</p>
            <p><strong>Amount Raised:</strong> ${project.amountRaised}</p>
            <p><strong>Funding Progress:</strong> {project.fundingProgress}%</p>
            <p><strong>Time Remaining:</strong> {project.timeRemaining}</p>
            <p><strong>Number of Backers:</strong> {project.numberOfBackers}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
