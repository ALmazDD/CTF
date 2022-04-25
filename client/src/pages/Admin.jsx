import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateDifficulty from '../components/modals/CreateBrand';
import CreateChallenge from '../components/modals/CreateChallenge';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
  const [difficultyVisible, setDifficultyVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [challengeVisible, setChallengeVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setTypeVisible(true)}>
        Добавить тип
      </Button>
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setDifficultyVisible(true)}>
        Добавить бренд
      </Button>
      <Button variant={'outline-dark'} className="mt-4 p-2" onClick={() => setChallengeVisible(true)}>
        Добавить устройство
      </Button>
      <CreateDifficulty show={difficultyVisible} onHide={() => setDifficultyVisible(false)} />
      <CreateChallenge show={challengeVisible} onHide={() => setChallengeVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
    </Container>
  );
};

export default Admin;
