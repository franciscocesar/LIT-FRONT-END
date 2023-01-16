import { Box, MenuItem, Typography } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { IRoleEntity } from "../../../entities/RoleEntity"
import { Icon } from "../../atoms/Icon"
import { TextInput } from "../../atoms/Inputs"

interface IRoleInput {
    options?: IRoleEntity[]
    onClick?: () => void
}

export const RoleInput = ({ options, onClick }: IRoleInput) => {
    const { control, formState: { errors } } = useFormContext()
    return (

        <>
            <TextInput control={control} icon={''} errors={errors.roles} name={'roles'} size={'small'} label={'Cargo'} defaultValue={''} selected={true} >
                {options?.map(option => (
                    <MenuItem key={option._id} value={option.name}>
                        {option.name}
                    </MenuItem>
                ))}

            </TextInput>

            <Box sx={{ alignItems: 'center', height: '20px', cursor: 'pointer', display: 'flex' }} onClick={onClick}>
                <Typography fontSize={'12px'}>                Adicionar Cargo</Typography>

                <Icon name="add" />
            </Box>
        </>


    )
}