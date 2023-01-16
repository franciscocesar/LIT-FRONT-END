import { Box } from "@mui/material"
import { useFormContext } from "react-hook-form"
import { CheckBox } from "../../atoms/CheckBox"
import { TextInput } from "../../atoms/Inputs"



export const IsActiveCheckBox = () => {
    const { control, formState: { errors } } = useFormContext()
    return (

        <CheckBox control={control} label={'Ativo'} name={'active'} />

    )
}