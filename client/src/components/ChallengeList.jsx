import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import ChallengeItem from './ChallengeItem';

const ChallengeList = observer(() => {
  const { challenge } = useContext(Context);

  return (
    <div className="d-flex">
      {challenge.challenges.map((challenge) => (
        <ChallengeItem key={challenge.id} challenge={challenge} />
      ))}
    </div>
  );
});

export default ChallengeList;
