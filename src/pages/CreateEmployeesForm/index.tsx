import { Box, Typography, useTheme } from "@mui/material"
import { Icon } from "../../components/atoms/Icon"
import { FormRegisterEmployee } from "../../components/organisms/FormRegisterEmployee"


export const CreateEmployeer = () => {
    const theme = useTheme()

    return (
        <Box padding={'15px'}>
            <Box height={theme.spacing(2.5)} />
            <Box display='flex' alignItems='center'>
                <Icon name="confirmation_number_sharp" />
                <Typography ml={2} variant='h4'>
                    Cadastro
                </Typography>

            </Box>
            <Box marginTop={'20px'}>
                <FormRegisterEmployee />
            </Box>
        </Box>

    )
}