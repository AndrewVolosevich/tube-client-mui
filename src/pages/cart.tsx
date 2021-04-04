import React, {useState} from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Container,
  makeStyles,
  TablePagination
} from "@material-ui/core";
import { testRows } from '../mocky/testRows';

const useStyles = makeStyles(theme => {
  return {
    tableContainer: {
      marginTop: theme.spacing(4)
    },
    table: {
      minWidth: 700,
    },
  }
});

const Cart = () => {
  const classes = useStyles()
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(5);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, testRows.length - page * rowsPerPage);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Container fixed maxWidth={"md"} >
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Дата заказа тубусов</TableCell>
                <TableCell align="right">Высота</TableCell>
                <TableCell align="right">Диаметр</TableCell>
                <TableCell align="right">Тип этикетки</TableCell>
                <TableCell align="right">Колличество</TableCell>
                <TableCell align="right">Цена</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.date.toLocaleDateString('ru-Ru')}
                  </TableCell>
                  <TableCell align="right">{row.height}</TableCell>
                  <TableCell align="right">{row.diameter}</TableCell>
                  <TableCell align="right">{row.label}</TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">{row.price}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={testRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Container>
    </>
  );
};

export default Cart;