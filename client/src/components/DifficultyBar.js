import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { challenge } = useContext(Context);

  return (
    <Row className="d-flex">
      {challenge.difficulties.map((difficulty) => (
        <Card
          style={{ cursor: 'pointer' }}
          key={difficulty.id}
          className="p-3"
          onClick={() => challenge.setSelectedDifficulty(difficulty)}
          border={difficulty.id === challenge.selectedDifficulty.id ? 'danger' : 'light'}
        >
          {difficulty.name}
        </Card>
      ))}
    </Row>
  );
});
export default BrandBar;
