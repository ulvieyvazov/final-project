import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Admin from '.';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const AdminMessage = () => {


    const [data, setData] = useState([])
    const getData = async () => {
        const res = await axios.get("http://localhost:9900/message")
        setData(res.data)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>

        <Admin/>

            <div style={{ width: '60%', margin: '0 auto', padding: '40px 0' }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Name</StyledTableCell>
                                <StyledTableCell align="right">Email</StyledTableCell>
                                <StyledTableCell align="right">Subject</StyledTableCell>
                                <StyledTableCell align="right">Message</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((d) => (
                                <StyledTableRow key={d.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {d.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{d.email}</StyledTableCell>
                                    <StyledTableCell align="right">{d.subject}</StyledTableCell>
                                    <StyledTableCell align="right">{d.message}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default AdminMessage
