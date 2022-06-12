import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'


function DynamicTable () {
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get(`http://universities.hipolabs.com/search?country=Australia`)
                .then((res)=>{
                    setData(res.data)
                    console.log('Result',data)
                })
                .catch((error)=>{
                    console.log(error)
                })
    },[])

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>domains</TableCell>
                        <TableCell>web_pages</TableCell>
                        <TableCell>state_province</TableCell>
                        <TableCell>name</TableCell>
                        <TableCell>country</TableCell>
                        <TableCell>alpha_two_code</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.domains}>
                            <TableCell>{row.domains}</TableCell>
                            <TableCell>{row.web_pages}</TableCell>
                            <TableCell>{!row['state-province']&&'NULL'}  </TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.country}</TableCell>
                            <TableCell>{row.alpha_two_code}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default DynamicTable