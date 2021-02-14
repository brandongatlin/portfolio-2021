import React from "react";
import Bio from "../bio";
import Skills from "../skills";

const Home = ({language, theme, classNameHandler}) => {
  return (
    <>
      <Bio language={language} theme={theme} classNameHandler={classNameHandler}/>
      <Skills theme={theme} classNameHandler={classNameHandler} />
    </>
  );
};

export default Home;
