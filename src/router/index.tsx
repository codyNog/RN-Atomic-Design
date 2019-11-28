import React from "react";
import Session from "../store/container/Session";
import SessionsNewPage from "../components/pages/sessions/new";
import { View, Text } from "react-native";
import ReportsNewPage from "../components/pages/reports/new";

const Router: React.FC = () => {
  const session = Session.useContainer();
  const { isLoggedIn } = session;
  return isLoggedIn ? <ReportsNewPage /> : <SessionsNewPage />;
};

export default Router;
