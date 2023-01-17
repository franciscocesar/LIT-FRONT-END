import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"

interface ICPFInput {
    defaultValue?: string
}


export const CPFInput = ({ defaultValue }: ICPFInput) => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={'account_circle'} errors={errors.cpf} name={'cpf'} size={'small'} label={'CPF'} defaultValue={defaultValue} />
    )
}