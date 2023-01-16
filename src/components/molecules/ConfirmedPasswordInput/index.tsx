import { useFormContext } from "react-hook-form"
import { TextInput } from "../../atoms/Inputs"


export const ConfirmedPasswordInput = () => {
    const { control, formState: { errors } } = useFormContext()
    return (
        <TextInput control={control} icon={'password'} errors={errors.confirmedPassword} name={'confirmedPassword'} size={'small'} label={'Confirmar Senha'} type={'password'} />
    )
}