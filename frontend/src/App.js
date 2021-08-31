
import Cadastro from './components/CadastroProduto/Cadastro';
import './App.css';
import { Container } from '@material-ui/core';
import { Fragment } from 'react';
import Listar from './components/ListarProdudos';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  return (
    <Fragment>
      <CircularProgress color="secondary" maxWidth="xl" />
      <Container maxWidth="xs"  >
        <h1>Cadastro produto</h1>
        <hr />
        <Cadastro />
      </Container>
      <br />
      <Container maxWidth="xs">
          <Listar />
      </Container>
    </Fragment>
  );
}

export default App;
