import { Component, Fragment } from 'react';
import { TextField } from '@material-ui/core';

class CadastroCategoria extends Component {
    render() {
        return (
            <Fragment>
                <form >
                    <TextField margin="normal" id="outlined-basic" label="categoria" variant="outlined" />
                </form>
            </Fragment>
        )
    }

}

export default CadastroCategoria;