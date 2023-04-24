import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "./Navbar/Navbar";
import { routes } from "./routes/routes";

const StyledLayoutContainer = styled.div`
  display: grid;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
`;

const StyledMainContent = styled.div`
  padding: 0 1rem;
`;

export const Layout = () => {
  return (
    <StyledLayoutContainer id="Layout">
      <Navbar />
      <StyledMainContent>
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </StyledMainContent>
    </StyledLayoutContainer>
  );
};
