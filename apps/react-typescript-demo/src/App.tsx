import './App.css';
import { Counter } from './components/state/Counter';

function App() {
  /* const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },

    {
      first: 'Princess',
      last: 'Diana',
    },
  ]; */

  return (
    <div className="App">
      {/* <Greet name="José" messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Oscar>
        <Heading> Oscar goes to pessi</Heading>
      </Oscar>
      <Greet name="José" isLoggedIn={true} />
      <Button
        handleClick={(event, id) => {
          console.log('Button Clicked!', event, 'id: ', id);
        }}
      />
      <Input value="" handleChange={event => console.log(event)} /> 

      <Container style={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn />
      <User />*/}

      <Counter />

    </div>
  );
}

export default App;
