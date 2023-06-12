import React, { useState } from 'react';

const AddProjectForm: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [description, setDescription] = useState('');
  const [goals, setGoals] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isPrivate, setIsPrivate] = useState(false);

  const handleProjectNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };


  const handleDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivate(event.target.value === 'private');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Process the form submission here
    console.log('Submitted:', {
      projectName,
      description,
      isPrivate,
    });

    // Clear form fields
    setProjectName('');
    setDescription('');
    setIsPrivate(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-silver text-black p-4 rounded-lg">
      <div className="mb-4">
        <label htmlFor="projectName" className="block mb-2 font-bold">
          Project Name
        </label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={handleProjectNameChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-bold">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="goals" className="block mb-2 font-bold">
         Goals
        </label>
        <input
          type="text"
          id="goals"
          value={goals}
          onChange={handleProjectNameChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="goals" className="block mb-2 font-bold">
         Upload Project Photo
        </label>
        <input
          type="file"
          id="selectedFile"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Private</label>
        <div className="flex items-center">
          <input
            type="radio"
            id="public"
            value="public"
            checked={!isPrivate}
            onChange={handleRadioChange}
            className="mr-2"
          />
          <label htmlFor="public">Public</label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="private"
            value="private"
            checked={isPrivate}
            onChange={handleRadioChange}
            className="mr-2"
          />
          <label htmlFor="private">Private</label>
        </div>
      </div>

      <button type="submit" className="bg-black text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default AddProjectForm;
