import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class Cadastro extends Component {
    state = {}
    render() {
        return (
            <form >
                <TextField margin="normal" id="IpId" label="Id" type="number" variant="outlined" fullWidth />
                <TextField margin="normal" id="IpName" label="Nome" variant="outlined" fullWidth />
                <FormControl variant="outlined" fullWidth>
                    <InputLabel  id="demo-simple-select-outlined-label">Categoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        label="categoria"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="eletronico">Eletronico</MenuItem>
                        <MenuItem value="vestuario">vestuário</MenuItem>
                        <MenuItem value="cama">Cama</MenuItem>
                    </Select>
                </FormControl>

                <hr />

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