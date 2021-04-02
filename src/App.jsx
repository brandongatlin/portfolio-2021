import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Hobbies from './components/pages/Hobbies';

function App() {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');

  const themeHandler = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const languageHandler = () => {
    if (language === 'en') {
      setLanguage('es');
    } else {
      setLanguage('en');
    }
  };

  const classNameHandler = (colorTheme, prefix) => (colorTheme === 'dark' ? `${prefix}-dark` : `${prefix}-light`);

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
          <Route path="/hobbies">
            <Hobbies
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
