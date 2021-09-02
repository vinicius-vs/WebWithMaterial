import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Produto from '../../Model/ModelProduro';


class Cadastro extends Component {
    state = {}
    id;
    name;
    categoria;
    reporCategory;
    listCategory = ["s"]
    constructor(props) {
        super(props);
        this.state = {
            listCategory: []
        }
    }

    componentDidMount() {
        this.reporCategory = this.props.reporCategory;
        this.setState(
            {
                listCategory: this.reporCategory.read()
            }
        )
        this.reporCategory.register(this.getListCategory.bind(this));
    }

    getListCategory(list){
        this.setState({
            listCategory : list
        })
    }

    componentWillUnmount(){
        this.reporCategory.unsubscrites(this.getListCategory.bind(this));
    }

    handleById(event) {
        this.id = event.target.value;
        event.stopPropagation();
    }
    handleByName(event) {
        this.name = event.target.value;
        event.stopPropagation();
    }
    handleByCategoria(event) {
        console.log(event.target.value)
        this.categoria = event.target.value;
        event.stopPropagation();
    }
    handleBySave(event) {
        let product = new Produto();
        product.id = this.id;
        product.nome = this.name;
        product.categoria = this.categoria;
        event.stopPropagation();
        event.preventDefault();
        this.props.create(product);
    }


    render() {
        return (
            <form >
                <TextField onChange={this.handleById.bind(this)} margin="normal" id="IpId" label="Id" type="number" variant="outlined" fullWidth />
                <TextField onChange={this.handleByName.bind(this)} margin="normal" id="IpName" label="Nome" variant="outlined" fullWidth />
                <FormControl  variant="outlined" fullWidth>
                    <InputLabel id="demo-simple-select-outlined-label">Categoria</InputLabel>
                    <Select onChange={this.handleByCategoria.bind(this)}
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="categoria"
                    >
                        <MenuItem value="Sem categoria">
                            <em>Sem categoria</em>
                        </MenuItem>
                        {this.state.listCategory.map((e, k) =>
                            <MenuItem key={k} value={e.nome}>{e.nome}</MenuItem>
                        )}
                    </Select>
                </FormControl>

                <hr />

                <Button
                    onClick={this.handleBySave.bind(this)}
                    variant="contained"
                    color="primary"
                    size="large"
                    className="test"
                >
                    Salvar
                </Button>
            </form>
        );
    }
}
export default Cadastro;