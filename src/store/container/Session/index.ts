import { createContainer } from "unstated-next";
import { useState } from "react";

const useSession = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  return { isLoggedIn, login, logout };
};

const Session = createContainer(useSession);

export default Session;
