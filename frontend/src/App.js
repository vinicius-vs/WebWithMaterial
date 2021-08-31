
import Cadastro from './components/CadastroProduto/Cadastro';
import './App.css';
import { Container } from '@material-ui/core';
import { Fragment } from 'react';
import Listar from './components/ListarProdudos';

function App() {
  return (
    <Fragment>
      <Container maxWidth="xs"  >
        <h1>Cadastro produto</h1>
        <Cadastro />
      </Container>
      <br />
      <Container maxWidth="sm">
          <Listar />
      </Container>
    </Fragment>
  );
}

export default App;
