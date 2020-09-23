import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(vehicleNumber: string, userName: string, fines: number, appPayment: string) {
    return { vehicleNumber, userName, fines, appPayment };
}

const rows = [
    createData('АА 0000 КК', 'Петренюк Семен Александрович', 6, 'Так'),
    createData('АА 0000 КК', 'Петренюк Семен Александрович', 6, 'Так'),
    createData('АА 0000 КК', 'Петренюк Семен Александрович', 6, 'Так'),
    createData('АА 0000 КК', 'Петренюк Семен Александрович', 6, 'Так'),
    createData('АА 0000 КК', 'Петренюк Семен Александрович', 6, 'Так')
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Номер транспортного засобу</TableCell>
                        <TableCell align="center">Користувач</TableCell>
                        <TableCell align="center">Штрафи</TableCell>
                        <TableCell align="center">Оплата додатку</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.vehicleNumber}>
                            <TableCell component="th" scope="row">
                                {row.vehicleNumber}
                            </TableCell>
                            <TableCell align="center">{row.userName}</TableCell>
                            <TableCell align="center">{row.fines}</TableCell>
                            <TableCell align="center">{row.appPayment}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
