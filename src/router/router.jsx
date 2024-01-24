import React, { useEffect, useState } from "react";
import Header from "./Header";
import Home from "../pathsComponent/Home";
import Service from "../pathsComponent/Service";
import SecondHeader from "./SecondHeader";

export const PATH = {
  HOME: "/",
  SERVICE: "/service",
};
const routes = {
  [PATH.HOME]: Home,
  [PATH.SERVICE]: Service,
};

export const routeToPage = (route) => {
  window.history.pushState(null, "", route);
};

const Router = () => {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  const Component = routes[currentRoute];
  useEffect(() => {
    const handleUrlChange = () => {
      setCurrentRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
    };
  });
  return (
    <>
      <Header />
      <SecondHeader />
      {Component ? <Component /> : <div>Wrong url</div>}
    </>
  );
};

export default Router;
