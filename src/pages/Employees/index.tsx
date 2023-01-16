import { Box, Typography, useTheme } from "@mui/material"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/atoms/Button"
import { Icon } from "../../components/atoms/Icon"
import { Loading } from "../../components/atoms/Loading"
import { StyledTableCell } from "../../components/atoms/StyledTableCell"
import { StyledTableRow } from "../../components/atoms/StyledTableRow"
import { ListEmployeers } from "../../components/organisms/ListEmployees"
import { requestAllEmployees } from "../../shared/clients/EmployeeClient"

export const Employeers = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const { isLoading, error, data } = useQuery(['employees'], () =>
        requestAllEmployees().then(res =>
            res.data.data
        ),
        {
            cacheTime: 5000,
        }
    )


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
                    <Box marginTop={'20px'}>
                        <ListEmployeers body={data} />
                    </Box>


                    <Box marginTop={'15px'}>
                        <Button variant={"contained"} description={"Novo Funcionário"} isLoading={false} onClick={() => navigate('/create-employerr')} />
                    </Box>
                </Box>}
        </>
    )
}