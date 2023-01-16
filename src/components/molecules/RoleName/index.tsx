import { Box, TextField } from "@mui/material"
import { useState } from "react"
import { Button } from "../../atoms/Button"

interface IRoleName {
    createNewRole: (name: string) => void | any
}

export const RoleName = ({ createNewRole }: IRoleName) => {
    const [valueRole, setValueRole] = useState<string>('')

    return (
        <Box width={'100%'}>
            <TextField
                size={'medium'}
                label={'Nome'}
                margin='normal'
                type={'text'}
                fullWidth
                onChange={(event) => setValueRole(event.target.value)}
            />

            <Button description="Cadastrar Cargo" variant="contained" type="button" isLoading={false} onClick={() => createNewRole(valueRole)} />
        </Box>

    )
}