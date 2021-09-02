import { Component, Fragment } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Categoria from '../../Model/ModelCategoria';

class CadastroCategoria extends Component {

    name;

    handleByName(event){
        this.name = event.target.value;
        event.stopPropagation();
    }
    hamdleBySeve(event){
        event.stopPropagation();
        event.preventDefault();
        let category = new  Categoria();
        category.id = 0;
        category.nome = this.name;
        this.props.create(category)
    }
    
    render() {
        return (
            <Fragment>
                <form >
                    <TextField onChange={this.handleByName.bind(this)} margin="normal" id="outlined-basic" label="categoria" variant="outlined" />
                    <br />
                    <Button
                    onClick={this.hamdleBySeve.bind(this)}
                    variant="contained"
                    color="primary"
                    size="large"
                    className="test"
                >
                    Salvar
                </Button>
                </form>
            </Fragment>
        )
    }

}

export default CadastroCategoria;