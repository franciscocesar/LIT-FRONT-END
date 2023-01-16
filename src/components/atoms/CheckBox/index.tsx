import { Checkbox, FormControlLabel } from "@mui/material"
import { Controller } from "react-hook-form"


interface ICheckBox {
    name: string
    control: any
    label: string
}


export const CheckBox = ({ name, control, label }: ICheckBox) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControlLabel {...field} control={<Checkbox defaultChecked />} label={label} />
            )}
        />
    )
}