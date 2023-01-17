import { Box, MenuItem, Typography } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { useQuery } from "react-query"
import { IRoleEntity } from "../../../entities/RoleEntity"
import { requestAllRoles } from "../../../shared/clients/RoleClient"
import { Icon } from "../../atoms/Icon"
import { TextInput } from "../../atoms/Inputs"

interface IRoleInput {
    onClick?: () => void
    addRole?: boolean
}

export const RoleInput = ({ onClick, addRole = true }: IRoleInput) => {
    const { control, formState: { errors } } = useFormContext()
    const { data } = useQuery(['role'], () =>
        requestAllRoles().then(res =>
            res.data.data
        ),
        {
            cacheTime: 5000,
        }
    )
    return (

        <>
            <TextInput control={control} icon={''} errors={errors.roles} name={'roles'} size={'small'} label={'Cargo'} defaultValue={''} selected={true} >
                {data?.map(option => (
                    <MenuItem key={option._id} value={option.name}>
                        {option.name}
                    </MenuItem>
                ))}

            </TextInput>
            {addRole && <Box sx={{ alignItems: 'center', height: '20px', cursor: 'pointer', display: 'flex' }} onClick={onClick}>
                <Typography fontSize={'12px'}>                Adicionar Cargo</Typography>

                <Icon name="add" />
            </Box>}

        </>


    )
}