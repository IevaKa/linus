import React, { useState, useEffect } from "react";
import axios from "axios";
import Step1 from "./components/Step1";

export interface IProject {
  id: number;
  name: string;
  location: string;
}

const App: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<IProject>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://fullstack.linus-capital.com/projects"
        );
        setProjects(response.data.projects);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Sorry, an error has occured.</div>;
  return (
    <div style={{ width: "100%" }}>
      <Step1 projects={projects} setSelectedProject={setSelectedProject} />
    </div>
  );
};

export default App;
