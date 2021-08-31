import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

class Cadastro extends Component {
    state = {}
    render() {
        return (
            <form >
                <TextField margin="normal" id="IpId" label="Id" variant="outlined" fullWidth />
                <TextField margin="normal" id="IpName" label="Nome" variant="outlined" fullWidth />
                <TextField margin="normal" id="IpCategoria" label="Categoria" variant="outlined" fullWidth />
                <br/>
                <Button
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