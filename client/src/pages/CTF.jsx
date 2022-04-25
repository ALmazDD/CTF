import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TypeBar from '../components/TypeBar';
import DifficultyBar from '../components/DifficultyBar';
import ChallengeList from '../components/ChallengeList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchDifficulties, fetchDevices, fetchTypes, fetchChallenges } from '../http/challengeAPI';
import Pages from '../components/Pages';

const CTF = observer(() => {
  const { challenge } = useContext(Context);

  useEffect(() => {
    fetchTypes().then((data) => challenge.setTypes(data));
    fetchDifficulties().then((data) => challenge.setDifficulties(data));
    fetchChallenges(null, null, 1, 2).then((data) => {
      challenge.setChallenges(data.rows);
      challenge.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchChallenges(challenge.selectedType.id, challenge.selectedDifficulty.id, challenge.page, 2).then((data) => {
      challenge.setDevices(data.rows);
      challenge.setTotalCount(data.count);
    });
  }, [challenge.page, challenge.selectedType, challenge.selectedDifficulty]);

  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <DifficultyBar />
          <ChallengeList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default CTF;
