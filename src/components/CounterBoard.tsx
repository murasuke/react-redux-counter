import { VFC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, Statistic } from 'semantic-ui-react';

import { add, decrement, increment } from '../actions';
import { CounterState } from '../reducer';

const BULK_UNIT = 10;

const CounterBoard: VFC = () => {
  const count = useSelector<CounterState, number>((state) => state.count);
  const dispatch = useDispatch();

  return (
    <Card className="centered">
      <Statistic>
        <Statistic.Label>count</Statistic.Label>
        <Statistic.Value>{count}</Statistic.Value>
      </Statistic>
      <Card.Content>
        <div className="ui two buttons">
          <Button color="red" onClick={() => dispatch(decrement())}>
            -1
          </Button>
          <Button color="green" onClick={() => dispatch(increment())}>
            1
          </Button>
        </div>
        <div className="fluid-button">
          <Button fluid color="grey" onClick={() => dispatch(add(BULK_UNIT))}>
            +{BULK_UNIT}
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default CounterBoard;
