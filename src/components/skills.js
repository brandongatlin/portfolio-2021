import React from "react";
import { Row, Col } from "react-bootstrap";
const mySkills = require("../myskills.json");

const Skills = ({ theme, classNameHandler }) => {
  return (
    <Row className={classNameHandler(theme, "skills")}>
      <Col>
        <pre>{JSON.stringify(mySkills, null, 4)}</pre>
      </Col>
    </Row>
  );
};

export default Skills;
