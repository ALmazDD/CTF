import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import ChallengeItem from './ChallengeItem';

const ChallengeList = observer(() => {
  const { challenge } = useContext(Context);

  return (
    <Row className="d-flex">
      {challenge.challenges.map((challenge) => (
        <ChallengeItem key={challenge.id} challenge={challenge} />
      ))}
    </Row>
  );
});

export default ChallengeList;
