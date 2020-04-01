import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <Fragment>
      {
        robots.map(robot =>
          <Card
            id={robot.id}
            name={robot.username}
            mail={robot.email}
            key={robot.id}
          />
        )
      }
    </Fragment>
  );
}

export default CardList;