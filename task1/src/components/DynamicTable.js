import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, addData, deleteData } from '../store';
import '../App.css'



function DynamicTable () {
    const [loading, setLoading] = useState(false)
    const fetchedData = useSelector(state => state.apiData.apiData)
    const dispatch = useDispatch()

    const loadData = () => {
        dispatch(fetchData(setLoading));
    }
    
    const handleDelete = () => {
        dispatch(deleteData())
    }

    const handleAdd = () => {
        dispatch(addData())
    }

    return(
        <div className = 'App'>
            {loading && 
                <CircularProgress sx={{
                    position: 'absolute',
                    marginTop: 30,
                    zIndex: 1,}}
                />}
                <div className='actionBoard'>
                    <Button onClick={loadData} variant='outlined' color='primary' className='actionBtn'>LOAD</Button>
                    <Button onClick={handleDelete} variant='outlined' color='error' className='actionBtn'>DELETE</Button>
                    <Button onClick={handleAdd} variant='contained' color='success' className='actionBtn'>ADD</Button>
                </div>
                <TableContainer style={{padding: 40}}>
                    <Table>
                        <TableHead>
                            <TableRow className='headRow'>
                                <TableCell align='justify'>Domains</TableCell>
                                <TableCell align='justify'>Web Pages</TableCell>
                                <TableCell align='justify'>State Province</TableCell>
                                <TableCell align='justify'>Name</TableCell>
                                <TableCell align='justify'>Country</TableCell>
                                <TableCell align='justify'>Alpha Two Code</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fetchedData.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell align='justify'>{row.domains}</TableCell>
                                    <TableCell align='justify'>{row.web_pages}</TableCell>
                                    <TableCell align='justify'>{!row['state-province']&&'NULL'}</TableCell>
                                    <TableCell align='justify'>{row.name}</TableCell>
                                    <TableCell align='justify'>{row.country}</TableCell>
                                    <TableCell align='justify'>{row.alpha_two_code}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}

export default DynamicTable