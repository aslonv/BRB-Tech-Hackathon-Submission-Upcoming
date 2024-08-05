interface ProjectDetailProps {
    project: {
      title: string;
      businessPlan: string;
      teamExperience: string;
      innovationLevel: string;
      socialImpact: string;
      returnTimeframe: string;
      fundingGoalRange: string;
      fundingProgress: string;
      geographicLocation: string;
      industry: string;
      projectStage: string;
      timeLeft: string;
      minInvestment: string;
      patentStatus: string;
    };
  }
  
  const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
    return (
      <div className="p-4 border border-gray-200 rounded-lg shadow-sm mb-4">
        <h1 className="text-xl font-bold mb-2">{project.title}</h1>
        <p className="font-semibold">Business Plan:</p>
        <p>{project.businessPlan}</p>
        <p className="font-semibold mt-2">Team Experience:</p>
        <p>{project.teamExperience}</p>
        <p className="font-semibold mt-2">Innovation Level:</p>
        <p>{project.innovationLevel}</p>
        <p className="font-semibold mt-2">Social Impact:</p>
        <p>{project.socialImpact}</p>
        <p className="font-semibold mt-2">Expected Return Timeframe:</p>
        <p>{project.returnTimeframe}</p>
        <p className="font-semibold mt-2">Funding Goal Range:</p>
        <p>{project.fundingGoalRange}</p>
        <p className="font-semibold mt-2">Funding Progress:</p>
        <p>{project.fundingProgress}</p>
        <p className="font-semibold mt-2">Geographic Location:</p>
        <p>{project.geographicLocation}</p>
        <p className="font-semibold mt-2">Industry/Sector:</p>
        <p>{project.industry}</p>
        <p className="font-semibold mt-2">Project Stage:</p>
        <p>{project.projectStage}</p>
        <p className="font-semibold mt-2">Time Left in Campaign:</p>
        <p>{project.timeLeft}</p>
        <p className="font-semibold mt-2">Minimum Investment Amount:</p>
        <p>{project.minInvestment}</p>
        <p className="font-semibold mt-2">Patent/IP Status:</p>
        <p>{project.patentStatus}</p>
      </div>
    );
  };
  
  export default ProjectDetail;
  