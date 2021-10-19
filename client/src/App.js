import React from "react";
import { Route, Switch as SwitchRoutes } from "react-router";
import styled from "styled-components";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import MenuIcon from "@material-ui/icons/Menu";
import Switch from "@material-ui/core/Switch";

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
import { IconButton } from "@material-ui/core";

function App() {
  const [theme, setTheme] = React.useState("dark-theme");
  const [checked, setChecked] = React.useState(false);
  const [navToggle, setNavToggle] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const handleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
    } else {
      setTheme("light-theme");
      setChecked(true);
    }
  };

  return (
    <div>
      <Sidebar navToggle={navToggle} />
      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>
          <div className="right-content">
            <Switch
              value=""
              checked={checked}
              inputProps={{ "aria-label": "" }}
              size="medium"
              onClick={handleTheme}
            />
          </div>
        </div>
      </div>

      <div className="hamburger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>
      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>

        <SwitchRoutes>
          <Route path="/about" component={AboutPage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="/portfolios" component={PortfoliosPage} />
          <Route path="/blogs" component={BlogsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" exact component={Homepage} />
        </SwitchRoutes>
      </MainContentStyled>
    </div>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  transition: all 0.3s ease-in;
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }

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
