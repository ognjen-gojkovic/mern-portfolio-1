import React from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";

/**
 * components
 */
import Sidebar from "./components/Sidebar";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import PortfoliosPage from "./pages/PortfoliosPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div>
      <Sidebar />
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>
        <Switch>
          <Route path="/about" component={AboutPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/portfolios" component={PortfoliosPage} />
          <Route path="/blogs" component={BlogsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" exact component={Homepage} />
        </Switch>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  .lines {
    width: 100%;
    position: absolute;
    min-height: 100%;
    display: flex;
    justify-content: space-evenly;
    z-index: -100;

    div[class^="line-"] {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
