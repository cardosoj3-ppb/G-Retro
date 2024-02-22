import './App.css';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/loggedIn';

/* import { Button } from './components/Button';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Inputs';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status'; */

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
      <Input value="" handleChange={event => console.log(event)} /> */}

      <Container style={{ border: '1px solid black', padding: '1rem' }} />
      <LoggedIn />
    </div>
  );
}

export default App;
