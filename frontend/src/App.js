import './App.css';
import { Container } from '@material-ui/core';
import { Component, Fragment } from 'react';
import CadastroCategoria from "./components/CadastroCategoria";
import Cadastro from "./components/CadastroProduto";
import Listar from "./components/ListarProdudos";

import RepositoryCategory from "./Repository/RepositoryCategory"
import RepositoryProduto from "./Repository/RepositoryProduto"

class App extends Component {
  reporCaregory;
  reporProduct;
  constructor(props) {
    super(props);
    this.reporCaregory = new RepositoryCategory();
    this.reporProduct = new RepositoryProduto();
  }

  render() {
    return (
      <Fragment>
        <Container maxWidth="sm">
          <CadastroCategoria create={this.reporCaregory.create.bind(this.reporCaregory)} />
          <Cadastro create={this.reporProduct.create.bind(this.reporProduct)} reporCategory={this.reporCaregory} />
        </Container>
        <Container maxWidth="sm">
          <Listar reporProduct={this.reporProduct} />
        </Container>
      </Fragment>
    );
  }
}
export default App;