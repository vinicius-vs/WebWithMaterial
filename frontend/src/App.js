import './App.css';
import { Container } from '@material-ui/core';
import { Fragment } from 'react';
import Main from './components/Main/Main';
function App() {
  return (
    <Fragment>
      <Container maxWidth="sm" >
        <Main />
      </Container>
    </Fragment>
  );
}
export default App;