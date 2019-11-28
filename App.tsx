import React from "react";
import { SafeArea } from "./src/components/layouts";
import SessionsNewPage from "./src/components/pages/sessions/new";
import Router from "./src/router";
import Session from "./src/store/container/Session";
import ReportsNewPage from "./src/components/pages/reports/new";

const App: React.FC = () => {
  return (
    <Session.Provider>
      <SafeArea>
        <Router />
      </SafeArea>
    </Session.Provider>
  );
};

export default App;
