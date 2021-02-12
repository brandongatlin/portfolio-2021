import { useState } from "react";
import "./App.css";
import "./index.css";
import Navigation from "./components/navigation";
import Bio from "./components/bio";
import Skills from "./components/skills";
import { Container } from "react-bootstrap";

const strings = require("./strings.json");

function App() {
  const [theme, setTheme] = useState("dark");
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
    <>
      <Navigation
        themeHandler={themeHandler}
        languageHandler={languageHandler}
        classNameHandler={classNameHandler}
        theme={theme}
        language={language}
      />
      <Container fluid>
        <h1>{strings[language].greeting}</h1>
        <Bio language={language} theme={theme} classNameHandler={classNameHandler} />
        <Skills theme={theme} classNameHandler={classNameHandler}/>
      </Container>
    </>
  );
}

export default App;
