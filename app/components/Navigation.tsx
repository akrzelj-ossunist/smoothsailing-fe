"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import { useState, createContext } from "react";

export const ThemeContext = createContext<any>({});

const Navigation: React.FC<{ children: any }> = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("logged") === "true" || false;
    }
    return false;
  });

  return (
    <QueryClientProvider client={new QueryClient()}>
      <div className="flex justify-around py-3 bg-slate-200 border-b-2 border-slate-300">
        {!logged ? (
          <>
            <Link
              href="/login"
              className="px-4 py-2 rounded-md bg-slate-900 text-white">
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 rounded-md bg-slate-900 text-white">
              Register
            </Link>
            <Link
              href="/crew-register"
              className="px-4 py-2 rounded-md bg-slate-900 text-white">
              Crew register
            </Link>
          </>
        ) : (
          <button
            onClick={() => {
              localStorage.setItem("logged", "false");
              setLogged(false);
            }}
            className="px-4 py-2 rounded-md bg-slate-900 text-white">
            Logout
          </button>
        )}
      </div>
      <ThemeContext.Provider value={{ logged: logged, setLogged: setLogged }}>
        {children}
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
};

export default Navigation;
