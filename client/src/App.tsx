import React, { useState, useEffect } from "react";
import axios from "axios";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import { BrowserRouter as Router, Route } from "react-router-dom";

export interface IProject {
  id: number;
  name: string;
  location: string;
}

const App: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<IProject>();
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState<number | undefined>();
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const test = async () => {
  //   const res = axios.post("http://localhost:1337/investors", {
  //     email: "testkksksksksk@gmail.com",
  //     investment_amount: 1000,
  //     project_id: 3,
  //   });
  // };

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
    <Router>
      <Route
        path="/"
        exact
        render={() => (
          <Step1 projects={projects} setSelectedProject={setSelectedProject} />
        )}
      />
      <Route
        path="/step2"
        exact
        render={() => (
          <Step2
            email={email}
            amount={amount}
            setEmail={setEmail}
            setAmount={setAmount}
          />
        )}
      />
      <Route
        path="/step3"
        exact
        render={() => (
          <Step3
            selectedProject={selectedProject}
            email={email}
            amount={amount}
            agreed={agreed}
            setAgreed={setAgreed}
          />
        )}
      />
    </Router>
  );
};

export default App;
