import React, { useEffect } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import bingo from "../../images/bingo.png";

const strings = require("../../strings.json");

const Portfolio = ({ language, theme, classNameHandler }) => {
  useEffect(() => {
    document.title = strings[language].portfolio;
  }, [language]);
  return (
    <Container
      fluid
      className={classNameHandler(theme, "portfolio") + " portfolio-grid"}
    >
      <Row>
        <Col>
          <h1 id="portfolio-title">{strings[language].portfolio}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardDeck id="deck">
            <Card>
              <a href="https://brandongatlin.github.io/forvo-bingo" target='_blank'>
                <Card.Img variant="top" src={bingo} />
              </a>
              <Card.Body>
                <Card.Title>{strings[language].bingo.title}</Card.Title>
                <Card.Text>{strings[language].bingo.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  {strings.technology.bingo.join(', ')}
                </small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
