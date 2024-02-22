import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type ActionState = {
  type: 'increment' | 'decrement';
  payload: number;
};

const initialState = { count: 0 };

function reducer(state: CounterState, action: ActionState) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}> increment 10 </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}> dencrement 10 </button>
    </>
  );
};
