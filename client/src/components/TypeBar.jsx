import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import ListGroup from 'react-bootstrap/ListGroup';

const TypeBar = observer(() => {
  const { challenge } = useContext(Context);
  return (
    <ListGroup>
      {challenge.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          active={type.id === challenge.selectedType.id}
          onClick={() => challenge.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
