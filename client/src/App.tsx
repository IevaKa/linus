import React, { useState } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

export interface IProject {
  id: number;
  name: string;
  location: string;
}

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<IProject>();
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [investorInfoIsUndefined, setInvestorInfoIsUndefined] = useState(true);

  return (
    <Router>
      <Route
        path="/"
        exact
        render={() => <Step1 setSelectedProject={setSelectedProject} />}
      />
      <Route
        path="/step2"
        exact
        render={() =>
          selectedProject ? (
            <Step2
              email={email}
              amount={amount}
              setEmail={setEmail}
              setAmount={setAmount}
              setInvestorInfoIsUndefined={setInvestorInfoIsUndefined}
            />
          ) : (
            <Redirect to="/" />
          )
        }
      />
      <Route
        path="/step3"
        exact
        render={() =>
          !investorInfoIsUndefined ? (
            <Step3
              selectedProject={selectedProject}
              email={email}
              amount={amount}
            />
          ) : (
            <Redirect to="/step2" />
          )
        }
      />
    </Router>
  );
};

export default App;
