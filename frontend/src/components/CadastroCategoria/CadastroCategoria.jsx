import { Component, Fragment } from 'react';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';

class CadastroCategoria extends Component {
    render() {
        return (
            <Fragment>
                <form >
                    <TextField margin="normal" id="outlined-basic" label="categoria" variant="outlined" />
                    <br />
                    <Button
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