import React from 'react'

const ProjectIcon: React.FC<{ projectPhotoUrl: string; projectName: string }> = ({ projectPhotoUrl, projectName }) => {
  return (
    <div>
      <img src={projectPhotoUrl} alt="Project" className="mb-2" />
      <p>{projectName}</p>
    </div>
  );
};

export default ProjectIcon;