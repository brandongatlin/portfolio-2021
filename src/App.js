import { useState } from "react";
import "./App.css";
import "./index.css";
import Navigation from "./components/navigation";
const strings = require('./strings.json');


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

  const classNameHandler = (theme, prefix)=> {
    return theme === 'dark' ? `${prefix}-dark` : `${prefix}-light`;
  }

  return (
    <div>
      <Navigation
        themeHandler={themeHandler}
        languageHandler={languageHandler}
        classNameHandler={classNameHandler}
        theme={theme}
        language={language}
      />
      <h1>{strings[language].greeting}</h1>
    </div>
  );
}

export default App;
