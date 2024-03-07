import './App.css';
import { CustomComponent } from './components/html/CustumComponent';

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
      <User />

      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User /> 
      </UserContextProvider>

      <DomRef />
      <MutableRef />


      <Counter message='The value is: '/>

      <Private isLoggedIn={true} component={Profile}/> 

      <RandomNumber  value={10}  isPositive/>

      <Toast position='center'/> 

      <CustomButton variant="primary">SMTG</CustomButton>
      <CustomInput style={{ height: "100px"}} /> */}

      <CustomComponent isLoggedIn={true} name="jose" />
    </div>
  );
}

export default App;
