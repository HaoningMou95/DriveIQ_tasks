import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import { CircularProgress } from '@mui/material'
import { useEffect, useState } from 'react'
import { fetchData } from '../util/Fetch'


function DynamicTable () {
    const [data, setData] = useState([])
    const [loading,setLoading] = useState(false)

    const handleOnLoading = () => {
        setLoading(true)
        axios.get(`http://universities.hipolabs.com/search?country=Australia`)
                    .then((res)=>{
                        setData(res.data)
                        setLoading(false)
                        console.log('!!!!!!!',res)
                    })
    }

    return(
        <div>
            {loading && 
                <CircularProgress sx={{
                    position: 'absolute',
                    marginTop:30,
                    zIndex: 1,}}
                />}
            <div>
            <Button onClick={()=>handleOnLoading()}>Loading</Button>
            <Button>DELETE</Button>
            <Button>ADD</Button>
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
            </div>
            
        </div>
        
    )
}

export default DynamicTable