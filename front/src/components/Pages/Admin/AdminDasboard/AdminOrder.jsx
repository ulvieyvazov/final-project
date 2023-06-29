import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Admin from '.';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const AdminOrder = () => {


    const [data, setData] = useState([])
    const getData = async () => {
        const res = await axios.get("http://localhost:9090/billing")
        setData(res.data)
    }


    useEffect(() => {
        getData()
    }, [])
    return (
        <>

        <Admin/>

            <div style={{ width: '70%', margin: '0 auto', padding: "40px 0" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="right">County</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">Street Address</TableCell>
                                <TableCell align="right">Apartment, suite, unit etc.</TableCell>
                                <TableCell align="right">Phone</TableCell>
                                {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((d) => (
                                <TableRow
                                    key={d.lname}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {d.lname} {d.fname}
                                    </TableCell>
                                    <TableCell align="right">{d.state}</TableCell>
                                    <TableCell align="right">{d.city}</TableCell>
                                    <TableCell align="right">{d.address}</TableCell>
                                    <TableCell align="right">{d.suite}</TableCell>
                                    <TableCell align="right">{d.phone}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    )
}

export default AdminOrder
