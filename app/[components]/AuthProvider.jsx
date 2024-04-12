"use client";

import { SessionProvider } from "next-auth/react";
import { Children } from "react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
