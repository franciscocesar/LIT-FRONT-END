import { Box, TextField, Typography, useTheme, Icon as IconMui } from "@mui/material"
import { useState } from "react"

import { useQuery } from "react-query"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { Icon } from "../../components/atoms/Icon"
import { Loading } from "../../components/atoms/Loading"
import { ListEmployeers } from "../../components/organisms/ListEmployees"
import { requestAllEmployees, searchEmployeeByName } from "../../shared/clients/EmployeeClient"

export const Employeers = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const { search } = useLocation()

    const [searchByName, setSearchByName] = useState('')


    const { isLoading, error, data } = useQuery(['employees'], () =>
        requestAllEmployees().then(res =>
            res.data.data
        ),
        {
            cacheTime: 5000,
        }
    )

    const { data: searchDate } = useQuery(['search-employees'], () =>
        searchEmployeeByName(search).then(res =>
            res.data.data
        ),
        {
            cacheTime: 5000,
        }
    )

    const handleSearch = () => {
        navigate(`/employyers?name=${searchByName}`)
        window.location.reload();


    }


    return (
        <>
            {isLoading ?
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <Loading color={'primary'} />
                </Box> :
                <Box padding={'15px'}>
                    <Box height={theme.spacing(2.5)} />
                    <Box display='flex' alignItems='center'>
                        <Icon name="confirmation_number_sharp" />
                        <Typography ml={2} variant='h4'>
                            Funcionários
                        </Typography>

                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                        <TextField id="standard-basic" label="Buscar" variant="standard" onChange={(event) => setSearchByName(event.target.value)} />
                        <IconMui sx={{ fontSize: '30px', cursor: 'pointer' }} onClick={handleSearch}>search</IconMui>
                    </Box>
                    <Box marginTop={'20px'}>
                        <ListEmployeers body={!search ? data : searchDate} />
                    </Box>

                    <Box marginTop={'15px'}>
                        <Button variant={"contained"} description={"Novo Funcionário"} isLoading={false} onClick={() => navigate('/create-employerr')} />
                    </Box>
                </Box>}
        </>
    )
}