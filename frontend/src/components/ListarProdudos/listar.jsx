import { Component } from 'react';
import { withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


class Listar extends Component {
    repor;
    state = {}

    constructor(props){
      super(props);
      this.state={
        rows : []
      }
    }

    componentDidMount(){
      this.repor = this.props.reporProduct;
      this.setState({
        rows : this.repor.read()
      })
      this.repor.register(this.getListProduct.bind(this))
    }
    
    componentWillUnmount(){
      this.repor.unsubscribe(this.getListProduct.bind(this))
    }
    getListProduct(list){
      this.setState({
        rows : list
      })
    }
    render() {
        return (
            <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell >ID</StyledTableCell>
                            <StyledTableCell align="right">Nome</StyledTableCell>
                            <StyledTableCell align="right">Categoria</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.rows.map((e,k) => (
                            <StyledTableRow key={k}>
                                <StyledTableCell component="th" scope="row">
                                    {e.id}
                                </StyledTableCell>
                                <StyledTableCell align="right">{e.nome}</StyledTableCell>
                                <StyledTableCell align="right">{e.categoria}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
export default Listar;