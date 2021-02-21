import React, {useEffect} from "react";
import { Container } from "react-bootstrap";
import Bio from "../bio";
import Skills from "../skills";

const strings = require('../../strings.json');

const Home = ({ language, theme, classNameHandler }) => {
  useEffect(()=> {
    document.title = strings[language].home;
  }, [language])
  return (
    <Container fluid className="home-grid">
      <Bio
        language={language}
        theme={theme}
        classNameHandler={classNameHandler}
      />
      <Skills theme={theme} classNameHandler={classNameHandler} />
    </Container>
  );
};

export default Home;
