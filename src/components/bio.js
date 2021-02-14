import React from "react";
import { Row, Col } from "react-bootstrap";
const strings = require("../strings.json");

const Biography = () => {
  return (
    <div>
      <p>
        My name is Brandon Gatlin and I am a software engineer for WEX, inc. My
        coding journey started when I decided to change careers and, on a
        recomendation from a friend, looked into programming.
      </p>
      <p>
        In September 2017 I began a 6 month coding/web dev bootcamp where I
        learned a lot of technologies. Most importantly, however, I learned how
        to break down problems into pieces and solve the small pieces before
        ever typing a character.
      </p>
      <p>
        Another important thing I learned was how to self-learn. Technologies
        come and go, so I keep learning new languages/libraries to stay current.
      </p>
      <p>
        Since graduating the bootcamp, I've been fortunate enough to work with
        WEX as a full-time programmer and my web dev skills have not been wasted
        here. I've also needed to pick up Python and C# to accomplish the things
        I've been tasked with.
      </p>
    </div>
  );
};

const Biografia = () => {
  return (
    <div>
      <p>
        Me llamo Brandon Gatlin y soy ingeniero de software por WEX, S.A.
        Empiecé a programar en septiembre 2017. Después haber decidir cambiarme
        la carera una amiga me recomiendó trabajo con computadoras. Me dijo que
        yo tenía la personalidad y creatividad hacerlo.
      </p>
      <p>
        Me dediqué a aprender todo que pudiera en seis meses. Aprendí lo normal:
        HTML, CSS, javascript, Node JS y React JS. Además aprendí mySql y como
        programr un app full-stack. Sobre todo aprendí a dividir un problema en
        partes y resolved las partes primero.
      </p>
      <p>
        Otra cosa que aprendí era aprender por cuenta propia utilizando recursos
        como Udemy y YouTube. Hay muchos fads en el mundo de programar, pero es
        importante mantenerse actualizado con las nuevas tecnologías.
      </p>
      <p>
        Despúes de graduarme encontré trabajo con WEX y he utilizado todas las
        cosas (y cosas aún por aprender) que había aprendido antes. El Python y
        C# son dos ejemplos de lo que necesitaba hacer mi trabajo.
      </p>
    </div>
  );
};

const Bio = ({ language, theme, classNameHandler }) => {
  return (
    <Row className={classNameHandler(theme, "bio")}>
      <Col>
        <h1>{strings[language].greeting}</h1>
        {language === "en" ? <Biography /> : <Biografia />}
      </Col>
    </Row>
  );
};

export default Bio;
