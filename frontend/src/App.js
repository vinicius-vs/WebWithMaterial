import Cadastro from './components/CadastroProduto/Cadastro';
import './App.css';
import { Container } from '@material-ui/core';
import { Fragment } from 'react';
import Listar from './components/ListarProdudos';
import CadastroCategoria from './components/CadastroCategoria';
function App() {
  return (
    <Fragment>
      <Container >
        <h5>Cadastro categoria</h5>
        <CadastroCategoria />
      </Container>
      <Container maxWidth="xs" >
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