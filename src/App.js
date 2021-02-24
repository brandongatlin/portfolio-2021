import { useState } from "react";
import "./App.css";
import "./index.css";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Home from "./components/pages/home";
import Portfolio from "./components/pages/portfolio";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const strings = require("./strings.json");

function App() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const themeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const languageHandler = () => {
    if (language === "en") {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  };

  const classNameHandler = (theme, prefix) => {
    return theme === "dark" ? `${prefix}-dark` : `${prefix}-light`;
  };

  return (
    <Router>
      <div>
        <Navigation
          themeHandler={themeHandler}
          languageHandler={languageHandler}
          classNameHandler={classNameHandler}
          theme={theme}
          language={language}
        />
        <Switch>
          <Route exact path="/">
            <Home
              language={language}
              theme={theme}
              classNameHandler={classNameHandler}
            />
          </Route>
          <Route path="/portfolio">
            <Portfolio
              language={language}
              theme={theme}
              classNameHandler={classNameHandler}
            />
          </Route>
        </Switch>
        <Footer
          language={language}
          theme={theme}
          classNameHandler={classNameHandler}
        />
      </div>
    </Router>
  );
}

export default App;
