import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
import { useState } from 'react'


function DynamicTable () {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    const onLoading = async () => {
        setLoading(true)
        axios.get(`http://universities.hipolabs.com/search?country=Australia`)
            .then((res)=>{
                setData(res.data)
                setLoading(false)
            })
            .catch((error=>{
                console.log(error)
                alert('Fail to fetch data.')
            }))         
    }

    const handleDelete = () => {
        const newData = data.slice(0, data.length-1)
        setData(newData)
    }

    const handleAdd = () => {
        const firstEle = [data[0]]
        const newData = data.concat(firstEle)
        setData(newData)
    }

    return(
        <div>
            {loading && 
                <CircularProgress sx={{
                    position: 'absolute',
                    marginTop: 30,
                    zIndex: 1,}}
                />}
            <div>
                <Button onClick={onLoading}>Loading</Button>
                <Button onClick={handleDelete}>DELETE</Button>
                <Button  onClick={handleAdd}>ADD</Button>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>domains</TableCell>
                                <TableCell>web_pages</TableCell>
                                <TableCell>state-province</TableCell>
                                <TableCell>name</TableCell>
                                <TableCell>country</TableCell>
                                <TableCell>alpha_two_code</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row, i) => (
                                <TableRow key={i}>
                                    <TableCell>{row.domains}</TableCell>
                                    <TableCell>{row.web_pages}</TableCell>
                                    <TableCell>{!row['state-province']&&'NULL'}</TableCell>
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.country}</TableCell>
                                    <TableCell>{row.alpha_two_code}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default DynamicTable