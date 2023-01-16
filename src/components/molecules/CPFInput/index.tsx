import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"


export const CPFInput = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={'account_circle'} errors={errors.cpf} name={'cpf'} size={'small'} label={'CPF'} />
    )
}