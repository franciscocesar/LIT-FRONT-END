import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"


export const PasswordInput = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={'password'} errors={errors.password} name={'password'} size={'small'} label={'Senha'} type={'password'} />
    )
}